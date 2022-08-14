<template>
  <div 
    :class="[
      ns.b(),
      $attrs.class
    ]"
    :style="containerStyle"
  >
    <div :class="ns.e('wrapper')">
      <z-icon v-if="props.prefixIcon">
        <component :is="props.prefixIcon" />
      </z-icon>
      <input
        v-model="inputValue"
        type="text"
        v-bind="inputAttrs"
        :class="ns.e('inner')"
        :placeholder="props.placeholder"
        :style="inputStyle"
        @input="handleInput"
        @change="handleChange"
        @blur="handelBlur"
        @focus="handelFocus"
      />
      <z-icon v-if="props.suffixIcon">
        <component :is="props.suffixIcon" />
      </z-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, ref,StyleValue,useAttrs } from 'vue';
import '../style/index.scss'
import { inputProps, inputEmits } from "./input";
defineOptions({
  name: 'z-input',
  inheritAttrs: false
})
const ns = useNamespace('input')
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const inputValue = ref(props.modelValue)
const containerAttrs = useAttrs()
const containerStyle = computed<StyleValue>(() => containerAttrs.style as StyleValue)

const excludeArr = Object.entries(containerAttrs).filter((attr: [string,any]) => {
  return attr[0] !== 'style' && attr[0] !== 'class'
})
const inputAttrs = {}
for (const key of excludeArr) {
  inputAttrs[key[0]] = key[1]
}

const handleInput = (event: Event) => {
  let { value } = event.target as HTMLInputElement
  inputValue.value = value
  emit('input',value)
  emit('update:modelValue',value)
}
const handleChange = (event: Event) => {
  let { value } = event.target as HTMLInputElement
  emit('change', value)
}
const handelBlur = (event: FocusEvent) => {
  emit('blur', event)
}
const handelFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>