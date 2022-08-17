<template>
  <label 
    :class="[
      ns.b(),
      $attrs.class,
    ]"
    @click="onClickRoot"
  >
    <span :class="[
      ns.e('input'),
      ns.is('checked',isChecked)
    ]">
      <input
        v-model="modelValue"
        type="checkbox"
        :class="ns.e('original')"
        @change="handleChange"
        :value="props.label"
      />
      <span :class="ns.e('inner')"></span>
    </span>
    <span v-if="props.label" :class="ns.e('label')">
      {{props.label}}
    </span>
  </label>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, inject } from 'vue';
import '../style/index.scss'
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
      checkboxGroup.changeEvent(val)
    }else{
      emit('update:modelValue', val)
    }
  }
})
const isChecked = computed(()=>{
  const _value = modelValue.value
  if(typeof _value === 'boolean'){
    return !!_value
  }else{
    return _value.includes(props.label)
  }
})
const onClickRoot = () => {
  // emit('update:modelValue', !props.modelValue)
}
const handleChange = (event: Event) => {
  // console.log('handleChange--',event)
}
</script>