import type { ExtractPropTypes } from 'vue'

export const radioProps = {
  label: {
    type: String
  },
  disabled: {
    type: Boolean
  }
}

export const radioGroupProps = {
  modelValue: {
    type: String
  },
  label: {
    type: String
  }
}

export const radioEmits = {
  ['update:modelValue']: (value: String) => typeof value === 'string',
}
export const radioGroupEmits = {
  ['update:modelValue']: (value: String) => typeof value === 'string',
}

export type RadioProps = ExtractPropTypes<typeof radioProps>