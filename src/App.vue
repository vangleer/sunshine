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
        const toIndex = to.meta.index
        const fromIndex = from.meta.index
        console.log(toIndex, fromIndex)
        this.transitionName = toIndex < fromIndex ? 'right' : 'left'
      }
    }
  }

</script>

<style lang="less">
  .app {
    overflow-x: hidden;

    .van-nav-bar .van-icon {
      color: @blackCoor;
      font-weight: 700;
      font-size: 20px;
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
    opacity: 0;
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
    opacity: 0;
    transform: translateX(100vw);
    position: absolute;
  }

  .right-enter-active,
  .right-leave-active {
    transition-property: transform, opacity;
    transition: 0.3s ease;
  }

</style>
