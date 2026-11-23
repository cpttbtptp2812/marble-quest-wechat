import { defineConfig } from 'vite'
import { sapling } from 'sapling2d/vite'

export default defineConfig({
  plugins: [sapling()],
  server: { host: '0.0.0.0' },
})
