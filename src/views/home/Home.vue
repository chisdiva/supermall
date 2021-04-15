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
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeMultidata, getHomeGoods} from "@/network/home";

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
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [{}],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  //首页组件创建后发送网络请求
  created() {
    //created中一般只进行函数的执行操作，具体操作可以抽离到methods中,并且这样可以方便传递不同参数
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    tabClick(index) {
      //将goods转为数组
      this.currentType = Object.keys(this.goods)[index];
    },


    /*
    网络请求相关方法
    */
    getHomeMultidata() {
      //函数返回promise
      getHomeMultidata().then(res => {
        //保存数据
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      getHomeGoods(type, ++this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list)
        console.log(this.goods[type].list)
      })
    }
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
    z-index: 99;
  }
</style>