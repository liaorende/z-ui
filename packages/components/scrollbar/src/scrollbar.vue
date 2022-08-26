<template>
  <div 
    :class="[
      ns.b()
    ]"
  >
    <div
      ref="wrapRef"
      :class="[ns.e('wrap')]"
      :style="{ maxHeight }"
      @scroll="handleScroll"
    >
      <div ref="viewRef" :class="[ns.e('view')]">
        <slot />
      </div>
    </div>
    <bar 
      :height="barHeight+'px'"
      :scrollY="barScrollY"
      @scroll="moveBarHandler"
    />
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils';
import { computed, nextTick, onMounted, onUpdated, ref, watch } from "vue";
import { scrollbarProps } from "./scrollbar";
import Bar from "./bar.vue";

defineOptions({
  name: 'z-scrollbar'
})
const ns = useNamespace('scrollbar')
const props = defineProps(scrollbarProps)
const viewRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()
// console.log('viewRef--',viewRef)

const handleScroll = (event: any) => {
  const _move = event.target.scrollTop / event.target.offsetHeight * 100
  barScrollY.value = _move
}
const barHeight = ref(0)
const barScrollY = ref(0)

const update = () => {
  barHeight.value = wrapRef.value!.offsetHeight ** 2 / viewRef.value!.offsetHeight
}
const moveBarHandler = (val: number) => {
  wrapRef.value!.scrollTop -= val
}

onMounted(() => {
  update()
})
onUpdated(() => update())
</script>