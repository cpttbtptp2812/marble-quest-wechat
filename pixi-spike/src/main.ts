import { startGame } from 'sapling2d/browser'
import { v } from 'sapling2d'
import { ArenaScene, gameOptions } from './game-nape'

const game = await startGame(gameOptions)
const scene = game.scene as ArenaScene
const viewport = game.tree.viewport

// ArenaScene handles a custom aim/freeze/release gesture rather than node
// hit-testing. Reconnect that gesture to the browser platform's raw pointer
// stream (the WeChat entry does the same with the WeChat platform adapter).
const unsubscribeInput = game.platform.onInput((event) => {
  const point = viewport.screenToDesign(v(event.x, event.y))
  if (event.type === 'pointerdown') scene.handlePointerDown(event.pointerId, point)
  else if (event.type === 'pointermove') scene.handlePointerMove(event.pointerId, point)
  else if (event.type === 'pointerup') scene.handlePointerUp(event.pointerId, point)
  else if (event.type === 'pointercancel') scene.handlePointerCancel(event.pointerId)
})

window.addEventListener('pagehide', unsubscribeInput, { once: true })
Object.assign(globalThis, { marbleQuest: game })
