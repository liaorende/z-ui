<template>
  <slot name="reference" />
  <Teleport to="body">
    <div
      ref="triggerElement"
      :class="[ns.b()]"
      :style="popoverStyle"
    >
      <slot />
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, onMounted, ref, useSlots } from 'vue';
import { popoverProps } from "./popover";
defineOptions({
  name: 'z-popover'
})
const ns = useNamespace('popover')
const props = defineProps(popoverProps)
const triggerElement = ref<HTMLElement>()
const $slots = useSlots()
const popoverStyle = computed(()=>{
  return ``
})
onMounted(()=>{
  setTimeout(() => {
    console.log('triggerElement--',triggerElement)
  }, 1000);
})
</script>