import Button from './button'
import Input from './input'
import Icon from './icon'
import { Checkbox, CheckboxGroup } from './checkbox'
import { ZRadio, ZRadioGroup } from './radio'

import type { App } from 'vue'

// 组件列表
const components = [
  Button,Input,Icon,Checkbox,CheckboxGroup,ZRadio,ZRadioGroup
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
  CheckboxGroup,
  ZRadio,
  install
}
export default install 