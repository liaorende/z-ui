<template>
  <div 
    :class="[
      ns.b()
    ]"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">

import { useNamespace } from '@z-ui/utils';
defineOptions({
  name: 'z-overlay'
})
const ns = useNamespace('overlay')
</script>