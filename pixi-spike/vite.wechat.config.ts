import { defineConfig } from 'vite'
import { sapling, saplingWechat } from 'sapling2d/vite'

export default defineConfig({
  plugins: [sapling(), saplingWechat({
    entry: 'src/main.wechat.ts',
    outDir: 'dist-wechat',
    projectName: 'MarbleQuest-Pixi',
    orientation: 'landscape',
    iOSHighPerformance: true,
    release: true,
  })],
})
