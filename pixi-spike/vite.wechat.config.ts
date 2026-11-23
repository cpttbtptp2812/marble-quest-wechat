import { defineConfig, type Plugin } from 'vite'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { sapling, saplingWechat } from 'sapling2d/vite'

// Sapling's default WeChat preset inlines everything into one CommonJS file.
// Override that output policy: the entry stays small and heavy runtime libraries
// are emitted as local CommonJS chunks that WeChat can require().
const splitWechatRuntime = {
  name: 'marble-quest:split-wechat-runtime',
  enforce: 'post' as const,
  config() {
    return {
      build: {
        rolldownOptions: {
          output: {
            inlineDynamicImports: false,
            strictExecutionOrder: true,
            chunkFileNames: 'chunks/[name]-[hash].js',
            codeSplitting: {
              groups: [
                { name: 'pixi-vendor', test: /[\\/]node_modules[\\/](?:pixi\\.js|@pixi)[\\/]/, priority: 30 },
                { name: 'nape-physics', test: /[\\/]node_modules[\\/]@newkrok[\\/]nape-js[\\/]/, priority: 28, minSize: 45000, maxSize: 300000 },
                { name: 'nape-pixi', test: /[\\/]node_modules[\\/]@newkrok[\\/]nape-pixi[\\/]/, priority: 27, minSize: 12000, maxSize: 180000 },
                { name: 'sapling-engine', test: /[\\/]node_modules[\\/]sapling2d[\\/]/, priority: 20, minSize: 45000, maxSize: 300000 },
                { name: 'planck-physics', test: /[\\/]node_modules[\\/]planck[\\/]/, priority: 10 },
                { name: 'vendor', test: /[\\/]node_modules[\\/]/, priority: 1 },
              ],
            },
          },
        },
      },
    }
  },
}


// Pixi's browser feature detection may run while the CommonJS chunks are being
// evaluated. The source prelude is invoked later by the entry module, so place
// this tiny environment shim at byte zero of the generated WeChat game.js.
const wechatNavigatorBootstrap = `;(function () {
  var host = typeof globalThis !== 'undefined'
    ? globalThis
    : (typeof GameGlobal !== 'undefined' ? GameGlobal : null);
  if (!host) return;
  if (!host.navigator || typeof host.navigator.userAgent !== 'string') {
    var navigatorShim = {
      userAgent: 'wechatgame',
      platform: 'wechatgame',
      maxTouchPoints: 1,
      gpu: null
    };
    try {
      Object.defineProperty(host, 'navigator', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: navigatorShim
      });
    } catch (_error) {
      host.navigator = navigatorShim;
    }
  }

  // Pixi's Ticker calls the global RAF directly. Some WeChat DevTools/runtime
  // versions expose it on GameGlobal (or only provide timer APIs), so normalize
  // the global pair before any Sapling/Pixi chunk starts the ticker.
  var gameGlobal = typeof GameGlobal !== 'undefined' ? GameGlobal : host;
  var nativeRequestFrame =
    typeof host.requestAnimationFrame === 'function' ? host.requestAnimationFrame :
    (typeof gameGlobal.requestAnimationFrame === 'function' ? gameGlobal.requestAnimationFrame :
    (typeof wx !== 'undefined' && typeof wx.requestAnimationFrame === 'function' ? wx.requestAnimationFrame : null));
  var nativeCancelFrame =
    typeof host.cancelAnimationFrame === 'function' ? host.cancelAnimationFrame :
    (typeof gameGlobal.cancelAnimationFrame === 'function' ? gameGlobal.cancelAnimationFrame :
    (typeof wx !== 'undefined' && typeof wx.cancelAnimationFrame === 'function' ? wx.cancelAnimationFrame : null));

  if (typeof host.requestAnimationFrame !== 'function') {
    host.requestAnimationFrame = nativeRequestFrame
      ? function (callback) { return nativeRequestFrame.call(gameGlobal, callback); }
      : function (callback) {
          var now = host.performance && typeof host.performance.now === 'function'
            ? host.performance.now()
            : Date.now();
          return host.setTimeout(function () {
            var timestamp = host.performance && typeof host.performance.now === 'function'
              ? host.performance.now()
              : Date.now();
            callback(timestamp > now ? timestamp : now + 16);
          }, 16);
        };
  }
  if (typeof host.cancelAnimationFrame !== 'function') {
    host.cancelAnimationFrame = nativeCancelFrame
      ? function (requestId) { return nativeCancelFrame.call(gameGlobal, requestId); }
      : function (requestId) { return host.clearTimeout(requestId); };
  }

  // Keep the game global aligned when globalThis and GameGlobal are distinct.
  if (gameGlobal !== host) {
    if (typeof gameGlobal.requestAnimationFrame !== 'function') {
      gameGlobal.requestAnimationFrame = host.requestAnimationFrame;
    }
    if (typeof gameGlobal.cancelAnimationFrame !== 'function') {
      gameGlobal.cancelAnimationFrame = host.cancelAnimationFrame;
    }
  }
})();`

