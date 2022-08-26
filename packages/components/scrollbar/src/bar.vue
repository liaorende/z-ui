<template>
  <div
    ref="parentRef"
    :class="[
      ns.e('bar')
    ]"
  >
    <!-- <div :class="[ns.e('slider'), ns.is('horizontal',true)]"
      @mousedown="handleScroll"
    ></div> -->
    <div ref="barRef" :class="[ns.e('slider'), ns.is('vertical',true)]"
      :style="barStyle"
      @mousedown="handleScroll"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { emit } from 'process';
import { computed, ref } from 'vue';
import { barProps, barEmits } from "./bar";

const ns = useNamespace('scrollbar')
const props = defineProps(barProps)
const emits = defineEmits(barEmits)
const barRef = ref<HTMLDivElement>()
const parentRef = ref<HTMLDivElement>()
const barStyle = computed(()=>{
  return {
    height: props.height,
    transform: `translateY(${props.scrollY}%)`
  }
})
const initialPosition = ref(0)
const move = ref(0)
const handleScroll = (e: MouseEvent)=> {
  initialPosition.value = e.clientY
  console.log('e--',e)
  console.log('b--',barRef.value?.getBoundingClientRect())
  // console.log('a--',parentRef.value?.getBoundingClientRect())
  // console.log('b--',barRef.value?.getBoundingClientRect())
  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
}
const mouseMoveHandler = (e: MouseEvent) => {
  console.log('mouseMoveHandler--',e)
  // const move = barRef.value?.getBoundingClientRect().y
  // move.value = initialPosition.value - endPosition
  // initialPosition.value = move.value
  // emits('scroll', endPosition)
  // const endPosition = e.clientY
  // move.value = initialPosition.value - endPosition
  // emits('scroll', move.value)
}
const mouseUpHandler = (e: MouseEvent) => {
  const endPosition = e.clientY
  move.value = initialPosition.value - endPosition
  emits('scroll', move.value)
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
  // console.log('mouseup--',endPosition)
  // console.log('移动了---',move.value)
}
defineExpose({
  handleScroll,
})
</script>