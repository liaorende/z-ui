import type { PropType, Component } from 'vue'

import { Close } from '@element-plus/icons-vue'

export const definePropType = <T>(val: any): PropType<T> => val

export const iconPropType = definePropType<Component>(Object)

export const CloseComponents = {
  Close,
}
