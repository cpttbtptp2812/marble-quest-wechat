import { startGame } from 'sapling2d/wechat'
import { gameOptions } from './game'

void startGame(gameOptions).then((game) => {
  const log = (message: string) => console.log(`[MarbleQuest Pixi] ${message}`)
  log(`started; screen=${JSON.stringify(game.tree.viewport.screen)}; design=${game.tree.viewport.designWidth}x${game.tree.viewport.designHeight}`)
  let lastFrames = game.tree.processFrames
  let lastTime = Date.now()
  setInterval(() => {
    const now = Date.now()
    const frames = game.tree.processFrames
    const fps = ((frames - lastFrames) * 1000) / Math.max(1, now - lastTime)
    log(`fps=${fps.toFixed(1)} marbles=${game.tree.getNodesInGroup('marbles').length}`)
    lastFrames = frames
    lastTime = now
  }, 5000)
})
