import { series, parallel } from 'gulp'
import {
  clean,
  buildComponents,
  generateTypes,
  copyPkg,
  buildSass,
  copyThemeSource,
} from './src'

export default series(
  clean,
  parallel(buildComponents, generateTypes),
  series(buildSass, copyThemeSource),
  copyPkg
)

// export * from './src'
