<template>
  <div class="side_nav">
    <div class="item">
      <span class="iconfont icon-shangyibi"></span>
      <div>上一句</div>
    </div>
    <div class="item" @click="handleShowCaption">
      <span class="iconfont" :class="showCaption?'icon-guanbi-yanjing':'icon-yanjing'"></span>
      <div>字幕</div>
    </div>

    <div class="item">
      <span class="iconfont icon-comment"></span>
      <div>详情</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showCaption: false
      }
    },
    methods: {
      handleShowCaption() {
        this.showCaption = !this.showCaption
        this.$emit('showCaption', this.showCaption)
      }
    }
  }

</script>

<style lang="less" scoped>
  .side_nav {
    position: absolute;
    width: 40px;
    height: 180px;
    bottom: 85px;
    right: 13px;

    .item {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 60px;

      .iconfont {
        font-size: 21px;
        font-weight: 700;
      }

      view {
        font-size: 13px;
      }
    }
  }

</style>
