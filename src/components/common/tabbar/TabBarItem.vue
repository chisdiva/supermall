<template>
  <div class="tab-bar-item" @click='itemClick'>
<!--    两个插槽接收不同状态图标 -->
    <slot name="item-icon" v-if="isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
<!--    不能在插槽上用v-bind:class，因为插槽会被替换掉-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: { //路径由父组件传进来
    path: String,
    activeColor: {
      type:String,
      default: '#ff5777'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)
    },
    activeStyle() {
      return this.isActive ? {} : {color:this.activeColor}
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path != this.path) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .active {
    color: #ff0000;
  }
</style>