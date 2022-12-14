<template>
  <div
    :class="[ns.b()]"
    @mousemove="isShow = true"
    @mouseleave="isShow = false"
  >
    <div
      ref="wrapRef"
      :class="[ns.e('wrap')]"
      :style="{ maxHeight: height }"
      @scroll="handleScroll"
    >
      <div ref="viewRef" :class="[ns.e('view')]">
        <slot />
      </div>
    </div>
    <bar
      ref="barRef"
      always
      horizontal
      :width="barWidth + 'px'"
      :scroll-x="barScrollX"
    />
    <bar
      ref="barRef"
      always
      vertical
      :height="barHeight + 'px'"
      :scroll-y="barScrollY"
    />
  </div>
</template>
<script setup lang="ts">
import { useNamespace } from '@z-ui/utils'
import { onMounted, onUpdated, provide, reactive, ref } from 'vue'
import { scrollbarProps, scrollbarEmits } from './scrollbar'
import Bar from './bar.vue'

defineOptions({
  name: 'z-scrollbar',
})
defineProps(scrollbarProps)
const ns = useNamespace('scrollbar')
const emits = defineEmits(scrollbarEmits)
const viewRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()
const barRef = ref<HTMLDivElement>()

const isShow = ref(false)
const barWidth = ref(0)
const barHeight = ref(0)
const barScrollX = ref(0)
const barScrollY = ref(0)

const handleScroll = (event: any) => {
  const _moveX = (event.target.scrollLeft / event.target.offsetWidth) * 100
  const _moveY = (event.target.scrollTop / event.target.offsetHeight) * 100
  barScrollX.value = _moveX
  barScrollY.value = _moveY
  emits('scroll', {
    scrollLeft: event.target.scrollLeft,
    scrollTop: event.target.scrollTop,
  })
}

const update = () => {
  const width = wrapRef.value!.offsetWidth ** 2 / wrapRef.value!.scrollWidth
  const height = wrapRef.value!.offsetHeight ** 2 / viewRef.value!.offsetHeight
  barWidth.value = width < wrapRef.value!.scrollWidth ? width : 0
  barHeight.value = height < viewRef.value!.offsetHeight ? height : 0
}

provide(
  'Scrollbar',
  reactive({
    wrapElement: wrapRef,
    viewElement: viewRef,
    isShow,
  })
)

onMounted(() => {
  update()
})
onUpdated(() => update())
</script>
