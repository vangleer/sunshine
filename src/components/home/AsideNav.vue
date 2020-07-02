<template>
  <div class="aside_nav">
    <div class="aside_item" @click="showTextClick">
      <span class="iconfont" :class="showText?'icon-yanjing':'icon-guanbi-yanjing'"></span>
      <p>字幕</p>
    </div>
    <div class="aside_item">
      <span class="iconfont icon-zshangyishou"></span>
      <p>上一句</p>
    </div>
    <div class="aside_item">
      <img src="../../assets/images/detail.png" alt />
      <p>详情</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      showText() {
        return this.$store.state.homeData.isShowText
      }
    },
    methods: {
      showTextClick() {
        this.$store.commit('showText')
      }
    }
  }

</script>

<style lang="less" scoped>
  .aside_nav {
    position: absolute;

    right: 0;
    bottom: 100px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    z-index: 3;
    width: 66px;
    height: 260px;
    padding: @padding12;

    .iconfont {
      font-size: @iconSize;
    }

    img {
      width: 30px;
      margin-top: -8px;
    }

    p {
      font-size: @textSize13;
    }
  }

</style>
