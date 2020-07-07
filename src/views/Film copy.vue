<template>
  <div class="film" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <!-- 进度条 -->
    <van-progress :percentage="50" stroke-width="8" :show-pivot="false" color="#f53a35" />
    <!-- 次数 -->
    <div class="count">你正在进行第{{ count }}次输入</div>
    <!-- 取消 -->
    <div class="cansel"><span class="iconfont icon-cuo"></span></div>
    <video id="myVideo" src="" autoplay muted></video>
    <canvas ref="myCanvas"></canvas>
    <!-- 右侧工具条 -->
    <div class="tool_r">
      <div class="top">
        <div v-show="current === 0">
          <div class="item">
            <span class="iconfont icon-fanzhuanjingtou"></span>
            <p>翻转</p>
          </div>
          <div class="item">
            <span class="iconfont icon-meiyan"></span>
            <p>美颜</p>
          </div>
          <div class="item">
            <span class="iconfont icon-ziyuan"></span>
            <p>滤镜</p>
          </div>
        </div>
      </div>
      <!-- 提词器 -->
      <div class="item autocue" @click="$router.push('/autocue')">
        <span class="iconfont icon-ziyuan"></span>
        <p>提词器</p>
      </div>
    </div>

    <!-- 底部工具条 -->
    <div class="bom">
      <div class="tab">
        <span :class="current === 0 ? 'active' : ''" @click="changeMode(0)">视频</span>
        <span :class="current === 1 ? 'active' : ''" @click="changeMode(1)">录音</span>
      </div>
      <div class="flex_align">
        <div class="item">
          <span class="iconfont icon-haibao"></span>
          <p>导入</p>
        </div>

        <!-- 录制按钮 -->
        <div class="play_btn" @click="start">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: require('../assets/images/study.jpg'),
      count: 1,
      video: null,
      mediaSource: null,
      chunks: [],
      recordedBlobs: [],
      current: 0 // 0 为录视频 1为录音
    }
  },
  mounted() {},
  methods: {
    changeMode(opt) {
      this.current = opt
    }
  }
}
</script>

<style lang="less" scoped>
.film {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 30px 12px;
  background-size: 100% 100%;
  color: #fff;
}

.count {
  color: @yelColor;
  margin: 12px 0;
}

.cansel {
  .iconfont {
    font-weight: 700;
    margin-left: 12px;
  }
}

.tool_r {
  position: absolute;
  right: 20px;
  top: 100px;

  .top {
    height: 300px;
  }

  .item {
    text-align: center;
    margin-bottom: 28px;
    font-size: 14px;

    p {
      margin-top: 5px;
    }
  }

  .iconfont {
    font-size: @iconSize;
  }
}

// 底部
.bom {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;

  .item {
    text-align: center;
    margin-bottom: 28px;
    font-size: 14px;

    p {
      margin-top: 5px;
    }

    .iconfont {
      font-size: @iconSize;
    }
  }

  .tab {
    span {
      padding: 0 8px;
      font-size: 14px;
    }

    .active {
      color: @yelColor;
    }
  }

  .item {
    margin-top: 30px;
    margin-left: 30px;
  }

  .play_btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    // margin-left: 100px;

    span {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: @themeColor2;
    }
  }
}
</style>
