<template>
  <div class="goods-item" @click="itemClick">
      <img :src="showImage" alt="">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    //详情页中推荐和首页商品数据的对象路径不同
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      //要有后退，所以用push
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
  .goods-item {
    margin-top: 15px;
    width: 47%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    font-size: 12px;
  }

  .goods-item img {
    width: 100%;
  }

  .goods-info {
    margin-top: 10px;
  }
  .goods-info p{
    margin-bottom: 5px;;
  }
  .goods-item .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-item .collect {
    position: relative;
  }

  .goods-item .collect::before {
    content: '';
    position: absolute;
    left: -13px;
    top: -1px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
    width: 14px;
    height: 14px;
  }
</style>