import { resolve } from 'path'
import { rollup, OutputOptions } from 'rollup'
import glob from 'fast-glob'
import defineOptions from 'unplugin-vue-define-options/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import typescript from 'rollup-plugin-typescript2'
import { excludeFiles, writeBundles, buildConfigEntries } from '../util'

export const buildComponents = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: resolve(__dirname, '../../../../', 'packages'),
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input: resolve(__dirname, './button.vue'),
    plugins: [
      defineOptions(),
      vue(),
      nodeResolve({
        extensions: ['.ts'],
      }),
      // esbuild(),
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
    ],
    external: ['vue', '@element-plus/icons-vue'],
  })
  bundle.write({
    file: resolve(__dirname, '../../output', 'bundle.js'),
  })
  // await writeBundles(
  //   bundle,
  //   buildConfigEntries.map(([module, config]): OutputOptions => {
  //     return {
  //       format: config.format,
  //       dir: config.output.path,
  //       exports: module === 'cjs' ? 'named' : undefined,
  //       preserveModules: true,
  //       preserveModulesRoot: '/yyyy',
  //       sourcemap: true,
  //       entryFileNames: `[name].${config.ext}`,
  //     }
  //   })
  // )
}
