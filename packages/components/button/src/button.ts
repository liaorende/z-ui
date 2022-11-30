import type { ExtractPropTypes } from 'vue'
import { iconPropType } from '@z-ui/utils'

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
  icon: {
    type: iconPropType,
  },
  disabled: Boolean,
  plain: Boolean,
  loading: Boolean,
  shadow: Boolean,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
