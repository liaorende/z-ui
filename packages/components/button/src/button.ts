import type { ExtractPropTypes } from 'vue'

export const ButtonType = ['primary', 'warning', 'danger']
export const ButtonSize = ['large', 'default', 'small']

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    },
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    },
  },
  disabled: Boolean,
  plain: Boolean,
  loading: Boolean,
  shadow: Boolean,
  icon: String,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
