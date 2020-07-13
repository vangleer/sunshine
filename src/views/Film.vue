<template>
  <div class="film" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <div class="top_t">
      <!-- 进度条 -->
      <van-slider v-model="progress" :min="0" :max="100" active-color="#f53a35" @change="onChange">
        <template #button>
          <div class="slider_btn"></div>
        </template>
      </van-slider>
      <!-- <van-progress :percentage="progress" stroke-width="8" :show-pivot="false" color="#f53a35" /> -->
      <!-- 次数 -->
      <div class="count">{{currentTime|timeFormat}}/{{allTime|timeFormat}}</div>
      <!-- 取消 -->
      <div class="cansel"><span class="iconfont icon-cuo" @click="goBack"></span></div>
    </div>
    <div class="video_box">
      <div class="play_btn" v-show="showBtn">
        <span class="iconfont icon-bofang1" @click.stop="startPlay"></span>
      </div>
      <video v-if="current==0" class="video" ref="myVideo" @click.stop="startPlay" :src="sourceUrl"></video>
      <audio v-if="current==1" class="video" ref="myVideo" @click.stop="startPlay" :src="sourceUrl"></audio>
    </div>
    <!-- 右侧工具条 -->
    <div class="tool_r">
      <div class="top">
        <div class="item" @click="handleUpload">
          <van-button icon="star-o" size="small" color="linear-gradient(to right, #f83930, #e730f8)" type="primary">
            立即上传</van-button>
          <!-- <van-button type="warning">立即上传</van-button> -->
          <!-- <span class="iconfont icon-fanzhuanjingtou"></span> -->
          <!-- <p>翻转</p> -->
        </div>
        <div v-show="current === 0">

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
            style="width: 66px;height: 66px;border-radius: 50%;display: flex;justify-content: center;align-items: center;">
            <span class="btn"></span>
          </van-button>
        </van-uploader>
      </div>
      <!-- <div class="item">
        <van-uploader :after-read="afterRead">
          <span class="iconfont icon-haibao"></span>
          <p>导入</p>
        </van-uploader>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bgImg: require('../assets/images/study.jpg'),
        count: 1,
        progress: 0,
        acceptType: 'video/*',
        sourceUrl: '',
        fileDate: null,
        showBtn: false,
        allTime: 0,
        currentTime: 0,
        current: 0 // 0 为录视频 1为录音
      }
    },
    mounted() {},
    methods: {
      changeMode(opt) {
        this.current = opt
        this.acceptType = opt === 0 ? 'video/*' : 'audio/*'
      },
      // 点击上传
      async handleUpload() {
        const content = this.$store.state.autocueContent
        if (!this.fileDate) {
          return this.$toast.fail('请选择或者拍摄视频!')
        }
        if (!content) {
          return this.$toast.fail('请输入提词器!')
        }

        const formData = new FormData()
        formData.append('video', this.fileDate)
        formData.append('content', content)
        formData.append('user_id', this.$store.state.userInfo.id)
        formData.append('cate', '#')
        try {
          // console.log(formData)
          const res = await this.$http.instance.post('/video/addVideo', formData)
          console.log(res)
          if (res.data.status === 0) return this.$toast.fail(res.data.msg)
          this.$toast.success(res.data.msg)
          // 把内容清空
          this.$store.commit('changeContent', '')
        } catch (error) {
          return this.$toast.fail('上传失败')
        }
      },
      goBack() {
        this.$dialog.alert({
          title: '提示',
          showCancelButton: true,
          message: '是否停止拍摄'
        }).then(() => {
          this.progress = 0
          this.sourceUrl = ''
          this.fileDate = null
          this.showBtn = false
          this.allTime = 0
          this.currentTime = 0
          this.$router.back()
        }).catch(() => {})
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        this.fileDate = file.file
        this.sourceUrl = file.content
        this.showBtn = true
        const video = this.$refs.myVideo
        setTimeout(() => {
          this.allTime = video.duration
          video.addEventListener('timeupdate', (e) => {
            setTimeout(() => {
              this.currentTime = video.currentTime
              this.progress = parseInt(this.currentTime / this.allTime * 100)
              console.log()
            }, 1000)
          })

          video.addEventListener('ended', (e) => {
            this.currentTime = 0
            this.progress = 0
          })
        }, 300)
      },
      // 开始播放
      startPlay() {
        this.showBtn = !this.showBtn
        if (this.showBtn) {
          this.$refs.myVideo.pause()
        } else {
          this.$refs.myVideo.play()
        }
      },
      onChange() {
        if (!this.sourceUrl) {
          this.progress = 0
          return
        }
        this.currentTime = this.allTime * (this.progress / 100)
        this.$refs.myVideo.currentTime = this.currentTime
        // this.progress = parseInt(this.currentTime / this.allTime * 100)
        console.log(this.progress)
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
    width: 100px;

    .iconfont {
      font-weight: 700;
      margin-left: 12px;
    }
  }

  .tool_r {
    position: absolute;
    z-index: 10;
    right: 20px;
    top: 80px;

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
    bottom: 130px;
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

    .play_btn {
      position: absolute;
      z-index: 1000;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .iconfont {
        font-size: 42px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .slider_btn {
    width: 8px;
    height: 12px;
    background-color: #f85f30;
  }

</style>
