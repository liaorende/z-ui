import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import { withInstall } from '@z-ui/utils'

const ZRadio = withInstall(Radio)
const ZRadioGroup = withInstall(RadioGroup)

export { ZRadio as Radio, ZRadioGroup as RadioGroup }
