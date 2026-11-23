import './prelude.wechat'
import { Viewport } from 'sapling2d'
import { startGame } from 'sapling2d/wechat'
import { ArenaScene, gameOptions } from './game'

const BUILD_ID = '2026-11-23-R3'

// Use at least 2x and at most 3x backing resolution. Some DevTools
// simulators report DPR=1 even when the preview is displayed much larger.
Object.defineProperty(Viewport.prototype, 'renderResolution', {
  configurable: true,
  get() {
    const dpr = Number(this.screen.pixelRatio) || 1
    return Math.min(Math.max(dpr, 2), 3)
  },
})

console.log('[MarbleQuest Pixi][' + BUILD_ID + '] calling startGame')

void startGame(gameOptions).then((game) => {
  const log = (message: string) => console.log('[MarbleQuest Pixi][' + BUILD_ID + '] ' + message)
  const viewport = game.tree.viewport
  const canvas = (game.platform as unknown as { canvas?: { width: number; height: number } }).canvas
  const canvasSize = canvas ? canvas.width + 'x' + canvas.height : 'unknown'
  const scene = game.scene as ArenaScene

  const bootInfo =
    'DPR ' + viewport.screen.pixelRatio + '/' + viewport.renderResolution +
    'x  CANVAS ' + canvasSize +
    '  DESIGN ' + viewport.designWidth + 'x' + viewport.designHeight
  log('started; screen=' + viewport.screen.width + 'x' + viewport.screen.height +
    ' deviceDPR=' + viewport.screen.pixelRatio +
    ' renderDPR=' + viewport.renderResolution +
    ' canvas=' + canvasSize +
    ' design=' + viewport.designWidth + 'x' + viewport.designHeight +
    ' scale=' + viewport.scale.toFixed(3))
  scene.setDiagnostics(bootInfo + '  WAIT FPS')

  // Show and log the real frame metrics. The debug line is rendered on-screen.
  const report = () => {
    const stats = game.frameStats
    const fps = stats.fps
    const logic = stats.logicAvg
    const render = stats.renderAvg
    const marbles = game.tree.getNodesInGroup('marbles').length
    const line = 'FPS ' + fps.toFixed(0) + '  CPU ' + logic.toFixed(1) +
      'ms  GPU ' + render.toFixed(1) + 'ms  ORBS ' + marbles
    scene.setDiagnostics(line)
    log(line)
    game.resetFrameStats()
  }
  setInterval(report, 1000)
}).catch((error: unknown) => {
  let detail = ''
  try {
    detail = error instanceof Error ? error.stack || error.message : String(error)
  } catch (_ignored) {
    detail = 'unknown startGame failure'
  }
  console.error('[MarbleQuest Pixi][' + BUILD_ID + '] startGame failed: ' + detail)
  if (typeof GameGlobal !== 'undefined') GameGlobal.__marbleQuestLastError = detail
})
