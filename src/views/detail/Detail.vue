<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-param-info :param-info="paramInfo"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    <goods-list :goods="recommends"></goods-list>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";

import {getDetail, getRecommend, GoodsInfo, Shop, GoodsParam} from "@/network/detail";

import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";

import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "Detail",
  components: {
    DetailCommentInfo,
    DetailParamInfo,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: []
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {

      //获取轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      console.log(this.topImages)

      //获取商品信息
      this.goods = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

      //获取店铺信息
      this.shop = new Shop(res.result.shopInfo);

      //获取商品详情信息
      this.detailInfo = res.result.detailInfo;

      //获取商品参数
      this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

      //获取评论信息
      this.commentInfo = res.result.rate.cRate !== 0 ? res.result.rate.list[0] : {}
    })
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    document.documentElement.scrollTop = 0
  },
  methods: {

  }
}
</script>

<style scoped>
  #detail {
    /*vh:相对视口高度*/
    /*height: 100vh;*/
    padding: 44px 0 0 0;
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
</style>