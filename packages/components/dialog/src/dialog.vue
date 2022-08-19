<template>
  <z-overlay v-show="modelValue" @click="emit('update:modelValue',false)">
    <div 
      :class="[
        ns.b()
      ]"
      v-if="modelValue"
    >
      <header :class="ns.e('header')">
        <span>{{title}}</span>
      </header>
      <slot />
      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </z-overlay>
</template>
<script setup lang="ts">
import ZOverlay from "@z-ui/components/overlay";
import { useNamespace } from '@z-ui/utils';
import { computed, provide } from 'vue';
import { dialogProps, dialogEmits } from "./dialog";
defineOptions({
  name: 'z-dialog'
})
const ns = useNamespace('dialog')
const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

</script>