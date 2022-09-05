<template>
  <Transition name="dialog-fade">
    <z-overlay
      v-show="modelValue"
      :z-index="zIndex"
      @click="emit('update:modelValue', false)"
    >
      <div
        v-if="isRendered"
        :class="[ns.b()]"
        :style="{ width: width }"
        @click.stop
      >
        <header :class="ns.e('header')">
          <span>{{ title }}</span>
          <z-icon
            :class="ns.e('headerbtn')"
            @click="emit('update:modelValue', false)"
          >
            <Close />
          </z-icon>
        </header>
        <div :class="ns.e('body')">
          <slot />
        </div>
        <footer v-if="$slots.footer" :class="ns.e('footer')">
          <slot name="footer" />
        </footer>
      </div>
    </z-overlay>
  </Transition>
</template>
<script setup lang="ts">
import ZOverlay from '@z-ui/components/overlay'
import { useNamespace, useZIndex, CloseComponents } from '@z-ui/utils'
import { ref, watch } from 'vue'
import { dialogProps, dialogEmits } from './dialog'

defineOptions({
  name: 'z-dialog',
})
const ns = useNamespace('dialog')
const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const { nextZIndex } = useZIndex()

const zIndex = ref(nextZIndex())
const isRendered = ref(false)
const hasOtherOverlay = ref(false)
watch(
  () => props.modelValue,
  (value) => {
    useLockScreen(value)
    if (props.modelValue) {
      zIndex.value = nextZIndex()
      isRendered.value = true
    }
  }
)

const useLockScreen = (trigger: boolean) => {
  const _bodyClass = document.body.classList
  const _className = 'z-lock-parent'
  if (trigger) {
    if (_bodyClass.contains(_className)) {
      hasOtherOverlay.value = true
      return
    }
    _bodyClass.add(_className)
  } else {
    if (hasOtherOverlay.value) return
    _bodyClass.remove(_className)
  }
}
const { Close } = CloseComponents
</script>
