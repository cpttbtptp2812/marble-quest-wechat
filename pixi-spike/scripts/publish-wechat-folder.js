#!/usr/bin/env node
import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const source = resolve(process.cwd(), 'dist-wechat')
const destination = resolve(process.cwd(), '..', 'wechat-release')

if (!existsSync(source)) {
  throw new Error('WeChat build directory not found: ' + source)
}
for (const required of ['game.js', 'game.json', 'project.config.json']) {
  if (!existsSync(resolve(source, required))) {
    throw new Error('Required WeChat output missing: ' + required)
  }
}

// Keep the import target clean: only compiled game files/assets, never source,
// npm scripts, TypeScript, Vite config, or build tooling.
rmSync(destination, { recursive: true, force: true })
cpSync(source, destination, { recursive: true })

const files = readdirSync(destination)
console.log('[wechat-publish] ready: ' + destination)
console.log('[wechat-publish] root files: ' + files.join(', '))
