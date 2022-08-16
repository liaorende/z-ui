import Button from './button'
import Input from './input'
import Icon from './icon'
import Checkbox from './checkbox'
import type { App } from 'vue'

// 组件列表
const components = [
  Button,Input,Icon,Checkbox
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
  Checkbox,
  install
}
export default install 