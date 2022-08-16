<template>
  <label 
    :class="[
      ns.b(),
      $attrs.class,
      ns.is('focused',focused)
    ]"
  >
    <span :class="ns.e('input')">
      <input
        v-model="modelValue"
        type="checkbox"
        :class="ns.e('original')"
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
import { computed, ref, StyleValue, useAttrs, useSlots } from 'vue';
import '../style/index.scss'
import { checkboxProps, checkboxEmits } from "./checkbox";
defineOptions({
  name: 'z-checkbox',
  inheritAttrs: false
})
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
const modelValue = ref(props.modelValue)
const ns = useNamespace('checkbox')


const focused = ref(false)

</script>