import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import defineOptions from 'unplugin-vue-define-options/vite'
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), defineOptions()],
})
