import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import defineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    // cssCodeSplit: true,
    lib: {
      entry: 'packages/components/index.ts',
      name: 'z-ui'
    },
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue', '@element-plus/icons-vue'],
      input: ['packages/components/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: 'dist/es',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: 'packages/',
          exports: 'named'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: 'dist/lib',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: 'packages/',
          exports: 'named'
          // globals: {
          //   vue: 'Vue'
          // }
        }
      ]
    }
  },
  plugins: [vue(), defineOptions(), dts({ outputDir: ['dist/es', 'dist/lib'] })]
})
