<template>
  <div class="achievments">
    <!-- 头部导航 -->
    <van-nav-bar title="勋章与成就" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <div class="info">
      <div class="top flex_bea">
        <div class="user_icon flex_center">
          <span class="iconfont icon-user"></span>
        </div>
        <div class="right">
          <h3 class="tit">勋章墙</h3>
          <div class="flex_align"><span class="iconfont icon-medal"></span>已获得勋章 <span class="num">7</span></div>
        </div>
      </div>
      <div class="bom flex_bea">
        <div class="item"><span>1253</span>累计口语练习次数</div>
        <div class="item"><span>1253</span>积累听力经验值</div>
      </div>
    </div>

    <!-- tab标签 -->
    <div class="tab_box">
      <div class="tab_list">
        <div :class="current===0?'active':''" @click="handleLinkClick(0)">成长勋章</div>
        <div :class="current===1?'active':''" @click="handleLinkClick(1)">级别勋章</div>
      </div>
      <div class="tab_content" ref="scrollRef">
        <div class="item" v-if="current===0">
          <div class="item_p flex_align" v-for="(item,index) in colors" :key="index">
            <span class="iconfont icon-shixianliubianxing" :style="{color:item}"></span>
            <div class="icon_box flex_center">
              <van-rate gutter="8px" :count="3" v-model="value" :size="6" color="#ee0a24" void-icon="star"
                void-color="#eee" />
              <p class="num">7</p>
              <p class="day">DAY</p>
            </div>
            <p class="text">啦啦啦啦</p>
          </div>
        </div>
        <div class="item" v-else>
          <div class="item_p flex_align" v-for="(item,index) in colors2" :key="index">
            <span class="iconfont icon-shixianliubianxing" :style="{color:item}"></span>
            <div class="icon_box flex_center">
              <van-rate gutter="8px" :count="3" v-model="value" :size="6" color="#ee0a24" void-icon="star"
                void-color="#eee" />
              <p class="num">7</p>
              <p class="day">DAY</p>
            </div>
            <p class="text">啦啦啦啦</p>
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
        current: 0,
        scroll: null,
        value: 2,
        colors: ['#9499f5', '#ecbea7', '#b5b9c2', '#dedede', '#9499f5', '#dedede', '#fa6048'],
        colors2: ['#9499f5', '#9499f5', '#ecbea7', '#b5b9c2', '#fa6048', '#dedede', '#dedede']
      }
    },
    methods: {
      handleLinkClick(index) {
        this.current = index
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scrollRef, {
          bounce: false,
          click: true,
          scrollY: true
        })
      })
    }
  }

</script>

<style lang="less" scoped>
  .achievments {
    background-color: #f8f8f8;
    width: 100%;
    height: 100vh;
    padding: 12px;
  }

  .info {

    .user_icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #eee9ef;

      .iconfont {
        font-size: 36px;
        color: #fff;
      }
    }

    .right {
      h3 {
        font-size: 26px;
        color: #3a3d46;
        text-align: center;
      }

      >div {
        color: #55595c;
        margin-top: 12px;

        .iconfont {
          font-size: 30px;
          color: #ffd777;
          font-weight: 700;
          padding-right: 12px;
        }

        .num {
          font-size: 30px;
          color: #ffd777;
          font-weight: 700;
          padding-left: 12px;
        }
      }
    }

    .bom {
      margin-top: 16px;

      .item {
        position: relative;
        width: 48%;
        height: 42px;
        border-radius: 42px;
        font-size: 12px;
        text-align: center;
        padding-left: 38px;
        line-height: 42px;
        background-color: #fff;

        span {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          top: 0;
          left: 0;
          min-width: 42px;
          height: 42px;
          border-radius: 42px;
        }
      }

      .item:nth-child(1) {
        color: #fa6048;

        span {
          background-color: #fa6048;

        }
      }

      .item:nth-child(2) {
        color: #fcc500;

        span {
          background-color: #fcc500;
        }
      }
    }
  }

  // tab标签页
  .tab_box {
    position: relative;
    width: 100%;
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid #eee;
    overflow: hidden;
    background-color: #fff;
    padding-top: 38px;
  }

  .tab_list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 38px;
    background-color: #fff;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 22px;
      background-color: #f5f5f5;
    }

    >div {
      position: relative;
      padding: 8px 0;
    }

    .active {
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 3px;
        border-radius: 3px;
        background-color: #e64727;
      }
    }
  }

  .tab_content {
    width: 100%;
    height: 420px;

    .item {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      padding: 12px;

      .item_p {
        position: relative;
        flex-direction: column;
        width: 30%;
        height: 120px;
        margin-bottom: 20px;

        .day {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }

        .text {
          margin-top: 16px;
          color: #222;
        }

        .iconfont {
          position: absolute;
          // top: 0;
          // left: 0;
          font-size: 96px;
        }

        .icon_box {
          padding-top: 16px;
          position: relative;
          width: 96px;
          height: 96px;
          flex-direction: column;

          .num {
            font-weight: 700;
            color: #fff;
            font-size: 18px;
            margin: 6px 0;
          }
        }
      }
    }
  }

</style>
