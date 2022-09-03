<template>
  <i :class="ns.b()">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
defineOptions({
  name: 'z-icon'
})
const ns = useNamespace('icon')
</script>
