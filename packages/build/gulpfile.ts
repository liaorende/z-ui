import { series, parallel } from 'gulp'
import { runTask } from './src'

export default parallel(runTask('buildComponents'), runTask('generateTypes'))

export * from './src'
