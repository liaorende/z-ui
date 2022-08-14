import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import defineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'packages/components/index.ts',
      name: 'z-ui'
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
  plugins: [vue(), defineOptions()]
})
