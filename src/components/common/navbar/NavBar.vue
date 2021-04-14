<template>
<!--  多个不同导航条 因此用class-->
<div class="nav-bar">
<!--  加一个div作为容器，方便用class选择-->
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .left,
  .right{
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
</style>