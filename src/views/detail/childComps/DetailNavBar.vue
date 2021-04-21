<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <template v-slot:left>
        <div class="back">
          <img src="@/assets/img/common/back.svg" alt="" @click="backClick">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item, index) in titles"
               class="title-item"
               :class="{active: index === currentIndex}"
               @click="titleClick(index)" >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {NavBar},
  data() {
    return {
      titles: ['商品', '参数', '详情', '评论'],
      currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .detail-nav-bar {
    background: white;
  }
  .title {
    text-align: center;
    display: flex;
    font-size: 12px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
  .back {
    text-align: center;
    line-height: 44px;
  }
  .back img {
    vertical-align: middle;
  }
</style>