<template>
  <div class="goods">
    <goods-item v-for="(item, index) in goods" :goods-item="item" :key="index"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>