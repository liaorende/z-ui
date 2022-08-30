import { 
  Comment,
  Fragment,
  Text,
  defineComponent, h, VNode, withDirectives, inject 
} from "vue"

const getFirstVNode = (node: VNode[]): VNode | null => {
  for (const child of node) {
    if(typeof child === 'object'){
      switch (child.type) {
        case Comment:
        case Text:
          continue
        case Fragment:
          return getFirstVNode(child.children as VNode[])
        default:
          return child
      }
    }
    return child
  }
  return null
}

export const EmptyChild = defineComponent({
  name: 'z-empty-child',
  setup(_, { slots, attrs }) {
    const defaultSlot = slots.default?.(attrs) as VNode[]
    const _vnode = getFirstVNode(defaultSlot) as VNode
    const { triggerElement } = inject<any>('Popover',undefined)
    return () => {
      const vZDirective = {
        mounted(el: HTMLElement) {
          triggerElement.value = el
        },
      }
      withDirectives(_vnode,[
        [vZDirective]
      ])
      return h(_vnode)
    }
  },
})