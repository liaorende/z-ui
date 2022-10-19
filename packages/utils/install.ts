import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App): void => {
    app.component((comp as any).name, comp as any)
  }
  return comp as SFCWithInstall<T>
}
