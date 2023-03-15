<template>
  <div :class="[ns.b()]">
    {{ value }}
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { selectOptionProps } from './select'

defineOptions({
  name: 'z-select-option',
})
defineProps(selectOptionProps)
const ns = useNamespace('select-option')
</script>
