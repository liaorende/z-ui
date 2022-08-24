import Button from './button'
import Input from './input'
import Icon from './icon'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Radio, RadioGroup } from './radio'
import Dialog from './dialog'
import Overlay from './overlay'
import Select from './select'

import type { App } from 'vue'

// 组件列表
const components = [
  Button,Input,Icon,Checkbox,CheckboxGroup,Radio,RadioGroup,
  Dialog,Overlay,Select
] 
// 使用所有组件
const install = (app: App)=> {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
export {
  Button as ZButton,
  Input as ZInput,
  Icon as ZIcon,
  Checkbox as ZCheckbox,
  CheckboxGroup as ZCheckboxGroup,
  Radio as ZRadio,
  RadioGroup as ZRadioGroup,
  Dialog as ZDialog,
  Overlay as ZOverlay,
  Select as ZSelect,
  install
}
export default install 