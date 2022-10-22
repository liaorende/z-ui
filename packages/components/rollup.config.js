import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import defineOptions from 'unplugin-vue-define-options/rollup'

// export default defineConfig({
//   input: 'src/button/src/button.vue',
//   output: {
//     dir: './dist',
//     // format: 'esm',
//   },
//   // plugins: [typescript(), vue()],
// })

export default defineConfig({
  input: 'src/test/test.vue',
  output: {
    dir: './dist',
    format: 'esm',
    preserveModules: true,
  },
  external: ['vue', '@element-plus/icons-vue'],
  plugins: [  resolve(), typescript(), defineOptions(), vue()],
})
