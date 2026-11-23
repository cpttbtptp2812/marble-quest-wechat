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
// The shipped bundle is valid ES2017, but enable DevTools' ES6 -> ES5 pass
// to improve compatibility with older Windows Mini Game parser/runtime builds.
config.setting.es6 = true
config.setting.enhance = false
writeFileSync(configFile, JSON.stringify(config, null, 2) + '\n', 'utf8')

console.log('[wechat-compat] parser-safe ternaries: ' + replacements)
console.log('[wechat-compat] DevTools ES6->ES5: enabled')
console.log('[wechat-compat] game.js: ' + Buffer.byteLength(fixed, 'utf8') + ' bytes')
