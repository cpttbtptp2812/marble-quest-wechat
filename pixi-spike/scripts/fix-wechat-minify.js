#!/usr/bin/env node
'use strict'

const fs = require('node:fs')
const path = require('node:path')

const file = path.resolve(process.cwd(), 'dist-wechat', 'game.js')
if (!fs.existsSync(file)) {
  throw new Error('WeChat build output not found: ' + file)
}

const source = fs.readFileSync(file, 'utf8')
// A minifier may compress the ternary expression "condition ? .5 : 0"
// into "condition?.5:0". The latter is valid under modern tokenization rules,
// but older WeChat DevTools parsers can treat "?." as optional chaining and
// fail with "Invalid or unexpected token". Optional chaining cannot legally
// be followed by a decimal digit, so separating this token is semantics-safe.
const fixed = source.replace(/\?\.(?=\d)/g, '? .')
const replacements = (source.match(/\?\.(?=\d)/g) || []).length

if (/\?\.(?=\d)/.test(fixed)) {
  throw new Error('Ambiguous ternary punctuation remains in game.js')
}

fs.writeFileSync(file, fixed, 'utf8')
console.log(
  '[wechat-compat] parser-safe ternaries: ' + replacements +
  '; game.js: ' + Buffer.byteLength(fixed, 'utf8') + ' bytes'
)
