<template>
  <div>
    {{_name}}
    {{_age}}
    {{_sex}}
  </div>
  <z-button @click="_name='yangyi'">button</z-button>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
const props = defineProps({
  name: String,
  age: String,
  sex: String
})
const emit = defineEmits(['update:name', 'update:age', 'update:sex'])

const _name = useVModel(props, 'name', emit)
const _age = useVModel(props, 'age', emit)
const _sex = useVModel(props, 'sex', emit)

</script>

<style>
</style>
