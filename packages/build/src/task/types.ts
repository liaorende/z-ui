import { resolve } from 'path'
import { copy } from 'fs-extra'
import { run } from '../util'

export const generateTypes = async () => {
  await run(`pnpm run types`, resolve(__dirname, '../../../', 'build'))
  await copy(
    resolve(__dirname, '../../dist/', 'types'),
    resolve(__dirname, '../../dist/', 'es'),
    { recursive: true }
  )
  await copy(
    resolve(__dirname, '../../dist/', 'types'),
    resolve(__dirname, '../../dist/', 'lib'),
    { recursive: true }
  )
}
