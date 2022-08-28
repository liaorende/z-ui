<template>
  <div 
    :class="[
      ns.b()
    ]"
  >
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { popoverProps } from "./popover";
defineOptions({
  name: 'z-popover'
})
const ns = useNamespace('popover')
const props = defineProps(popoverProps)

</script>