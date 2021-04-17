<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  /*flex布局*/
  display: flex;
  justify-content: space-around;
  background-color: #F4F4F4;
  /*定位到底部*/
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  /*阴影 水平方向0 垂直方向负值*/
  box-shadow: 0 -1px 2px rgba(100, 100, 100, .1);
}

</style>