const injectWechatNavigatorAtEntry: Plugin = {
  name: 'marble-quest:wechat-navigator-entry-bootstrap',
  enforce: 'post' as const,
  renderChunk(code, chunk) {
    if (chunk.isEntry && chunk.fileName === 'game.js') {
      return `${wechatNavigatorBootstrap}\n${code}`
    }
    return null
  },
  // Sapling writes split CommonJS chunks during its output phase. Patch the
  // resulting Pixi chunk on disk before the ES5 transpile/package scripts run.
  writeBundle() {
    const chunksDir = join(process.cwd(), 'dist-wechat', 'chunks')
    let targets: string[] = []
    try {
      targets = readdirSync(chunksDir).filter(
        (name) => name.startsWith('sapling-engine-DbC_') && name.endsWith('.js'),
      )
    } catch (error) {
      this.error('Unable to inspect emitted WeChat chunks: ' + String(error))
    }
    if (targets.length !== 1) {
      this.error('Expected exactly one emitted sapling-engine-DbC chunk; found ' + targets.length)
    }

    const filePath = join(chunksDir, targets[0])
    const navigatorGetter = /([A-Za-z_$][\\w$]*\\.N\\.get\\(\\)\\.getNavigator\\(\\))/g
    let pixiCode = readFileSync(filePath, 'utf8')
    const getterMatches = pixiCode.match(navigatorGetter) || []
    if (getterMatches.length < 2) {
      const context = pixiCode.match(/.{0,80}getNavigator.{0,120}/g) || []
      this.error(
        'Unexpected Pixi navigator feature-detection code in ' +
        targets[0] + ': ' + context.join(' | '),
      )
    }

    pixiCode = pixiCode.replace(
      navigatorGetter,
      '($1 || { userAgent: "" })',
    )
    const fallbackCount = (pixiCode.match(/\\|\\| \\{ userAgent: "" \\}/g) || []).length
    if (fallbackCount < getterMatches.length) {
      this.error('Unable to guard every Pixi navigator getter in ' + targets[0])
    }
    writeFileSync(filePath, pixiCode, 'utf8')
    console.log(
      '[wechat-user-agent] guarded ' + getterMatches.length +
      ' Pixi navigator reads in ' + targets[0],
    )

    // Both Pixi's Ticker and Sapling's WeChat adapter call the free identifier
    // requestAnimationFrame from inside their own CommonJS chunk. Setting a
    // property on globalThis/GameGlobal is not reliable in every WeChat runtime.
    // Give each affected module its own lexical scheduler so those bare calls
    // always resolve to a callable function.
    const moduleFrameShim = `/* MARBLEQUEST_MODULE_RAF */
var __mqFrameApi = null;
if (typeof GameGlobal !== 'undefined' &&
    typeof GameGlobal.requestAnimationFrame === 'function' &&
    typeof GameGlobal.cancelAnimationFrame === 'function') {
  __mqFrameApi = GameGlobal;
} else if (typeof globalThis !== 'undefined' &&
    typeof globalThis.requestAnimationFrame === 'function' &&
    typeof globalThis.cancelAnimationFrame === 'function') {
  __mqFrameApi = globalThis;
}
var requestAnimationFrame = __mqFrameApi
  ? function (callback) {
      return __mqFrameApi.requestAnimationFrame.call(__mqFrameApi, callback);
    }
  : function (callback) {
      return setTimeout(function () {
        var timestamp = typeof performance !== 'undefined' &&
          performance && typeof performance.now === 'function'
          ? performance.now()
          : Date.now();
        callback(timestamp);
      }, 16);
    };
var cancelAnimationFrame = __mqFrameApi
  ? function (requestId) {
      return __mqFrameApi.cancelAnimationFrame.call(__mqFrameApi, requestId);
    }
  : function (requestId) {
      clearTimeout(requestId);
    };
`

    const chunkFiles = readdirSync(chunksDir).filter((name) => name.endsWith('.js'))
    const frameChunks: string[] = []
    for (const name of chunkFiles) {
      const chunkPath = join(chunksDir, name)
      let chunkCode = readFileSync(chunkPath, 'utf8')
      if (!/\\brequestAnimationFrame\\b|\\bcancelAnimationFrame\\b/.test(chunkCode)) {
        continue
      }
      if (!chunkCode.includes('MARBLEQUEST_MODULE_RAF')) {
        if (/\\b(?:var|let|const|function)\\s+requestAnimationFrame\\b/.test(chunkCode)) {
          this.error('Unexpected local requestAnimationFrame declaration in ' + name)
        }
        chunkCode = moduleFrameShim + chunkCode
        writeFileSync(chunkPath, chunkCode, 'utf8')
      }
      frameChunks.push(name)
    }
    if (frameChunks.length !== 2) {
      this.error(
        'Expected Pixi and Sapling frame-scheduler chunks; found ' +
        frameChunks.length + ': ' + frameChunks.join(', '),
      )
    }
    console.log(
      '[wechat-frame] injected module-scoped RAF/CAF into ' + frameChunks.join(', '),
    )
  },
}

export default defineConfig({
  plugins: [
    sapling(),
    saplingWechat({
      entry: 'src/main.wechat.ts',
      outDir: 'dist-wechat',
      projectName: 'MarbleQuest-Pixi',
      orientation: 'landscape',
      iOSHighPerformance: true,
      release: true,
    }),
    splitWechatRuntime,
    injectWechatNavigatorAtEntry,
  ],
})
