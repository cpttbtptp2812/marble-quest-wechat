import { Viewport } from 'sapling2d'
import { startGame } from 'sapling2d/wechat'
import { gameOptions } from './game'

// Use native device DPR (capped at 3x) instead of the engine's default 2x cap.
// This increases framebuffer detail without shrinking the game design canvas.
Object.defineProperty(Viewport.prototype, 'renderResolution', {
  configurable: true,
  get() {
    const dpr = Number(this.screen.pixelRatio) || 1
    return Math.min(dpr, 3)
  },
})

void startGame(gameOptions).then((game) => {
  const log = (message: string) => console.log('[MarbleQuest Pixi] ' + message)
  const viewport = game.tree.viewport
  const canvas = (game.platform as unknown as { canvas?: { width: number; height: number } }).canvas
  const canvasSize = canvas ? canvas.width + 'x' + canvas.height : 'unknown'
  log(
    'started; screen=' + viewport.screen.width + 'x' + viewport.screen.height +
    ' deviceDPR=' + viewport.screen.pixelRatio +
    ' renderDPR=' + viewport.renderResolution +
    ' canvas=' + canvasSize +
    ' design=' + viewport.designWidth + 'x' + viewport.designHeight +
    ' scale=' + viewport.scale.toFixed(3)
  )

  // Report engine frame stats so FPS, game logic, and GPU rendering can be
  // distinguished in the WeChat DevTools console.
  const report = () => {
    const stats = game.frameStats
    const fps = stats.fps
    const logic = stats.logicAvg
    const render = stats.renderAvg
    const marbles = game.tree.getNodesInGroup('marbles').length
    log('fps=' + fps.toFixed(1) + ' logic=' + logic.toFixed(2) + 'ms render=' + render.toFixed(2) + 'ms marbles=' + marbles)
    game.resetFrameStats()
  }
  setInterval(report, 5000)
})
