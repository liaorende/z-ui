import type { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  }
}

export const checkboxEmits = {
  ['update:modelValue']: (value: String) => typeof value === 'string',
  input: (value: String) => typeof value === 'string',
  change: (value: String) => typeof value === 'string',
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>