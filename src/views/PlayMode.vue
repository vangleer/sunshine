<template>
  <div class="play_mode">
    <!-- 头部导航 -->
    <van-nav-bar title="播放模式" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <!-- 内容 -->
    <div class="content">
      <div class="item" v-for="index in 3" :key="index" @click="handleSelect(index)">
        <div class="title">
          <div class="dot" :class="index===active?'active':''"></div>
          <span>懒人模式</span>
        </div>
        <div class="bom">
          <p>(第二遍字幕自动打开,开关可调节)</p>
          <p class="info">省时省力,是个不错的选择哟</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1
      }
    },
    methods: {
      handleSelect(index) {
        this.active = index
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    height: 100vh;
    background-color: @grayBgColor;
  }

  .item {
    padding: 16px;

    .title {
      display: flex;

      .dot {
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        border: 3px solid @themeColor2;
        margin-top: 3px;
        margin-right: 20px;
        opacity: 0.5;
      }

      .active {
        opacity: 1;
      }
    }

    .bom {
      padding-left: 30px;

      p {
        margin-top: 8px;
        color: @lightBlack;
        font-size: @textSize15;
      }

      .info {
        font-size: @textSize13;
        color: @grayColor;
      }
    }
  }

</style>
