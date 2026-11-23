#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const ts = require('typescript')

const file = resolve(process.cwd(), 'dist-wechat', 'game.js')
if (!existsSync(file)) throw new Error('WeChat entry not found: ' + file)

const input = readFileSync(file, 'utf8')
const result = ts.transpileModule(input, {
  fileName: 'game.js',
  reportDiagnostics: true,
  compilerOptions: {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    isolatedModules: false,
    importHelpers: false,
    noEmitHelpers: false,
    downlevelIteration: false,
    useDefineForClassFields: false,
    removeComments: true,
    alwaysStrict: false,
    newLine: ts.NewLineKind.LineFeed,
  },
})

const errors = (result.diagnostics || []).filter((d) => d.category === ts.DiagnosticCategory.Error)
if (errors.length) {
  const detail = errors.map((d) => ts.flattenDiagnosticMessageText(d.messageText, '\\n')).join('\\n')
  throw new Error('TypeScript ES5 transform failed:\\n' + detail)
}

const output = result.outputText
const sourceFile = ts.createSourceFile('game.js', output, ts.ScriptTarget.ES5, true, ts.ScriptKind.JS)
if (sourceFile.parseDiagnostics.length) {
  const detail = sourceFile.parseDiagnostics.map((d) => ts.flattenDiagnosticMessageText(d.messageText, '\\n')).join('\\n')
  throw new Error('ES5 output did not parse:\\n' + detail)
}

const forbidden = { arrow:0, class:0, async:0, await:0, template:0, privateField:0, optionalChain:0, spread:0, constLet:0, generator:0 }
function inspect(node) {
  if (ts.isArrowFunction(node)) forbidden.arrow++
  if (ts.isClassDeclaration(node) || ts.isClassExpression(node)) forbidden.class++
  if (ts.isAwaitExpression(node)) forbidden.await++
  if (ts.isTemplateExpression(node) || ts.isNoSubstitutionTemplateLiteral(node)) forbidden.template++
  if (node.kind === ts.SyntaxKind.PrivateIdentifier) forbidden.privateField++
  if (node.questionDotToken) forbidden.optionalChain++
  if (ts.isSpreadElement(node) || ts.isSpreadAssignment(node)) forbidden.spread++
  if (ts.isVariableDeclarationList(node) && (node.flags & (ts.NodeFlags.Let | ts.NodeFlags.Const))) forbidden.constLet++
  if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node)) &&
      node.modifiers && node.modifiers.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)) forbidden.async++
  if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node)) && node.asteriskToken) forbidden.generator++
  ts.forEachChild(node, inspect)
}
inspect(sourceFile)
const leftovers = Object.entries(forbidden).filter(([, count]) => count > 0)
if (leftovers.length) throw new Error('Modern syntax remains: ' + leftovers.map(([key,count]) => key + '=' + count).join(', '))
if (output.length < input.length * 0.7) throw new Error('Unexpectedly large reduction during ES5 transpile')
if (Buffer.byteLength(output, 'utf8') > 4 * 1024 * 1024) throw new Error('ES5-transpiled game.js exceeds WeChat main package budget')

writeFileSync(file, output, 'utf8')
console.log('[wechat-es5] ES5 transform OK; ' + statSync(file).size.toLocaleString() + ' bytes')
