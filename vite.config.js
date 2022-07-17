import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios'],
  },
  build: {
    target: 'modules',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router'),
      '@store': path.resolve(__dirname, './src/store'),
      '@common': path.resolve(__dirname, './src/common'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
})
