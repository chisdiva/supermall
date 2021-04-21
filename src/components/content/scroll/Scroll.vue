<template>

</template>

<script>
import {debounce} from "@/common/utils";

export default {
  name: "Scroll",
  mounted() {
    window.onscroll = debounce(this.scrollListener, 200)
  },
  methods: {
    scrollListener() {
      // this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // this.isScroll = this.scrollTop > 400;
      // //判断是否上拉到底
      // if(Math.round(this.scrollTop) + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
      //   this.getHomeGoods(this.currentType);
      // }
    },
  }
}
</script>

<style scoped>

</style>