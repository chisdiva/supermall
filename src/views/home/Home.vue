<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h4>购物街</h4>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control"></tab-control>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";

import {getHomeMultidata} from "@/network/home";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [{}],
      titles: ['流行', '新款', '精选']
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
  #home {
    /*解决固定定位脱离文档流带来的问题*/
    padding: 44px 0 39px 0;
  }
  #home::after {
    content: '';
    display: block;
    height: 500px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #eeeeee;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>