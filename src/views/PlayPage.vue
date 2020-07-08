<template>
  <div class="plar_page">
    <van-nav-bar class="nav_bar" :fixed="true" :border="false" z-index="100" @click-left="$router.back()">
      <template #left>
        <span class="iconfont icon-zuo"></span>
      </template>
    </van-nav-bar>
    <!-- 播放按钮 -->
    <div class="play_btn">
      <span v-show="!isPlay" @click="handlePlayBtn" class="iconfont icon-bofang"></span>
    </div>
    <img width="100%" height="100%" src="../assets/images/bg2.jpg" alt="">
    <!-- 侧边导航 -->
    <div class="side_nav">
      <div class="item">
        <span class="iconfont icon-iconfontzhizuobiaozhun44" style="font-size: 30px;"></span>
        <p>1</p>
      </div>
      <div class="item">
        <span class="iconfont icon-pinglun"></span>
        <p>1</p>
      </div>
      <div class="item">
        <span class="iconfont icon-zhuanfa"></span>
        <p>1</p>
      </div>
    </div>

    <!-- 文字 -->
    <div class="text_box">
      <p>asjgbfhk savb dhgasa vscghdddd asdas dsa</p>
    </div>

    <!-- 用户 -->
    <div class="user_box">
      <img src="../assets/images/user2.jpg" class="icon" alt="">
      <div class="name">大幂幂</div>
      <div class="btn">+关注</div>
    </div>

    <!-- 播放小工具 -->
    <div class="tool_play">
      <div class="btn">
        <span class="iconfont" :class="isPlay?'icon-zanting':'icon-bofang'" @click="handlePlayBtn"></span>
      </div>
      <div class="progress_bar">
        <van-slider v-model="value" @change="onChange" button-size="18" inactive-color="#e9edf0"
          active-color="#eb5964" />
      </div>
      <div class="time_box">
        <span class="start">{{currentTime|dateFormat}}</span>/<span class="start">{{duration|dateFormat}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        isPlay: false,
        duration: 60000,
        interval: null,
        allTime: 0,
        currentTime: 0
      }
    },
    methods: {
      onChange() {},
      handlePlayBtn() {
        this.isPlay = !this.isPlay
        if (this.isPlay) {
          this.interval = setInterval(() => {
            this.currentTime += 1000
            const rate = this.currentTime / this.duration
            this.value = rate * 100
          }, 1000)
        } else {
          clearInterval(this.interval)
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  .plar_page {
    width: 100%;
    height: 100vh;
    position: relative;
    color: #fff;
  }

  .nav_bar {
    background-color: rgba(0, 0, 0, 0);

    .iconfont {
      font-size: @iconSize;
      font-weight: 700;
    }
  }

  .play_btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .iconfont {
      color: #c6c6c6;
      font-size: 55px;
      opacity: 0.5;
      cursor: pointer;
    }
  }

  .side_nav {
    position: absolute;
    right: 0;
    bottom: 80px;
    width: 60px;

    .item {
      text-align: center;
      margin-bottom: 20px;

      .iconfont {
        font-size: 24px;
      }

      p {
        margin-top: 3px;
      }
    }
  }

  .text_box {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 66%;
    padding: 15px;
    transform: translateX(-50%);

    p {
      width: 100%;
      text-align: center;
      word-break: break-all;
    }
  }

  .user_box {
    position: absolute;
    display: flex;
    align-items: center;
    left: 16px;
    bottom: 120px;

    .name {
      font-weight: 700;
      margin: 0 12px;
    }

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .btn {
      font-size: 14px;
      padding: 2px 12px;
      border-radius: 16px;
      background-color: @yelColor;
    }
  }

  // 播放工具
  .tool_play {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 10px;
    padding: 16px;

    .progress_bar {
      flex: 1;
      margin: 0 16px;
    }

    .time_box {
      font-size: 13px;
    }

    .btn {
      .iconfont {
        font-size: 20px;
      }
    }
  }

</style>
