import { createApp } from 'vue'
import App from './App.vue'
import ZUi from "@z-ui/components";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ZUi).mount('#app')
