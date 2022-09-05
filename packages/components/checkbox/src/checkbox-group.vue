<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { computed, provide } from 'vue'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox'
defineOptions({
  name: 'z-checkbox-group',
  inheritAttrs: false,
})
const ns = useNamespace('checkbox-group')
const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const modelValue = computed({
  get() {
    return props.modelValue
  },
  set() {
    // changeEvent(val)
  },
})
const changeEvent = (val: Array<number | string>) => {
  emit('update:modelValue', val)
  emit('change', val)
}
provide('CheckboxGroup', {
  name: 'z-checkbox-group',
  disabled: props.disabled,
  modelValue,
  changeEvent,
})
</script>
