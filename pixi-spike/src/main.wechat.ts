import './prelude.wechat'
import { Viewport, v } from 'sapling2d'
import { startGame } from 'sapling2d/wechat'
import { ArenaScene, gameOptions } from './game-nape'

const BUILD_ID = '2026-11-23-NAPE-1'

// Use native DPR, capped at 3x. The game scene itself uses "keep" aspect,
// so the complete design canvas and all controls stay visible on phones.
Object.defineProperty(Viewport.prototype, 'renderResolution', {
  configurable: true,
  get() {
    const dpr = Number(this.screen.pixelRatio) || 1
    return Math.min(Math.max(dpr, 2), 3)
  },
})

console.log('[MarbleQuest][' + BUILD_ID + '] booting Pixi + Nape')

void startGame(gameOptions).then((game) => {
  const log = (message: string) => console.log('[MarbleQuest][' + BUILD_ID + '] ' + message)
  const viewport = game.tree.viewport
  const canvas = (game.platform as unknown as { canvas?: { width: number; height: number } }).canvas
  const canvasSize = canvas ? canvas.width + 'x' + canvas.height : 'unknown'
  const scene = game.scene as ArenaScene

  // Use Sapling2D's official WeChat platform input adapter. It already
  // converts wx touches into pointerdown/move/up/cancel events in logical
  // window pixels; only one coordinate transform is applied here.
  const platform = game.platform as unknown as {
    onInput: (callback: (event: { type: string; pointerId: number; x: number; y: number }) => void) => () => void
  }
  const unsubscribeInput = platform.onInput((event) => {
    const point = viewport.screenToDesign(v(event.x, event.y))
    if (event.type === 'pointerdown') scene.handlePointerDown(event.pointerId, point)
    else if (event.type === 'pointermove') scene.handlePointerMove(event.pointerId, point)
    else if (event.type === 'pointerup') scene.handlePointerUp(event.pointerId, point)
    else if (event.type === 'pointercancel') scene.handlePointerCancel(event.pointerId)
  })

  const bootInfo =
    'NAPE ' + '3.43.5' +
    ' · DPR ' + viewport.screen.pixelRatio + '/' + viewport.renderResolution +
    'x · CANVAS ' + canvasSize
  scene.setDiagnostics(bootInfo + ' · INPUT READY')
  log('platform input subscribed')
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
  const timer = setInterval(report, 1000)
  ;(scene as ArenaScene & { __disposeInput?: () => void }).__disposeInput = () => {
    clearInterval(timer)
    unsubscribeInput()
  }
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
