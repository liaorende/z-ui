import type { ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  modelValue: {
    type: Array<number|string>,
    default: () => [],
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean
  },
}

export const checkboxProps = {
  modelValue: {
    type: [Array<number|string>, Boolean]
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  indeterminate: {
    type: Boolean
  },
}

export const checkboxEmits = {
  ['update:modelValue']: (value: Boolean) => typeof value === 'boolean',
  change: (value: boolean | Array<number|string>) => 
    typeof value === 'boolean' || Array.isArray(value),
}
export const checkboxGroupEmits = {
  ['update:modelValue']: (value: Array<number|string>) => Array.isArray(value),
  change: (value: boolean | Array<number|string>) => 
    typeof value === 'boolean' || Array.isArray(value),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>