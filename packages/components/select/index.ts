import Select from './src/select.vue'
import SelectOption from './src/select-option.vue'
import { withInstall } from '@z-ui/utils'

export const ZSelect = withInstall(Select)
export const ZSelectOption = withInstall(SelectOption)

export * from './src/select'
