import { resolve } from 'path'
// import { promises as fs } from 'fs'
import { src, dest } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

const themeDir = resolve(__dirname, '../../../', 'theme')
const targetDist = resolve(__dirname, '../../dist/', 'theme')

export const buildSass = async () => {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|base)/
  return src(`${themeDir}/src/*.scss`)
    .pipe(sass.sync())
    .pipe(
      rename((path) => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `z-${path.basename}`
        }
      })
    )
    .pipe(dest(targetDist))
}

export const copyThemeSource = async () => {
  return src(`${themeDir}/**/*.scss`).pipe(dest(targetDist))
}
