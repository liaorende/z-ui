import { resolve } from 'path'
import { rollup, OutputOptions } from 'rollup'
import glob from 'fast-glob'
import defineOptions from 'unplugin-vue-define-options/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import { excludeFiles, writeBundles, buildConfigEntries } from '../util'
import { alias } from '../plugins/build-alias'
// import alias from '@rollup/plugin-alias'

export const buildComponents = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: resolve(__dirname, '../../../../', 'packages'),
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      alias(),
      defineOptions(),
      vue(),
      nodeResolve({
        extensions: ['.mjs', '.ts'],
      }),
      esbuild(),
    ],
    external: ['vue', '@element-plus/icons-vue'],
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: '/yyyy',
        sourcemap: false,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
