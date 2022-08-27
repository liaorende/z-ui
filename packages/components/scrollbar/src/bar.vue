<template>
  <Transition name="bar-fade">
    <div
      v-show="always || scrollbar.isShow"
      ref="parentRef"
      :class="[
        ns.e('bar'),
        ns.is('vertical',vertical),
        ns.is('horizontal',horizontal)
      ]"
      @mousedown="clickBarHandler"
    >
      <div v-if="horizontal" ref="barRef" :class="[ns.e('slider')]"
        :style="barHorizontalStyle"
        @mousedown="clickSliderHandler"
      ></div>
      <div v-if="vertical" ref="barRef" :class="[ns.e('slider')]"
        :style="barVerticalStyle"
        @mousedown="clickSliderHandler"
      ></div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, inject, ref } from 'vue';
import { barProps, scrollbarInject, BAR_MAP } from "./bar";

const scrollbar = inject<scrollbarInject>('Scrollbar')
if (!scrollbar) throw new Error("scrollbar 不存在");

const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])
const ns = useNamespace('scrollbar')
const props = defineProps(barProps)
const barRef = ref<HTMLDivElement>()
const parentRef = ref<HTMLDivElement>()
const initialScroll = ref(0)
const initialPosition = ref(0)

const clickSliderHandler = (e: MouseEvent)=> {
  e.stopPropagation()
  window.getSelection()?.removeAllRanges()
  initialPosition.value = e[bar.value.client]
  initialScroll.value = 
    scrollbar.wrapElement[bar.value.scroll] *
    (scrollbar.wrapElement[bar.value.offset] - barRef.value![bar.value.offset]) / 
    (scrollbar.wrapElement[bar.value.scrollSize] - scrollbar.wrapElement[bar.value.offset])
  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
}
const clickBarHandler = (e: MouseEvent)=> {
  const barHalf = barRef.value![bar.value.offset] / 2
  const offset = e[bar.value.client] - (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction]- barHalf
  const offsetRatio = offset / (scrollbar.wrapElement[bar.value.offset] - barRef.value![bar.value.offset])
  scrollbar.wrapElement[bar.value.scroll] = 
    offsetRatio * (scrollbar.wrapElement[bar.value.scrollSize] - scrollbar.wrapElement[bar.value.offset])
}
const mouseMoveHandler = (e: MouseEvent) => {
  const offset = initialScroll.value + (e[bar.value.client] - initialPosition.value)
  const offsetRatio = offset / (scrollbar.wrapElement[bar.value.offset] - barRef.value![bar.value.offset])
  scrollbar.wrapElement[bar.value.scroll] = 
    offsetRatio * (scrollbar.wrapElement[bar.value.scrollSize] - scrollbar.wrapElement[bar.value.offset])
}
const mouseUpHandler = () => {
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
}

const barHorizontalStyle = computed(()=>{
  return {
    width: props.width,
    transform: `translateX(${props.scrollX}%)`
  }
})
const barVerticalStyle = computed(()=>{
  return {
    height: props.height,
    transform: `translateY(${props.scrollY}%)`
  }
})
</script>