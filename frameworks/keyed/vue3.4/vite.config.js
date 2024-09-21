import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base:'/frameworks/keyed/vue3.4/dist/',
  plugins: [vue()],
})
