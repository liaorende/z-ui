<template>
  <test-a></test-a>
  <!-- <test-b></test-b> -->
  <!-- <test-c
    v-model:name="name"
  ></test-c> -->
  <!-- <test-d></test-d> -->
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TestA from './test1.vue'
import TestB from './test2.vue'
import TestC from './test3.vue'
import TestD from './test4.vue'

const name = ref('yy')

</script>
<style>
body {
  margin: 0;
}
#app {
  padding: 20px;
  /* background-color: palegoldenrod; */
  /* height: 3000px; */
}
</style>
