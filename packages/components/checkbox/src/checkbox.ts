import type { ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  modelValue: {
    type: Array<number|string>,
    default: () => [],
  },
  label: {
    type: String
  }
}

export const checkboxProps = {
  modelValue: {
    type: [Array<number|string>, Boolean]
  },
  label: {
    type: String
  }
}

export const checkboxEmits = {
  ['update:modelValue']: (value: Boolean) => typeof value === 'boolean',
}
export const checkboxGroupEmits = {
  ['update:modelValue']: (value: Array<number|string>) => Array.isArray(value),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>