#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const ts = require('typescript')

const root = resolve(process.cwd(), 'dist-wechat')
const gameFile = resolve(root, 'game.js')
const configFile = resolve(root, 'project.config.json')
const gameJsonFile = resolve(root, 'game.json')
for (const file of [gameFile, configFile, gameJsonFile]) if (!existsSync(file)) throw new Error('Missing WeChat output: ' + file)

const config = JSON.parse(readFileSync(configFile, 'utf8'))
if (config.compileType !== 'game') throw new Error('Expected compileType=game')
if (config.setting.es6 !== false) throw new Error('Final ES5 output should keep DevTools ES6 transform disabled')

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = join(dir, entry.name)
    return entry.isDirectory() ? walk(file) : entry.isFile() && entry.name.endsWith('.js') ? [file] : []
  })
}
const files = walk(root)
if (files.length < 2) throw new Error('Expected split WeChat output: game.js plus at least one JS chunk')
let totalBytes = 0
for (const file of files) {
  const game = readFileSync(file, 'utf8')
  const sf = ts.createSourceFile(file, game, ts.ScriptTarget.ES5, true, ts.ScriptKind.JS)
  if (sf.parseDiagnostics.length) throw new Error('Final ES5 JS did not parse: ' + file)
  const unsupported = { arrow:0, class:0, async:0, await:0, template:0, privateField:0, optionalChain:0, spread:0, constLet:0, generator:0 }
  function inspect(node) {
    if (ts.isArrowFunction(node)) unsupported.arrow++
    if (ts.isClassDeclaration(node) || ts.isClassExpression(node)) unsupported.class++
    if (ts.isAwaitExpression(node)) unsupported.await++
    if (ts.isTemplateExpression(node) || ts.isNoSubstitutionTemplateLiteral(node)) unsupported.template++
    if (node.kind === ts.SyntaxKind.PrivateIdentifier) unsupported.privateField++
    if (node.questionDotToken) unsupported.optionalChain++
    if (ts.isSpreadElement(node) || ts.isSpreadAssignment(node)) unsupported.spread++
    if (ts.isVariableDeclarationList(node) && (node.flags & (ts.NodeFlags.Let | ts.NodeFlags.Const))) unsupported.constLet++
    if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node)) &&
        node.modifiers && node.modifiers.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)) unsupported.async++
    if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node)) && node.asteriskToken) unsupported.generator++
    ts.forEachChild(node, inspect)
  }
  inspect(sf)
  const leftovers = Object.entries(unsupported).filter(([,n]) => n > 0)
  if (leftovers.length) throw new Error('Unsupported modern syntax in ' + file + ': ' + leftovers.map(([k,n]) => k + '=' + n).join(', '))
  totalBytes += statSync(file).size
}
if (totalBytes >= 4 * 1024 * 1024) throw new Error('Total JavaScript files exceed WeChat main package budget: ' + totalBytes)
console.log('[wechat-package-check] ES5 OK; ' + files.length + ' JS modules; ' + totalBytes.toLocaleString() + ' bytes')
