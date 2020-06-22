<template>
  <div class="tabbar flex_bea">
    <div class="user_icon">
      <img src="../../assets/images/logo.jpg" alt />
    </div>
    <div class="tab_nav">

      <div class="nav_item" :class="isLove?'love':''" @click="dianZhan">
        <span class="iconfont icon-love"></span>
        <p>123</p>
      </div>
      <div class="nav_item">
        <span class="iconfont icon-message_1"></span>
        <p>123</p>
      </div>
      <div class="nav_item">
        <span class="iconfont icon-zhuanfa"></span>
        <p>123</p>
      </div>

    </div>
    <div class="tab_play">
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
      id: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        // 是否点赞
        isLove: false
      }
    },
    methods: {
      dianZhan() {
        const id = this.id
        this.isLove = !this.isLove
        if (this.isLove) {
          this.loveNum = this.loveNum + 1
          this.$store.commit('increaseLove', id)
        } else {
          this.$store.commit('decreaseLove', id)
          this.loveNum = this.loveNum - 1
        }
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
        // margin-top: 10px;
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
          color: #f04007;
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
        font-size: 12px;
      }
    }
  }

</style>
