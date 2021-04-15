<template>
<div class="tab-control">
<!--  由于只有文字不同，样式相同，因此可以直接用props传入数据，而不用插槽-->
  <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index === currentIndex}"
        @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 44px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 0 3px 3px 3px;
  }
  .active {
    color:var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>