
<template>
  <z-scrollbar>
  button组件<br />
  <!-- <el-button>dad</el-button> -->
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
  <z-input @input="onInput" @change="onChange"
    class="custom-input"
    style="width: 190px"
    maxlength="30"
  /><br />
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
  <z-checkbox v-model="checked" label="test" @change="test">
    aaaa
  </z-checkbox>
  <z-checkbox v-model="checkAll" :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    选中全部
  </z-checkbox>
  <br />
  <z-checkbox-group v-model="checkedList" @change="handleCheckedChange">
    <z-checkbox label="选项1" />
    <z-checkbox label="选项2" />
  </z-checkbox-group>
  <br />
  <z-radio-group v-model="radio">
    <z-radio label="单选1">Option 1</z-radio>
    <z-radio label="单选2">Option 2</z-radio>
  </z-radio-group>
  radio: {{radio}}
  <br />
  <z-button @click="dialogVisible = true">
    打开弹窗
  </z-button>
  <z-dialog title="test title" v-model="dialogVisible">
    <span>弹窗1111</span>
    <template #footer>
      <z-button plain>关闭</z-button>
      <z-button @click="dialogVisible2 = true">确认</z-button>
    </template>
  </z-dialog>
  <z-dialog title="test title" v-model="dialogVisible2">
    <span>弹窗2222</span>
    <template #footer>
      <z-button plain>关闭</z-button>
      <z-button @click="dialogVisible2 = true">确认</z-button>
    </template>
  </z-dialog>
  <z-select readonly/>
  </z-scrollbar>
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
const checkAll = ref(false)
const isIndeterminate = ref(true)
const test = (value: boolean)=>{
  console.log('value--->',value)
} 
const handleCheckAllChange = (val: boolean) => {
  checkedList.value = val ? list : []
  isIndeterminate.value = false
}
const handleCheckedChange = (value: string[]) => {
  console.log('handleCheckedChange--',value)
  const checkedCount = value.length
  checkAll.value = checkedCount === list.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < list.length
}
const list = ['选项1','选项2']
const checkedList = ref(['选项1'])
const radio = ref('单选1')
const dialogVisible = ref(false)
const dialogVisible2 = ref(false)

</script>
<style>
#app{
  padding: 20px;
  /* height: 3000px; */
}
</style>