<template>
  <div 
    :class="[
      ns.b(),
      $attrs.class,
      ns.is('focused',focused)
    ]"
    :style="containerStyle"
  >
    <div :class="ns.e('wrapper')">
      <div v-if="$slots.prefix || props.prefixIcon" :class="ns.e('prefix')">
        <z-icon v-if="props.prefixIcon">
          <component :is="props.prefixIcon" />
        </z-icon>
      </div>
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
      <div v-if="suffixVisible" :class="ns.e('suffix')">
        <z-icon v-if="props.suffixIcon">
          <component :is="props.suffixIcon" />
        </z-icon>
        <span v-if="$attrs.maxlength && props.showWordLimit" :class="ns.e('count')">
          {{inputValue.length}} / {{$attrs.maxlength}}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNamespace, filterAttrs } from '@z-ui/utils';
import { computed, ref, StyleValue, useAttrs, useSlots } from 'vue';

import { inputProps, inputEmits } from "./input";
defineOptions({
  name: 'z-input',
  inheritAttrs: false
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const ns = useNamespace('input')
const slots = useSlots()
const containerAttrs = useAttrs()
const inputAttrs = filterAttrs(containerAttrs)
const containerStyle = computed<StyleValue>(() => containerAttrs.style as StyleValue)
const suffixVisible = computed(() =>
  !!slots.suffix || !!props.suffixIcon || !!props.showWordLimit
)

const focused = ref(false)
const inputValue = ref(props.modelValue)

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
  focused.value = false
  emit('blur', event)
}
const handelFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}
</script>