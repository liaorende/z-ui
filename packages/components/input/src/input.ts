import type { ExtractPropTypes } from 'vue'
import { iconPropType } from '@z-ui/utils'

export const inputProps = {
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入内容',
  },
  prefixIcon: {
    type: iconPropType,
  },
  suffixIcon: {
    type: iconPropType,
  },
  inputStyle: {
    type: Object,
  },
  showWordLimit: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
}

export const inputEmits = {
  ['update:modelValue']: (value: string) => typeof value === 'string',
  input: (value: string) => typeof value === 'string',
  change: (value: string) => typeof value === 'string',
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
