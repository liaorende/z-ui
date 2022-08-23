import { createApp } from 'vue'
import App from './App.vue'
import ZUi from "@z-ui/components";
import '@z-ui/theme'

// import ZUi from "vue3-yytest";
// import test from "./test";
// import 'vue3-yytest/es/style.css'
// console.log('ZUi--',ZUi)
// console.log('ElementPlus--',ElementPlus)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ZUi).mount('#app')
