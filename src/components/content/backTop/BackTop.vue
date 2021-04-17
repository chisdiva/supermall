<template>
<div class="back-top">
  <img src="@/assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
  name: "BackTop",
}
</script>

<style scoped>
  .back-top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 55px;
    right: 20px;
    z-index: 999;
  }
  .back-top img {
    width: 100%;
  }
</style>