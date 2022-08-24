<template>
  <div 
    :class="[
      ns.b()
    ]"
  >
    <z-input 
    
    />
  </div>
</template>
<script setup lang="ts">
import { ZInput } from "@z-ui/components";
import { useNamespace } from '@z-ui/utils';
import { selectProps } from "./select";

defineOptions({
  name: 'z-select'
})
const ns = useNamespace('select')
const props = defineProps(selectProps)

</script>