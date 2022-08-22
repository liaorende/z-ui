import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import { fileURLToPath } from 'url';
import cpy from 'cpy'
import sass from 'sass';
import glob from "fast-glob"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const themeDir = resolve(__dirname, '../theme')
const targetLib = resolve(__dirname, '../../dist/lib/theme')
const targetEs = resolve(__dirname, '../../dist/es/theme')

const buildSass = async () => {
  //直接将sass文件复制到打包后目录
  // await cpy(`${themeDir}/**/*.scss`, targetLib)
  // await cpy(`${themeDir}/**/*.scss`, targetEs)
  //获取打包后.scss文件目录(lib和es一样)
  const sassFils = await glob("**/*.scss", { cwd: themeDir, onlyFiles: true })
  // console.log('sassFils--',sassFils)
  // return
  //遍历含有sass的目录
  for (let path in sassFils) {
    const filePath = `${themeDir}/${sassFils[path]}`
    console.log('filePath--',filePath)
    // return
    //获取sass文件字符串
    const sassCode = await fs.readFile(filePath, 'utf-8')
    //sass解析成css
    const code = sass.compileString(sassCode)
    //拿到.css后缀path
    const cssPath = sassFils[path].replace('.scss', '.css')
    //将css写入对应目录
    await fs.writeFile(resolve(targetLib, cssPath), code.css)
    await fs.writeFile(resolve(targetEs, cssPath), code.css)
  }
}
buildSass()
