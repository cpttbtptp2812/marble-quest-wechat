/// <reference path="./wechat-global.d.ts" />
const buildId = '2026-11-23-R6'
const report = (kind: string, value: unknown): void => {
  let detail = ''
  try {
    detail = typeof value === 'string' ? value : JSON.stringify(value)
  } catch (_error) {
    detail = String(value)
  }
  console.error('[MarbleQuest Pixi][' + buildId + '][' + kind + '] ' + detail)
  if (typeof GameGlobal !== 'undefined') GameGlobal.__marbleQuestLastError = detail
}

// Define a minimal navigator before the generated entry requires Pixi/Sapling chunks.
 // Some Pixi feature-detection paths read navigator while those chunks are being
 // evaluated, before Sapling's WeChat adapter has completed its own bootstrap.
type MiniGameNavigator = { userAgent?: unknown; platform?: unknown; maxTouchPoints?: unknown; gpu?: unknown }
const hostGlobal = (typeof globalThis !== 'undefined' ? globalThis : GameGlobal) as unknown as {
  navigator?: MiniGameNavigator
}
if (!hostGlobal.navigator || typeof hostGlobal.navigator.userAgent !== 'string') {
  const miniGameNavigator: MiniGameNavigator = {
    userAgent: 'wechatgame',
    platform: 'wechatgame',
    maxTouchPoints: 1,
    gpu: null,
  }
  try {
    Object.defineProperty(hostGlobal, 'navigator', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: miniGameNavigator,
    })
  } catch (_error) {
    hostGlobal.navigator = miniGameNavigator
  }
}

console.log('[MarbleQuest Pixi][' + buildId + '] BOOT: main bundle entered; navigator=' +
  (hostGlobal.navigator && typeof hostGlobal.navigator.userAgent === 'string' ? 'ready' : 'missing'))

if (typeof wx !== 'undefined') {
  if (typeof wx.onError === 'function') {
    wx.onError((error: unknown) => report('wx.onError', error))
  }
  if (typeof wx.onUnhandledRejection === 'function') {
    wx.onUnhandledRejection((event: unknown) => report('unhandled-rejection', event))
  }
}
