import type { ExtractPropTypes } from 'vue'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  prefixIcon: {
    type: String,
  },
  suffixIcon: {
    type: String,
  },
  inputStyle: {
    type: Object
  }
}

export const inputEmits = {
  ['update:modelValue']: (value: String) => typeof value === 'string',
  input: (value: String) => typeof value === 'string',
  change: (value: String) => typeof value === 'string',
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type InputProps = ExtractPropTypes<typeof inputProps>