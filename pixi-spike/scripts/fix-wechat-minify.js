#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const file = resolve(process.cwd(), 'dist-wechat', 'game.js')
if (!existsSync(file)) {
  throw new Error('WeChat build output not found: ' + file)
}

const source = readFileSync(file, 'utf8')
// A minifier may compress the ternary expression "condition ? .5 : 0"
// into "condition?.5:0". Older WeChat DevTools parsers can treat "?." as
// optional chaining and fail with "Invalid or unexpected token". Optional
// chaining cannot legally be followed by a decimal digit, so this is safe.
const fixed = source.replace(/\?\.(?=\d)/g, '? .')
const replacements = (source.match(/\?\.(?=\d)/g) || []).length

if (/\?\.(?=\d)/.test(fixed)) {
  throw new Error('Ambiguous ternary punctuation remains in game.js')
}

writeFileSync(file, fixed, 'utf8')
console.log(
  '[wechat-compat] parser-safe ternaries: ' + replacements +
  '; game.js: ' + Buffer.byteLength(fixed, 'utf8') + ' bytes'
)
