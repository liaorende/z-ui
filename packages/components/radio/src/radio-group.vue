<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { computed, provide } from 'vue'

import { radioGroupProps, radioGroupEmits } from './radio'
defineOptions({
  name: 'z-radio-group',
  inheritAttrs: false,
})
const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)
const ns = useNamespace('radio-group')

const modelValue = computed(() => {
  return props.modelValue
})
const changeEvent = (val: String) => {
  emit('update:modelValue', val)
}
provide('RadioGroup', {
  disabled: props.disabled,
  modelValue,
  changeEvent,
})
</script>
