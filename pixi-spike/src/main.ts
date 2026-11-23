import { startGame } from 'sapling2d/browser'
import { gameOptions } from './game-nape'

const game = await startGame(gameOptions)
Object.assign(globalThis, { marbleQuest: game })
