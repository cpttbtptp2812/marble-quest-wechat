/// <reference path="./wechat-global.d.ts" />
const buildId = '2026-11-23-R4'
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

console.log('[MarbleQuest Pixi][' + buildId + '] BOOT: main bundle entered')

if (typeof wx !== 'undefined') {
  if (typeof wx.onError === 'function') {
    wx.onError((error: unknown) => report('wx.onError', error))
  }
  if (typeof wx.onUnhandledRejection === 'function') {
    wx.onUnhandledRejection((event: unknown) => report('unhandled-rejection', event))
  }
}
