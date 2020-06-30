<template>
  <div class="integral">
    <!-- <div class="top" :style="{backgroundImage:'url('+bgImg+')'}"> -->
    <!-- 头部导航 -->
    <!-- <van-nav-bar title="我的积分" :border="false" left-arrow @click-left="$router.back()" /> -->
    <div class="nav_bar" :class="isNav?'nav2':''">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <div class="middle">我的积分</div>
      <span></span>
    </div>
    <div class="wrapper" ref="scrollRef">
      <div>
        <div class="top" ref="topRef">
          <!-- 积分说明 -->
          <div class="explain">积分说明</div>
          <!-- 积分数量 -->
          <div class="num">
            <span class="iconfont icon-integral"></span>
            <span class="text">17</span>
          </div>
          <!-- 今日获得积分 -->
          <div class="today">
            今日获得积分:<span>0/36</span>
          </div>
        </div>

        <!-- 获取积分方法 -->
        <div class="integral_list">
          <div class="item" v-for="index in 8" :key="index">
            <div class="title">邀请积分</div>
            <van-cell center label="完成目标+2分" title-style="fontWeight: 700;">
              <!-- 使用 title 插槽来自定义标题 -->
              <div>
                <span class="btn">去完成</span>
              </div>
              <template #title>
                <span class="custom-title">基础型积分</span>
              </template>
            </van-cell>
          </div>
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
        bgImg: require('../assets/images/bg4.jpg'),
        scroll: null,
        isNav: false,
        flag: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scrollRef, {
          bounce: false,
          useTransition: false,
          click: true,
          scrollY: true,
          probeType: 3
        })

        this.scroll.on('scroll', (op) => {
          // console.log(this.isNav)
          const h = this.$refs.topRef.offsetHeight - 70
          if (op.y <= -h) {
            this.isNav = true
          } else {
            this.isNav = false
          }
        })
      })
    }
  }

</script>

<style lang="less" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
  }

  .integral {
    background-color: #f8f8f8;
  }

  .nav_bar {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    // background-color: transparent;
    display: flex;
    color: #fff;

    span {
      display: inline-block;
      width: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      font-weight: 700;
    }

    .middle {
      flex: 1;
      line-height: 50px;
      text-align: center;
      font-size: 17px;
      font-weight: 700;
    }
  }

  .nav2 {
    background-color: #fff;
    color: #222;
  }

  .top {
    position: relative;
    height: 230px;
    // background-size: contain;
    // border-radius: 0 0 80px/40px 80px;
    background: linear-gradient(to right, #322f2a, #64615c);
    border-bottom-left-radius: 160px 20px;
    border-bottom-right-radius: 160px 20px;

    .explain {
      position: absolute;
      right: 0;
      top: 30px;
      color: #eabe94;
      border-radius: 20px 0 0 20px;
      background-color: #fff;
      padding: 3px 10px;
      font-size: 14px;
    }

    .num {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .iconfont {
        font-size: 20px;
        color: #d8b87b;
      }

      .text {
        font-size: 40px;
        font-weight: 700;
        color: #d8b87b;
      }
    }

    .today {
      position: absolute;
      left: 20px;
      bottom: 30px;
      color: #fff;

      span {
        font-weight: 700;
        padding-left: 6px;
      }
    }
  }

  .integral_list {
    padding: 12px;

    .item {
      margin-bottom: 16px;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

      .title {
        padding: 15px;
        background-color: #fff;
        font-weight: 700;
        border-bottom: 1px solid #eee;
      }

      .btn {
        width: 72px;
        display: inline-block;
        // height: 28px;
        text-align: center;
        line-height: 28px;
        border-radius: 20px;
        color: #fff;
        background-color: #dbb77d;
      }
    }
  }

</style>
