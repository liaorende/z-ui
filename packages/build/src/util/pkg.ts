import type { OutputOptions, RollupBuild } from 'rollup'

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'build']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)))
}
