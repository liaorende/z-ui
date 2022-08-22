<template>
  <label 
    :class="[
      ns.b(),
      $attrs.class,
      ns.is('checked',isChecked),
      ns.is('disabled',isDisabled),
    ]"
    @click="onClickRoot"
  >
    <span :class="[
      ns.e('input'),
      ns.is('checked',isChecked),
      ns.is('disabled',isDisabled),
      ns.is('indeterminate',props.indeterminate)
    ]">
      <input
        v-model="modelValue"
        type="checkbox"
        :class="ns.e('original')"
        @change="handleChange"
        :value="label"
        :disabled="isDisabled"
      />
      <span :class="ns.e('inner')"></span>
    </span>
    <span v-if="label || $slots.default" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default"> {{label}} </template>
    </span>
  </label>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, inject, useSlots } from 'vue';

import { checkboxProps, checkboxEmits } from "./checkbox";
defineOptions({
  name: 'z-checkbox',
  inheritAttrs: false
})
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
const ns = useNamespace('checkbox')
const checkboxGroup = inject<any>('CheckboxGroup',{})
const isGroup = computed(
  () => checkboxGroup && checkboxGroup.name === 'z-checkbox-group'
)
const modelValue = computed({
  get(){
    return isGroup.value ? checkboxGroup.modelValue.value : props.modelValue
  },
  set(val: any){
    if(isGroup.value){
      console.log('isGroup')
      checkboxGroup.changeEvent(val)
    }else{
      emit('update:modelValue', val)
      emit('change', val)
    }
  }
})
const slots = useSlots()
// const label = computed(()=>{
//   return props.label ? props.label : slots
// })
const isChecked = computed(()=>{
  const _value = modelValue.value
  if(typeof _value === 'boolean'){
    return !!_value
  }else{
    return _value.includes(props.label)
  }
})
const isDisabled = computed(()=>{
  return checkboxGroup.disabled ? checkboxGroup.disabled : props.disabled
})
const onClickRoot = () => {
  // emit('update:modelValue', !props.modelValue)
}
const handleChange = () => {
  // emit('change', modelValue.value)
  // checkboxGroup.changeEvent(modelValue.value)
}
</script>