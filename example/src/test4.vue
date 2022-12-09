<template>
  <z-radio v-model="radio">按钮</z-radio>
  <!-- <el-button>test</el-button>
  <el-button type="primary">test</el-button> -->
</template>
<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
