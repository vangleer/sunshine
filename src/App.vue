<template>
  <div class="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        transitionName: 'left' // 路由动画类名
      }
    },
    async created() {
      // console.log(this.$store.state.userInfo.username)
      // const mobile = JSON.parse(localStorage.getItem('mobile'))
      // if (mobile) {
      //   const res = await this.$http.fetch('/user/getUser', {
      //     mobile
      //   })
      //   if (res.status === 0) return
      //   // this.userInfo = res.data
      //   this.$store.commit('changeUserInfo', res.data)
      //   console.log(res.data)
      // }
      // 页面一加载通知vuex获取用户的数据
      this.$store.dispatch('getUserInfo')
    },
    watch: {
      $route(to, from) {
        const token = localStorage.getItem('mobile')
        if (to.meta.login && !token) {
          this.$router.push('/login')
        }
        const toIndex = to.meta.index
        const fromIndex = from.meta.index
        console.log(toIndex, fromIndex, token)
        this.transitionName = toIndex < fromIndex ? 'right' : 'left'
      }
    }
  }

</script>

<style lang="less">
  .app {
    overflow-x: hidden;
    width: 100vw;

    .van-nav-bar .van-icon {
      color: @blackCoor;
      font-weight: 700;
      font-size: 20px;
    }

    .van-nav-bar__left {
      padding-top: 40px !important;
    }

    .van-nav-bar {
      padding-top: 40px !important;
      height: 90px;
    }

    .van-nav-bar__title {
      font-weight: 700;
      font-size: 18px;
    }

    .van-uploader__upload {
      width: 78px;
      height: 78px;
    }

    .van-uploader__preview-image {
      width: 78px;
      height: 78px;
    }
  }

  // 索引栏
  .van-index-bar__sidebar {
    padding: 0;
    right: 10px !important;

    .van-index-bar__index {
      padding: 0;
    }

    .van-index-bar__index--active {
      background-color: @themeColor2;
      color: #fff !important;
      padding-left: 0;
      border-radius: 50%;
      padding-right: 0;
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
    }

    span {
      line-height: 20px;
      color: @deepColor;
    }
  }

  .left-enter {
    transform: translateX(100vw);
  }

  .left-leave-to {
    opacity: 1;
    transform: translateX(-100vw);
    position: absolute;
  }

  .left-enter-active,
  .left-leave-active {
    transition-property: transform, opacity;
    transition: 0.3s ease;
  }

  .right-enter {
    transform: translateX(-100vw);
  }

  .right-leave-to {
    opacity: 1;
    transform: translateX(100vw);
    position: absolute;
  }

  .right-enter-active,
  .right-leave-active {
    transition-property: transform, opacity;
    transition: 0.3s ease;
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

    .input_box {
      position: fixed;
      z-index: 2000;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 46px;
      padding: 8px 12px;
      background-color: #fff;
      color: #8a898e;

      input {
        width: 90%;
        height: 100%;
        background-color: #fafafa;
        padding-left: 12px;
        caret-color: tomato;
      }

      .iconfont {
        font-size: 26px;
        color: #222;
      }
    }

    .none {
      position: absolute;
      font-size: 20px;
      color: #222;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

</style>
