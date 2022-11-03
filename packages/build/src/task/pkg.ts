import { resolve } from 'path'
import { copy, copyFile } from 'fs-extra'

export const copyPkg = async () => {
  await copyFile(
    resolve(__dirname, '../../../z-ui', 'package.json'),
    resolve(__dirname, '../../dist', 'package.json')
  )
}
