import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base:'/frameworks/keyed/vueCompat/dist/',
  resolve: {
    alias: {
      vue: '@vue/compat',
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2,
        },
      },
    },
  })],
})
