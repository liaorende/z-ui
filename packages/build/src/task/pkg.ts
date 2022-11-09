import { resolve } from 'path'
import { copyFile, remove } from 'fs-extra'

export const copyPkg = async () => {
  await copyFile(
    resolve(__dirname, '../../../z-ui', 'package.json'),
    resolve(__dirname, '../../dist', 'package.json')
  )
}

export const clean = async () => {
  await remove(resolve(__dirname, '../../dist'))
}
