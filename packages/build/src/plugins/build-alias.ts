import type { Plugin } from 'rollup'

const PKG_PREFIX = '@z-ui'
const PKG_NAME = 'z-ui'

export function alias(): Plugin {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/` as const
  const bundleThemeChalk = `${PKG_NAME}/` as const

  return {
    name: 'z-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
