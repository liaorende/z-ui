<template>
  <div 
    :class="[
      ns.e('bar')
    ]"
  >
    <!-- <div :class="[ns.e('slider'), ns.is('horizontal',true)]"
      @mousedown="handleScroll"
    ></div> -->
    <div :class="[ns.e('slider'), ns.is('vertical',true)]"
      @mousedown="handleScroll"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { barProps } from "./bar";

const ns = useNamespace('scrollbar')
// const props = defineProps(barProps)

const handleScroll = ()=> {

}
defineExpose({
  handleScroll,
})
</script>