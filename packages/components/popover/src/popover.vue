<template>
  <empty-child
    :class="ns.e('trigger')"
    @click="onClick"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <slot name="reference" />
  </empty-child>
  <Teleport to="body">
    <div
      v-show="visible"
      ref="popoverContent"
      :class="[ns.b()]"
      :style="popoverStyle"
    >
      <slot />
      <span :class="[ns.e('arrow')]" :placement="placement"></span>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { computed, nextTick, provide, reactive, ref, watch } from 'vue'
import { popoverProps } from './popover'
import { EmptyChild } from './empty-child'
defineOptions({
  name: 'z-popover',
})
const ns = useNamespace('popover')
const props = defineProps(popoverProps)
const triggerElement = ref()
const popoverContent = ref()
const clientRect = reactive({ left: 0, top: 0 })
const popoverStyle = computed(() => {
  return {
    left: clientRect.left + 'px',
    top: clientRect.top + 'px',
  }
})
const getTriggerPositon = () => {
  const { x, y, width, height } = triggerElement.value.getBoundingClientRect()
  const { width: contentWidth, height: contentHeight } =
    popoverContent.value.getBoundingClientRect()
  const offsetArrowSize = 10
  const offsetX = props.placement.indexOf('left')
    ? props.placement.indexOf('right')
      ? 0
      : width + offsetArrowSize
    : -(contentWidth + offsetArrowSize)
  // const
  const offsetY = props.placement.indexOf('top')
    ? props.placement.indexOf('bottom')
      ? 0
      : height + offsetArrowSize
    : -(contentHeight + offsetArrowSize)

  // switch (props.placement) {
  //   case 'top':
  //     offsetX = width
  //     offsetY =
  //     break
  //   default:
  //     break
  // }
  console.log('offsetX--', offsetX)
  console.log('offsetY--', offsetY)
  clientRect.left = x + window.scrollX + offsetX
  clientRect.top = y + window.scrollY + offsetY
}
const visible = ref(false)
const onToggle = (value?: boolean) => {
  visible.value = value ? value : !visible.value
}

const onClick = () => {
  if (props.trigger === 'click') {
    onToggle()
  }
}
const onMouseenter = () => {
  if (props.trigger === 'hover') {
    onToggle(true)
  }
}
const onMouseleave = () => {
  if (props.trigger === 'hover') {
    onToggle(false)
  }
}
watch(visible, (val) => {
  if (val) {
    nextTick(() => {
      getTriggerPositon()
    })
  }
})
// onUpdated(() => {
//   getTriggerPositon()
// })

provide('Popover', {
  triggerElement,
})
</script>
