<template>
  <div class="tabbar flex_bea">
    <div class="user_icon">
      <img src="../../assets/images/logo.jpg" alt />
    </div>
    <div class="tab_nav">

      <div class="nav_item" :class="isLove?'love':''" @click="dianZhan">
        <span class="iconfont icon-love"></span>
        <p>{{numbers.love}}</p>
      </div>
      <div class="nav_item">
        <span class="iconfont icon-message_1" @click="handleComment"></span>
        <p>{{numbers.comment}}</p>
      </div>
      <div class="nav_item">
        <span class="iconfont icon-zhuanfa" @click="shareClick"></span>
        <p>{{numbers.share}}</p>
      </div>

    </div>
    <div class="tab_play" @click="$router.push('/film')">
      <img src="../../assets/images/camera_nor.png" alt="">
      <p>拍摄</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      numbers: {
        type: Object,
        default () {
          return {}
        }
      },
      loves: {
        type: String,
        default: ''
      },
      id: Number
    },
    data() {
      return {
        // 是否点赞
        isLove: false,
        userId: '',
        loveNum: 0
      }
    },
    create() {
      this.loveNum = parseInt(this.numbers.love)
    },
    methods: {
      // 分享
      shareClick() {
        this.$emit('shareClick', this.id)
      },
      // 点击评论
      handleComment() {
        this.$emit('commentClick', this.id)
      },
      // 点赞
      async dianZhan() {
        this.isLove = !this.isLove
        if (this.$store.state.userInfo && this.$store.state.userInfo.id) {
          this.userId = this.$store.state.userInfo.id
        } else {
          return this.$message({
            type: 'danger',
            message: '请先登录!'
          })
        }
        if (this.isLove) { // 加一
          this.numbers.love++
        } else { // 减一
          this.numbers.love--
        }

        // 发请求
        const res = await this.$http.post('/video/dianzhan?id=' + this.id, {
          love: this.numbers.love
        })
        console.log(res)
      }
    }
  }

</script>
<style lang="less" scoped>
  .tabbar {
    position: absolute;
    padding: 0 8px;
    width: 100%;
    bottom: 10px;
    left: 0;
    z-index: 2;

    .user_icon {
      width: 50px;
      text-align: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .tab_nav {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;
      margin: 0 12px;

      .iconfont {
        font-size: 32px;
      }

      .nav_item {
        width: 50px;

        p {
          width: 100%;
          padding-left: 24px;
          font-size: 10px;
          margin-top: -6px;
        }
      }

      .love {
        .iconfont {
          color: @themeColor2;
        }
      }
    }

    .tab_play {
      display: flex;
      width: 50px;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        margin-top: 6px;
        font-size: @textSize13;
      }
    }
  }

</style>
