<template>
  <div style="width: 500px; margin: 200px auto;">
    <div class="flex flex-center">
      <z-popover placement="topLeft">
        <template #reference>
          <z-button>TL</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="top">
        <template #reference>
          <z-button>Top</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="topRight">
        <template #reference>
          <z-button>TR</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
    </div>
    <div class="flex-column fll">
      <z-popover placement="leftTop">
        <template #reference>
          <z-button>LT</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="left">
        <template #reference>
          <z-button>Left</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="leftBottom">
        <template #reference>
          <z-button>LB</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
    </div>
    <div class="flex-column flex-column-end">
      <z-popover placement="rightTop">
        <template #reference>
          <z-button>RT</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="right">
        <template #reference>
          <z-button>Right</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="rightBottom">
        <template #reference>
          <z-button>RB</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
    </div>
    <div class="flex flex-center">
      <z-popover placement="bottomLeft">
        <template #reference>
          <z-button>BL</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="bottom">
        <template #reference>
          <z-button>Bottom</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
      <z-popover placement="bottomRight">
        <template #reference>
          <z-button>BR</z-button>
        </template>
        <div>测试 popover</div>
      </z-popover>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.flex{
  display: flex;
}
.flex-center{
  justify-content: center;
}
.flex-column{
  display: flex;
  flex-direction: column;
}
.fll{
  float: left;
}
.flex-column-end{
  align-items: flex-end;
}
button{
  width: 70px;
}
</style>