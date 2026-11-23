#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const ts = require('typescript')

const root = resolve(process.cwd(), 'dist-wechat')
if (!existsSync(root)) throw new Error('WeChat build directory not found: ' + root)
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = join(dir, entry.name)
    return entry.isDirectory() ? walk(file) : entry.isFile() && entry.name.endsWith('.js') ? [file] : []
  })
}
const files = walk(root)
if (!files.some((file) => file === resolve(root, 'game.js'))) throw new Error('WeChat game.js entry not found')

const forbidden = { arrow:0, class:0, async:0, await:0, template:0, privateField:0, optionalChain:0, spread:0, constLet:0, generator:0 }
function inspect(node, counts) {
  if (ts.isArrowFunction(node)) counts.arrow++
  if (ts.isClassDeclaration(node) || ts.isClassExpression(node)) counts.class++
  if (ts.isAwaitExpression(node)) counts.await++
  if (ts.isTemplateExpression(node) || ts.isNoSubstitutionTemplateLiteral(node)) counts.template++
  if (node.kind === ts.SyntaxKind.PrivateIdentifier) counts.privateField++
  if (node.questionDotToken) counts.optionalChain++
  if (ts.isSpreadElement(node) || ts.isSpreadAssignment(node)) counts.spread++
  if (ts.isVariableDeclarationList(node) && (node.flags & (ts.NodeFlags.Let | ts.NodeFlags.Const))) counts.constLet++
  if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node)) &&
      node.modifiers && node.modifiers.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)) counts.async++
  if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isMethodDeclaration(node)) && node.asteriskToken) counts.generator++
  ts.forEachChild(node, (child) => inspect(child, counts))
}
let totalBytes = 0
for (const file of files) {
  const input = readFileSync(file, 'utf8')
  const result = ts.transpileModule(input, {
    fileName: file,
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
    throw new Error('ES5 transform failed for ' + file + ':\\n' + detail)
  }
  const output = result.outputText
  const sf = ts.createSourceFile(file, output, ts.ScriptTarget.ES5, true, ts.ScriptKind.JS)
  if (sf.parseDiagnostics.length) throw new Error('ES5 output parse failed: ' + file)
  const counts = { ...forbidden }
  inspect(sf, counts)
  const leftovers = Object.entries(counts).filter(([, count]) => count > 0)
  if (leftovers.length) throw new Error('Modern syntax remains in ' + file + ': ' + leftovers.map(([k,n]) => k + '=' + n).join(', '))
  writeFileSync(file, output, 'utf8')
  totalBytes += statSync(file).size
}
if (totalBytes >= 4 * 1024 * 1024) throw new Error('Total JS chunks exceed WeChat main package budget: ' + totalBytes)
console.log('[wechat-es5] transpiled ' + files.length + ' JS files to ES5; total ' + totalBytes.toLocaleString() + ' bytes')
