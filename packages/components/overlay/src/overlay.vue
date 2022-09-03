<template>
  <div :class="[ns.b()]" :style="{ zIndex }">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { overlayProps } from './overlay'

defineOptions({
  name: 'z-overlay'
})
const ns = useNamespace('overlay')
defineProps(overlayProps)
</script>
