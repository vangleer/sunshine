<template>
  <div class="topic">
    <!-- 头部导航 -->
    <!-- 头部导航 -->
    <!-- :class="showNav?'normal_nav':'scroll_nav'" -->
    <van-nav-bar class="nav_bar" :class="showNav?'scroll_nav':''" :fixed="true" :border="false">
      <template #title>
        <h2 v-show="showNav">入门</h2>
      </template>
      <template #left>
        <span class="iconfont icon-zuo" @click="$router.back()"></span>
      </template>
    </van-nav-bar>

    <!-- 内容 -->
    <div class="wrapper" ref="pageScroll">

      <div class="content">
        <div class="top" :style="{backgroundImage: 'url('+bgImg+')'}">
          <div class="title">
            <span class="tit">入门</span>
            <p class="tip">建议按照顺序学习哟~</p>
          </div>
        </div>
        <div class="list">
          <div class="item" v-for="index in 20" :key="index">#打招呼</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        bgImg: require('../assets/images/user2.jpg'),
        showNav: false,
        pageScroll: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.pageScroll = new BScroll(this.$refs.pageScroll, {
          click: true,
          bounce: false,
          probeType: 3
        })
        this.pageScroll.on('scroll', (e) => {
          const top = parseInt(e.y)
          console.log(top)
          if (top >= -160) {
            this.showNav = false
          } else {
            this.showNav = true
          }
          console.log(this.showNav)
        })
      })
    }
  }

</script>

<style lang="less" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .content {
    background-color: @grayBgColor;

    .list {
      position: relative;
      top: -20px;
      width: 100vw;
      border-radius: 12px 12px 0 0;
      overflow: hidden;
      padding: @padding12;
      background-color: @grayBgColor;

    }

    .item {
      display: flex;
      align-items: center;
      font-weight: 700;
      width: 100%;
      height: 42px;
      background-color: #fff;
      border-radius: 4px;
      font-size: 15px;
      padding-left: 12px;
      margin-bottom: 12px;
    }
  }

  .top {
    width: 100vw;
    height: 260px;
    background-size: 100% 100%;
    padding: 150px 20px 0;

    .title {
      .tit {
        color: #fff;
        font-size: 22px;
      }

      .tip {
        color: #fff;
        margin-top: 16px;
        font-size: 14px;
      }
    }
  }

  .nav_bar {

    top: 0;
    left: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);

    h2 {
      font-size: 18px;
      color: #fff;
    }

    .iconfont {
      font-size: 26px;
      font-weight: 700;
    }
  }

  .scroll_nav {
    color: #222;
    background-color: #fff;

    h2 {
      color: #222;
    }
  }

  .normal_nav {
    color: #fff;
    background-color: rgba(0, 0, 0, 0);

    h2 {
      color: #fff;
    }
  }

</style>
