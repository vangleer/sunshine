<template>
  <div class="plar_page">
    <van-nav-bar class="nav_bar" :fixed="true" :border="false" z-index="100" @click-left="$router.back()">
      <template #left>
        <span class="iconfont icon-zuo"></span>
      </template>
    </van-nav-bar>
    <!-- 播放按钮 -->
    <div class="play_btn">
      <span v-show="isPlay" @click="handlePlayBtn" class="iconfont icon-bofang"></span>
    </div>
    <video ref="myVideo" v-if="video.video" :src="video.video" @click="handlePlayBtn"></video>
    <img v-else width="100%" height="100%" src="../assets/images/bg2.jpg" alt="">
    <!-- <img width="100%" height="100%" src="../assets/images/bg2.jpg" alt=""> -->
    <!-- 侧边导航 -->
    <div class="side_nav">
      <div class="item" @click="handleLove" :style="{color:video.isLove?'#f53a35':''}">
        <span class="iconfont icon-iconfontzhizuobiaozhun44" style="font-size: 30px;"></span>
        <p>{{video.love_num}}</p>
      </div>
      <div class="item" @click="hanldeShowComment">
        <span class="iconfont icon-pinglun"></span>
        <p>{{video.comment_num}}</p>
      </div>
      <div class="item" @click="handleShare(1)">
        <span class="iconfont icon-zhuanfa"></span>
        <p>{{video.share_num}}</p>
      </div>
    </div>

    <!-- 文字 -->
    <div class="text_box">
      <p>{{video.word}}</p>
    </div>

    <!-- 用户 -->
    <div class="user_box">
      <img :src="video.photo" class="icon" @click="$router.push('/user')" alt="">
      <div class="name">{{video.name}}</div>
      <div class="btn">+关注</div>
    </div>

    <!-- 播放小工具 -->
    <div class="tool_play">
      <div class="btn">
        <span class="iconfont" :class="isPlay?'icon-bofang':'icon-zanting'" @click="handlePlayBtn"></span>
      </div>
      <div class="progress_bar">
        <van-slider v-model="value" @change="onChange" @drag-start="handleStart" button-size="18"
          inactive-color="#e9edf0" active-color="#eb5964">
          <template #button>
            <div class="slider_btn"></div>
          </template>
        </van-slider>
      </div>
      <div class="time_box">
        <span class="start">{{currentTime*1000|dateFormat}}</span>/<span
          class="start">{{duration*1000|dateFormat}}</span>
        <!-- <span class="start">{{currentTime}}</span>/<span class="start">{{duration}}</span> -->
      </div>
    </div>
    <!-- 评论面板 -->
    <van-popup v-model="showComment" position="bottom" :style="{ height: '60%',borderRadius: '20px 20px 0 0'}">
      <div class="com_box">
        <div class="title">最新评论 {{commentList.length}}</div>
        <div class="item" v-for="(item,index) in commentList" :key="index">
          <div class="user flex_bea">
            <div class="flex_align">
              <img v-if="item.icon" src="../assets/images/user2.jpg" alt="">
              <div v-else class="icon_box"><span class="iconfont icon-user"></span></div>
              <div class="">
                <h3>{{item.nickname}}</h3>
                <p>{{item.add_time|datetime_ymd}}</p>
              </div>
            </div>
            <div class="flex_align tool">
              <span class="iconfont icon-pinglun"></span>
              <div class="flex_align">
                <span @click="handleLoveComClick(item)" class="iconfont icon-iconfontzhizuobiaozhun44"><span
                    style="font-size: 20px;">{{item.love_num}}</span></span>
              </div>
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="content">
            <h3>评论内容</h3>
            <div class="txt">{{item.txt}}</div>
          </div>
        </div>
        <!-- 输入框 -->
        <div class="input_box flex_bea" v-if="showComment">
          <input @keydown.enter="sendComment" v-model="commentText" ref="commentRef" type="text"
            placeholder="说点什么, 让更多人记住你">
          <span @click="handleFocus" class="iconfont icon-keyboard"></span>
        </div>
      </div>
      <div v-if="commentList.length===0" class="none">暂无评论</div>
    </van-popup>
    <!-- 分享面板 -->
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="shareOptions" @select="shareSelect" />
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        value: 0,
        isPlay: true,
        duration: 60000,
        interval: null,
        allTime: 0,
        currentTime: 0,
        video: {},
        showComment: false,
        commentList: [],
        commentText: '',
        showShare: false,
        shareOptions: [
          [{
              name: '微信',
              icon: 'wechat'
            },
            {
              name: '微博',
              icon: 'weibo'
            },
            {
              name: 'QQ',
              icon: 'qq'
            }
          ],
          [{
              name: '复制链接',
              icon: 'link'
            },
            {
              name: '分享海报',
              icon: 'poster'
            },
            {
              name: '二维码',
              icon: 'qrcode'
            }
          ]
        ]
      }
    },
    created() {
      this.getVideo()
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted() {
      console.log(Date.now())
      setTimeout(() => {
        this.duration = this.$refs.myVideo.duration
      }, 500)
    },
    methods: {
      // 显示评论
      async hanldeShowComment() {
        const res = await this.$http.fetch('/mock/getVideoComments')
        this.commentList = res.data.data
        this.showComment = true
      },
      // 分享
      shareSelect(option) {
        const url = window.location.href
        this.$toast(`将:${url}\n分享到${option.name}`)
        this.showShare = false
      },
      // 点击分享
      handleShare(id) {
        console.log(id)
        this.showShare = true
      },
      // 获取焦点
      handleFocus() {
        this.$refs.commentRef.focus()
      },
      // 回车发送评论
      sendComment() {
        console.log(this.commentText)
        if (this.commentText.trim().length === 0) {
          return
        }

        const obj = {
          // 设置返回status
          id: Math.floor(Math.random() * 3000),
          nickname: this.userInfo.nickname,
          love_num: 0,
          txt: this.commentText,
          icon: this.userInfo.icon,
          isLove: false,
          comment_num: 0,
          share_num: 0,
          add_time: Date.now()
        }
        this.commentList.unshift(obj)
      },
      // 给评论点赞
      handleLoveComClick(item) {
        item.isLove = !item.isLove
        if (item.isLove) {
          item.love_num++
        } else {
          item.love_num--
        }
      },
      // 点赞
      handleLove() {
        this.video.isLove = !this.video.isLove
        if (this.video.isLove) {
          this.video.love_num++
        } else {
          this.video.love_num++
        }
      },
      onChange() {
        this.currentTime = this.duration * (this.value / 100)
        this.$refs.myVideo.currentTime = this.currentTime
        this.$refs.myVideo.play()
      },
      handleStart() {
        this.$refs.myVideo.pause()
      },
      async getVideo() {
        const res = await this.$http.fetch('/mock/getVideo')
        this.video = res.data.data
        console.log(res)
      },
      // 重置
      handleReset() {
        this.currentTime = 0
        this.value = 0
        this.isPlay = true
      },
      handlePlayBtn() {
        this.isPlay = !this.isPlay
        if (this.isPlay) {
          this.$refs.myVideo.pause()
        } else {
          this.$refs.myVideo.play()
          if (!this.$refs.myVideo) return
          const video = this.$refs.myVideo
          setTimeout(() => {
            this.duration = video.duration
            video.addEventListener('timeupdate', (e) => {
              this.currentTime = video.currentTime
              console.log(this.currentTime)
              this.value = parseInt(this.currentTime / this.duration * 100)
            })

            video.addEventListener('ended', (e) => {
              this.handleReset()
            })
          }, 300)
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

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // 评论盒子
  .com_box {
    width: 100%;
    color: #222;
    padding-bottom: 50px;

    .item {
      padding-bottom: 16px;
      border-bottom: 1px solid #eee;

      .icon_box {
        width: 38px;
        height: 38px;
        text-align: center;
        margin-right: 6px;
        border-radius: 50%;
        background-color: @grayBgColor;
      }

      .iconfont {
        font-size: 20px;
        line-height: 38px;
        color: @whiteColor;
        // color: #fff;
      }
    }

    .title {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 42px;
      background-color: #f8f8f8;
      padding-left: 20px;
      line-height: 42px;
    }

    .user {
      padding: 12px;

      img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        margin-right: 6px;
      }

      .tool {
        .iconfont {
          color: #908f94;
          font-size: 28px;
          padding: 0 6px;
        }

        .icon-pinglun {
          font-size: 23px;
        }
      }
    }

    .content {
      padding: 0 12px;

      .txt {
        background-color: #f8f8f8;
        padding: 10px;
        border-radius: 6px;
        margin-top: 10px;
      }
    }
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
    z-index: 10;

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

  .slider_btn {
    width: 8px;
    height: 16px;
    background-color: @themeColor2;
  }

</style>
