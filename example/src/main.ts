import { createApp } from 'vue'
import App from './App.vue'
import ZUi from '@z-ui/components'
import '@z-ui/theme'

// import ZUi from "vue3-yytest";
// import 'vue3-yytest/es/style.css'
// import ElementPlus from "element-plus"
// import 'element-plus/dist/index.css'
// import test from "./test";
// console.log('ZUi--',ZUi)
// console.log('ElementPlus--',ElementPlus)
const app = createApp(App)


app.use(ZUi).mount('#app')
// app.mount('#app')
