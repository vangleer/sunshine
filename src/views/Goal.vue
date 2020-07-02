<template>
  <div class="goal">
    <!-- 头部导航 -->
    <van-nav-bar title="目标与数据" :border="false" :fixed="true" z-index="100" left-arrow @click-left="$router.back()" />

    <!-- 内容 -->
    <div class="content">
      <div class="top">
        <div class="flex_bea">
          <div class="user_icon flex_align">
            <div class="icon_box flex_center">
              <span class="iconfont icon-user"></span>
            </div>
            <div class="user_name tit">小通</div>
          </div>
          <div class="text">学习记录</div>
        </div>
        <div class="study flex_align">
          <div class="today">
            <p>
              8
              <span class="text">/分钟</span>
            </p>
            <span>今日学习</span>
          </div>
          <div class="today">
            <p>
              123
              <span class="text">分钟</span>
            </p>
            <span>总学习时长</span>
          </div>
        </div>
      </div>

      <!-- 当前级别 -->
      <div class="current">
        <div class="title">当前级别: 简单</div>
        <div class="item">
          <p>在本级别获取听力经验值达到320000</p>
          <van-progress :percentage="50" text-color="#222" color="#fb7e68" stroke-width="20" track-color="#fceaea" />
        </div>
        <div class="item">
          <p>在本级别进行各项口语练习累计300次</p>
          <van-progress :percentage="50" text-color="#222" color="#f77323" stroke-width="20" track-color="#f7f0dc" />
        </div>
      </div>
      <!-- 分项进度 -->
      <div class="inc">
        <div class="tit">分项进度</div>
        <div ref="scrollRef" class="wrapper">
          <div class="list">
            <div class="item flex_center" v-for="index in 3" :key="index">
              <van-circle v-model="currentRate" :rate="30" layer-color="#dcd6e5" />
              <p>打卡300个话题的口语练习</p>
              <div class="btn">去完成</div>
            </div>
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
        scroll: null,
        currentRate: 50
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scrollRef, {
        scrollX: true,
        scrollY: false,
        click: true,
        bounce: false
      })
    }
  }

</script>

<style lang="less" scoped>
  .goal {
    width: 100%;
    overflow: hidden;
    padding-top: 50px;
  }

  .content {
    background-color: @grayBgColor;
    padding: @padding12;
  }

  .top {
    background-color: #fff;
    border-radius: 10px;
    padding: @padding12;

    .icon_box {
      width: 50px;
      height: 50px;
      background-color: @grayBgColor;
      border-radius: 50%;
      border: 3px solid #ed4129;
      margin-right: 10px;

      .iconfont {
        color: #fff;
        font-size: 23px;
      }
    }
  }

  .study {
    position: relative;

    &::after {
      position: absolute;
      left: 50%;
      top: 60%;
      content: '';
      width: 2px;
      height: 16px;
      background-color: @grayColor;
    }

    margin-top: 16px;

    .today {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;

      p {
        font-size: 23px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
  }

  // 当前级别
  .current {
    .title {
      font-size: 17px;
      font-weight: 700;
      color: @blackCoor;
      padding: @padding12;
    }

    .item {
      padding: @padding12;

      p {
        margin: 16px 0;
      }
    }
  }

  .inc {
    width: 100%;
    overflow: scroll-x;
    background-color: @grayBgColor;
    padding: @padding12;

    .tit {
      font-size: 18px;
      padding: 16px 0;
    }

    .list {
      display: flex;
      width: 200%;

      // white-space: nowrap;
      .item {
        flex-direction: column;
        float: left;
        width: 220px;
        background-color: #fff;
        border-radius: 10px;
        height: 220px;
        margin-right: 12px;

        p {
          font-size: 13px;
          margin: 16px 0;
        }

        .btn {
          padding: 6px 16px;
          color: #fff;
          background-color: @themeColor2;
          border-radius: 40px;
        }
      }
    }
  }

</style>
