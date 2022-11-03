import { series, parallel } from 'gulp'
import { buildComponents, generateTypes, copyPkg } from './src'

export default series(parallel(buildComponents, generateTypes), copyPkg)

// export * from './src'
