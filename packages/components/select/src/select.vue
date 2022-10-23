<template>
  <div :class="[ns.b()]">
    <z-input :readonly="readonly" />
  </div>
</template>
<script setup lang="ts">
import { ZInput } from '@z-ui/components/input'
import { useNamespace } from '@z-ui/utils'
import { selectProps } from './select'

defineOptions({
  name: 'z-select',
})
defineProps(selectProps)
const ns = useNamespace('select')
</script>
