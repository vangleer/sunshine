<template>
  <div class="film" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <div class="top_t">
      <!-- 进度条 -->
      <van-progress :percentage="50" stroke-width="8" :show-pivot="false" color="#f53a35" />
      <!-- 次数 -->
      <div class="count">你正在进行第{{ count }}次输入</div>
      <!-- 取消 -->
      <div class="cansel"><span class="iconfont icon-cuo"></span></div>
    </div>
    <div class="video_box">
      <video :src="sourceUrl"></video>
    </div>
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
      <div class="center_b flex_bea">
        <div class="tab">
          <span :class="current === 0 ? 'active' : ''" @click="changeMode(0)">视频</span>
          <span :class="current === 1 ? 'active' : ''" @click="changeMode(1)">录音</span>
        </div>
        <!-- 录制按钮 -->
        <van-uploader :after-read="afterRead" :accept="acceptType" capture="camera">
          <van-button
            style="width: 65px;height: 65px;border-radius: 50%;display: flex;justify-content: center;align-items: center;">
            <span class="btn"></span>
          </van-button>
        </van-uploader>
      </div>
      <div class="item">
        <van-uploader :after-read="afterRead">
          <span class="iconfont icon-haibao"></span>
          <p>导入</p>
        </van-uploader>
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
        acceptType: 'video/*',
        sourceUrl: '',
        current: 0 // 0 为录视频 1为录音
      }
    },
    mounted() {},
    methods: {
      changeMode(opt) {
        this.current = opt
        this.acceptType = opt === 0 ? 'video/*' : 'audio/*'
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file)
        this.sourceUrl = file.content
      }
    }
  }

</script>

<style lang="less" scoped>
  .film {
    position: relative;
    width: 100%;
    height: 100vh;

    background-size: 100% 100%;
    color: #fff;
  }

  .top_t {
    width: 100%;
    position: absolute;
    z-index: 1;
    padding: 30px 12px;
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
    display: flex;
    position: absolute;
    bottom: 60px;
    width: 100%;

    .center_b {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column;
    }

    .item {
      position: relative;
      top: 20px;
      text-align: center;
      font-size: 14px;

      p {
        margin-top: 5px;
      }

      .iconfont {
        font-size: @iconSize;
      }
    }

    // position: absolute;
    // left: 50%;
    // transform: translateX(-50);
    .tab {
      margin-bottom: 20px;

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

    span.btn {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: @themeColor2;
    }
  }

  .video_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .video {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

</style>
