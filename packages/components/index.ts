import Button from './button'
import Input from './input'
import Icon from './icon'
import { Checkbox, CheckboxGroup } from './checkbox'
import { ZRadio, ZRadioGroup } from './radio'
import Dialog from './dialog'
import Overlay from './overlay'

import type { App } from 'vue'

// 组件列表
const components = [
  Button,Input,Icon,Checkbox,CheckboxGroup,ZRadio,ZRadioGroup,Dialog,Overlay
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
  Dialog,
  Overlay,
  install
}
export default install 