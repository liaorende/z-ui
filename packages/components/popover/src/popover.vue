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
    <div v-show="visible" :class="[ns.b()]" :style="popoverStyle">
      <slot />
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { computed, onBeforeUpdate, provide, reactive, ref } from 'vue'
import { popoverProps } from './popover'
import { EmptyChild } from './empty-child'
defineOptions({
  name: 'z-popover',
})
const ns = useNamespace('popover')
const props = defineProps(popoverProps)
const triggerElement = ref()
const clientRect = reactive({ left: 0, top: 0 })
const popoverStyle = computed(() => {
  return {
    left: clientRect.left + 'px',
    top: clientRect.top + 'px',
  }
})
const getTriggerPositon = () => {
  const { x, y, width, height } = triggerElement.value.getBoundingClientRect()
  clientRect.left = x + width + window.scrollX
  clientRect.top = y + height + window.scrollY
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

onBeforeUpdate(() => {
  getTriggerPositon()
})

provide('Popover', {
  triggerElement,
})
</script>
