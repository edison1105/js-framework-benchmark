import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base:'/frameworks/non-keyed/vue-vapor-vfor/dist/',
  plugins: [vue()],
  build:{
    // minify:false
  }
})
