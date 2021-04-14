<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: [{}],

    }
  },
  //首页组件创建后发送网络请求
  created() {
    //函数返回promise
    getHomeMultidata().then(res => {
      //保存数据
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
  }
</style>