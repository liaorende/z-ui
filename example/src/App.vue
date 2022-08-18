
<template>
  button组件<br />
  <z-button plain>按钮</z-button>
  <z-button plain disabled>按钮测试</z-button><br />
  <z-button>test</z-button>
  <z-button disabled>test 123</z-button><br />
  <z-button size="small" icon="Search">搜索</z-button>
  <z-button size="small">
    搜索<z-icon class="z-icon--right"><Search /></z-icon>
  </z-button><br />
  <z-button plain icon="Search">按钮</z-button>
  <z-button plain>
    搜索<z-icon class="z-icon--right"><Search /></z-icon>
  </z-button>
  <br />
  input组件
  <br />
  <z-input v-model="value" @input="onInput" @change="onChange"
    class="custom-input"
    prefixIcon="Search"
    style="width: 190px"
    showWordLimit
    maxlength="30"
  />
  <br />
  <z-input v-model="value" @input="onInput" @change="onChange"
    class="custom-input"
    suffixIcon="Search"
    style="width: 190px"
    showWordLimit
    maxlength="20"
  />
  <br />
  <z-checkbox v-model="checked" label="选项1" disabled />
  <br />
  <z-checkbox-group v-model="checkedList" disabled>
    <z-checkbox label="选项1" />
    <z-checkbox label="选项2" />
  </z-checkbox-group>
  <br />
  <z-radio-group v-model="radio">
    <z-radio label="单选1">Option 1</z-radio>
    <z-radio label="单选2">Option 2</z-radio>
  </z-radio-group>
  radio: {{radio}}
</template>
<script setup lang="ts">
import { ref } from 'vue';

const value = ref('123')
const onInput = (data: string) => {
  console.log('value--',data)
}
const onChange = (data: string) => {
  console.log('onChange--',data)
}

const checked = ref(false)
const checkedList = ref(['选项1','选项'])

const radio = ref('1')
</script>
<style>
#app{
  padding: 20px;
}
</style>