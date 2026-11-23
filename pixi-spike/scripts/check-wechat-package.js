#!/usr/bin/env node
import { existsSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const ts = require('typescript')

const outDir = resolve(process.cwd(), 'dist-wechat')
const gameFile = resolve(outDir, 'game.js')
const configFile = resolve(outDir, 'project.config.json')
const gameJsonFile = resolve(outDir, 'game.json')
for (const file of [gameFile, configFile, gameJsonFile]) if (!existsSync(file)) throw new Error('Missing WeChat output: ' + file)

const config = JSON.parse(readFileSync(configFile, 'utf8'))
if (config.compileType !== 'game') throw new Error('Expected compileType=game')
if (config.setting.es6 !== false) throw new Error('Final ES5 output should keep DevTools ES6 transform disabled')

const game = readFileSync(gameFile, 'utf8')
if (!game.includes('2026-11-23-R3')) throw new Error('Build stamp missing from game.js')
if (/\\?\\.(?=\\d)/.test(game)) throw new Error('Ambiguous optional-chain / ternary token remains')
if (/^\\s*(import|export)\\s/m.test(game)) throw new Error('game.js must be a single CommonJS bundle')

const sf = ts.createSourceFile('game.js', game, ts.ScriptTarget.ES5, true, ts.ScriptKind.JS)
if (sf.parseDiagnostics.length) throw new Error('Final ES5 game.js did not parse')
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
if (leftovers.length) throw new Error('Unsupported modern syntax: ' + leftovers.map(([k,n]) => k + '=' + n).join(', '))
const bytes = statSync(gameFile).size
if (bytes >= 4 * 1024 * 1024) throw new Error('game.js exceeds WeChat main package budget')
console.log('[wechat-package-check] ES5 syntax OK; es6=false; ' + bytes + ' bytes')
