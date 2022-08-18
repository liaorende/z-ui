<template>
  <label 
    :class="[
      ns.b(),
      $attrs.class,
      ns.is('checked',isChecked),
      ns.is('disabled',props.disabled)
    ]"
  >
    <span :class="[
      ns.e('input'),
      ns.is('checked',isChecked),
      ns.is('disabled',props.disabled)
    ]">
      <input
        type="radio"
        :class="ns.e('original')"
        v-model="modelValue"
        @change="handleChange"
        :value="props.label"
        :disabled="props.disabled"
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
import { radioProps, radioEmits } from "./radio";
defineOptions({
  name: 'z-radio',
  inheritAttrs: false
})
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const ns = useNamespace('radio')
const radioGroup = inject<any>('RadioGroup',{})

const modelValue = computed({
  get(){
    return radioGroup.modelValue.value
  },
  set(val){

  }
})
const isChecked = computed(()=>{
  return modelValue.value === props.label
})
const handleChange = (event: Event) => {
  let { value } = event.target as HTMLInputElement
  radioGroup.changeEvent(value)
}
</script>