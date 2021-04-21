<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, id) in topImages" :key="id">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'

export default {
  name: "DetailSwiper",
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detail-swiper{
    height: 320px;
    overflow: hidden;
  }
</style>