import { series } from 'gulp'
import { runTask } from './src'

export default series(
  runTask('buildComponents')
  // runTask('generateTypesDefinitions')
)

export * from './src'
