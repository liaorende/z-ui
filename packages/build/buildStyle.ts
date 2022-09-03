import { resolve, dirname } from 'path'
import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import cpy from 'cpy'
import sass from 'sass'
import glob from 'fast-glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const themeDir = resolve(__dirname, '../theme')
const targetDist = resolve(__dirname, '../../dist/theme')

const buildSass = async () => {
  await cpy(`${themeDir}/**/*.scss`, targetDist)
  const sassFils = await glob('**/*.scss', { cwd: themeDir, onlyFiles: true })
  for (const path in sassFils) {
    const filePath = `${themeDir}/${sassFils[path]}`
    const code = await sass.compileAsync(filePath, {
      style: 'compressed'
    })
    const cssPath = sassFils[path].replace('.scss', '.css')
    await fs.writeFile(resolve(targetDist, cssPath), code.css)
  }
}
buildSass()
