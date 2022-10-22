import type { ExtractPropTypes } from 'vue'

export const radioProps = {
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
}

export const radioGroupProps = {
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
}

export const radioEmits = {
  ['update:modelValue']: (value: string) => typeof value === 'string',
}
export const radioGroupEmits = {
  ['update:modelValue']: (value: string) => typeof value === 'string',
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
