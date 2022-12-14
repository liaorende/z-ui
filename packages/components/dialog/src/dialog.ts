import type { ExtractPropTypes } from 'vue'

export const dialogProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  width: {
    type: String,
  },
}

export const dialogEmits = {
  ['update:modelValue']: (value: boolean) => typeof value === 'boolean',
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
