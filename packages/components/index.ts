import Button from './button'
import Input from './input'
import Icon from './icon'
import type { App } from 'vue'

// 组件列表
const components = [
  Button,Input,Icon
] 
// 使用所有组件
const install = (app: App)=> {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
export {
  Button,
  Input,
  Icon,
  install
}
export default install 