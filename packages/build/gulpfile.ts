import { series, parallel } from 'gulp'
import { clean, buildComponents, generateTypes, copyPkg } from './src'

export default series(clean, parallel(buildComponents, generateTypes), copyPkg)

// export * from './src'
