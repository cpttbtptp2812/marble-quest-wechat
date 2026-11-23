#!/usr/bin/env node
import { existsSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const outDir = resolve(process.cwd(), 'dist-wechat')
const gameFile = resolve(outDir, 'game.js')
const configFile = resolve(outDir, 'project.config.json')
const gameJsonFile = resolve(outDir, 'game.json')

for (const file of [gameFile, configFile, gameJsonFile]) {
  if (!existsSync(file)) throw new Error('Missing WeChat output: ' + file)
}

const config = JSON.parse(readFileSync(configFile, 'utf8'))
if (config.compileType !== 'game') throw new Error('Expected compileType=game')
if (config.setting?.es6 !== true) throw new Error('Expected ES6->ES5 transpilation enabled in project.config.json')

const game = readFileSync(gameFile, 'utf8')
if (!game.includes('2026-11-23-R3')) throw new Error('Build stamp missing from game.js')
if (/\?\.(?=\d)/.test(game)) throw new Error('Ambiguous optional-chain / ternary token remains')
if (/^\s*(import|export)\s/m.test(game)) throw new Error('game.js must be a single CommonJS bundle')

const bytes = statSync(gameFile).size
if (bytes >= 4 * 1024 * 1024) throw new Error('game.js exceeds WeChat main-package size budget')
console.log('[wechat-package-check] OK; ES6->ES5 enabled; game.js=' + bytes + ' bytes')
