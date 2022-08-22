<template>
  <Transition
    name="dialog-fade"
  >
    <z-overlay v-show="modelValue" @click="emit('update:modelValue',false)">
      <div
        :class="[
          ns.b()
        ]"
        :style="{'width':width}"
        v-if="isRendered"
        @click.stop
      >
        <header :class="ns.e('header')">
          <span>{{title}}</span>
          <z-icon :class="ns.e('headerbtn')" @click="emit('update:modelValue',false)">
            <Close />
          </z-icon>
        </header>
        <div :class="ns.e('body')">
          <slot />
        </div>
        <footer :class="ns.e('footer')" v-if="$slots.footer">
          <slot name="footer" />
        </footer>
      </div>
    </z-overlay>
  </Transition>
</template>
<script setup lang="ts">
;
import ZOverlay from "@z-ui/components/overlay";
import { useNamespace, CloseComponents } from '@z-ui/utils';
import { ref, watch } from 'vue';
import { dialogProps, dialogEmits } from "./dialog";

defineOptions({
  name: 'z-dialog'
})
const ns = useNamespace('dialog')
const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

let isRendered = ref(false)
watch(() => props.modelValue, (value)=>{
  useLockScreen(value)
  if(props.modelValue){
    isRendered.value = true
  }
})

const useLockScreen = (trigger: boolean) => {
  const _bodyClass = document.body.classList
  const _className = 'z-lock-parent'
  if(trigger){
    if(_bodyClass.contains(_className)) return
    _bodyClass.add(_className)
  }else{
    _bodyClass.remove(_className)
  }
}
const { Close } = CloseComponents
</script>