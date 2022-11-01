import { series, parallel } from 'gulp'
import { runTask, buildComponents, generateTypes } from './src'

export default parallel(buildComponents, generateTypes)

// export * from './src'
