import './prelude.wechat'
import { Viewport } from 'sapling2d'
import { startGame } from 'sapling2d/wechat'
import { ArenaScene, gameOptions } from './game-nape'

const BUILD_ID = '2026-11-23-NAPE-2'

// Follow Sapling2D's mobile render budget: use the device DPR, capped at 2x.
// This avoids forcing 2–3x rendering on lower-resolution / slower phones.
Object.defineProperty(Viewport.prototype, 'renderResolution', {
  configurable: true,
  get() {
    const dpr = Number(this.screen.pixelRatio) || 1
    return Math.min(dpr, 2)
  },
})

console.log('[MarbleQuest][' + BUILD_ID + '] booting Pixi + Nape')

void startGame(gameOptions).then((game) => {
  const log = (message: string) => console.log('[MarbleQuest][' + BUILD_ID + '] ' + message)
  const viewport = game.tree.viewport
  const canvas = (game.platform as unknown as { canvas?: { width: number; height: number } }).canvas
  const canvasSize = canvas ? canvas.width + 'x' + canvas.height : 'unknown'
  const scene = game.scene as ArenaScene

  // Raw WeChat touch events are subscribed once by Sapling2D's Game runtime.
  // ArenaScene receives normalized design-space pointer events through its
  // invisible input surface, including captured drag and release events.
  const bootInfo =
    'NAPE ' + '3.43.5' +
    ' · DPR ' + viewport.screen.pixelRatio + '/' + viewport.renderResolution +
    'x · CANVAS ' + canvasSize
  scene.setDiagnostics(bootInfo + ' · INPUT READY')
  log('Sapling pointer pipeline ready')
  log('screen=' + viewport.screen.width + 'x' + viewport.screen.height +
    ' dpr=' + viewport.screen.pixelRatio +
    ' renderDpr=' + viewport.renderResolution +
    ' canvas=' + canvasSize +
    ' design=' + viewport.designWidth + 'x' + viewport.designHeight +
    ' scale=' + viewport.scale.toFixed(3))

  const report = () => {
    const stats = game.frameStats
    const line = 'FPS ' + stats.fps.toFixed(0) +
      ' CPU ' + stats.logicAvg.toFixed(1) +
      ' GPU ' + stats.renderAvg.toFixed(1) +
      ' ORB ' + scene.marbles.length +
      ' SHOT ' + scene.shotsFired + ' ' + scene.inputState
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
  console.error('[MarbleQuest][' + BUILD_ID + '] startGame failed: ' + detail)
  if (typeof GameGlobal !== 'undefined') GameGlobal.__marbleQuestLastError = detail
})
