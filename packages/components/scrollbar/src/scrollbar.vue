<template>
  <div 
    :class="[
      ns.b()
    ]"
  >
    <div
      :class="[ns.e('wrap')]"
      @scroll="handleScroll"
    >
      <slot />
    </div>
    <bar />
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { ref } from "vue";
import { scrollbarProps } from "./scrollbar";
import Bar from "./bar.vue";

defineOptions({
  name: 'z-scrollbar'
})
const ns = useNamespace('scrollbar')
const props = defineProps(scrollbarProps)
const readonly = ref(true)

const handleScroll = (event: any) => {
  console.log('handleScroll--',event)
}
</script>