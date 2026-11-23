#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const outDir = resolve(process.cwd(), 'dist-wechat')
const gameFile = resolve(outDir, 'game.js')
const configFile = resolve(outDir, 'project.config.json')

if (!existsSync(gameFile) || !existsSync(configFile)) {
  throw new Error('WeChat build output is incomplete: expected game.js and project.config.json')
}

const source = readFileSync(gameFile, 'utf8')
// Some minifiers collapse "condition ? .5 : 0" into "condition?.5:0".
// Keep a space so older WeChat parser builds cannot misread it as optional chaining.
const fixed = source.replace(/\?\.(?=\d)/g, '? .')
const replacements = (source.match(/\?\.(?=\d)/g) || []).length
if (/\?\.(?=\d)/.test(fixed)) throw new Error('Ambiguous ternary punctuation remains in game.js')
writeFileSync(gameFile, fixed, 'utf8')

const config = JSON.parse(readFileSync(configFile, 'utf8'))
config.setting = config.setting || {}
// The bundle is downlevelled to ES5 by transpile-wechat-es5.js. Keep DevTools
// transformation disabled so it does not reprocess an already lowered bundle.
config.setting.es6 = false
config.setting.enhance = false
writeFileSync(configFile, JSON.stringify(config, null, 2) + '\n', 'utf8')

console.log('[wechat-compat] parser-safe ternaries: ' + replacements)
console.log('[wechat-compat] DevTools ES6->ES5: disabled (bundle is pre-transpiled)')
console.log('[wechat-compat] game.js: ' + Buffer.byteLength(fixed, 'utf8') + ' bytes')
