<template>
  <label
    :class="[
      ns.b(),
      $attrs.class,
      ns.is('checked', isChecked),
      ns.is('disabled', isDisabled),
    ]"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('checked', isChecked),
        ns.is('disabled', isDisabled),
      ]"
    >
      <input
        v-model="modelValue"
        type="radio"
        :class="ns.e('original')"
        :value="props.label"
        :disabled="isDisabled"
        @change="handleChange"
      />
      <span :class="ns.e('inner')"></span>
    </span>
    <span v-if="props.label" :class="ns.e('label')">
      {{ props.label }}
    </span>
  </label>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { computed, inject } from 'vue'
import { radioProps, radioEmits } from './radio'
defineOptions({
  name: 'z-radio',
  inheritAttrs: false,
})
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const ns = useNamespace('radio')
const radioGroup = inject<any>('RadioGroup', {})

const modelValue = computed({
  get() {
    return radioGroup.modelValue.value
  },
  set() {
    //console.log()
  },
})
const isChecked = computed(() => {
  return modelValue.value === props.label
})
const isDisabled = computed(() => {
  return radioGroup.disabled ? radioGroup.disabled : props.disabled
})
const handleChange = (event: Event) => {
  let { value } = event.target as HTMLInputElement
  radioGroup.changeEvent(value)
}
</script>
