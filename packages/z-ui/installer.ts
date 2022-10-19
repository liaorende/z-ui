import type { App } from 'vue'
import components from './components'

export const install = (app: App) => {
  components.forEach((c) => app.use(c))
}
