<template>
<div id="recommend-view">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  #recommend-view {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    width: 65px;
  }
  #recommend-view img {
    width: 100%;
  }
</style>