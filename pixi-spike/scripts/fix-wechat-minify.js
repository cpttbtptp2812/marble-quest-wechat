#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve, join } from 'node:path'

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
let replacements = 0
for (const file of files) {
  const source = readFileSync(file, 'utf8')
  const fixed = source.replace(/\?\.(?=\d)/g, '? .')
  replacements += (source.match(/\?\.(?=\d)/g) || []).length
  if (/\?\.(?=\d)/.test(fixed)) throw new Error('Ambiguous ternary token remains in ' + file)
  writeFileSync(file, fixed, 'utf8')
}
console.log('[wechat-compat] parser-safe ternaries: ' + replacements + '; checked JS chunks: ' + files.length)
