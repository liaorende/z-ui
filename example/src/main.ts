import { createApp } from 'vue'
import App from './App.vue'
import ZUi from '@z-ui/build/dist'
import '@z-ui/theme'

const app = createApp(App)


app.use(ZUi).mount('#app')
// app.mount('#app')
