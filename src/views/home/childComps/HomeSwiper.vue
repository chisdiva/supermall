<template>
<div id="home-swiper">
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    //从父组件获取轮播图数据
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>