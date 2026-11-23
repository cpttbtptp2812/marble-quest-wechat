import { defineConfig, type Plugin } from 'vite'
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
})();`

const injectWechatNavigatorAtEntry: Plugin = {
  name: 'marble-quest:wechat-navigator-entry-bootstrap',
  enforce: 'post' as const,
  renderChunk(code, chunk) {
    if (!chunk.isEntry || chunk.fileName !== 'game.js') return null
    return `${wechatNavigatorBootstrap}\n${code}`
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
