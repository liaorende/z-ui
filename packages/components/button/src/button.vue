<template>
  <button
    :class="[
      ns.b(),
      ns.is('plain', props.plain),
      ns.is('loading', props.loading),
      ns.is('disabled', props.disabled),
      ns.is('shadow', props.shadow),
      ns.m(props.type),
      ns.m(props.size),
    ]"
    @click="handleClick"
  >
    <z-icon v-if="props.icon">
      <component :is="props.icon" />
    </z-icon>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
import { buttonProps } from './button'
import { useNamespace } from '@z-ui/utils'
import { ZIcon } from '@z-ui/components/icon'
defineOptions({
  name: 'z-button',
})
const ns = useNamespace('button')
const props = defineProps(buttonProps)
const emit = defineEmits(['click'])
const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
