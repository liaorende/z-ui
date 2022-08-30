<template>
  <empty-child :class="ns.e('trigger')" @click="test">
    <slot name="reference" />
  </empty-child>
  <Teleport to="body">
    <div
      v-show="visible"
      :class="[ns.b()]"
      :style="popoverStyle"
    >
      <slot />
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, onBeforeUpdate, onMounted, onUpdated, provide, reactive, ref, useSlots, watch } from 'vue';
import { popoverProps } from "./popover";
import { EmptyChild } from "./empty-child";
defineOptions({
  name: 'z-popover'
})
const ns = useNamespace('popover')
const props = defineProps(popoverProps)
const triggerElement = ref()
const clientRect = reactive({left: 0, top: 0})
const popoverStyle = computed(()=>{
  return {
    left: clientRect.left+'px',
    top: clientRect.top+'px'
  }
})
const visible = ref(false)
const test = (e: Event) => {
  visible.value = !visible.value
}
onBeforeUpdate(()=>{
  const { x,y,width,height } = triggerElement.value.getBoundingClientRect()
  clientRect.left = x + width 
  clientRect.top = y + height
})

provide('Popover',{
  triggerElement
})
</script>