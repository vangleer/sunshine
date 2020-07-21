<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar class="nav_bar" :class="showNav?'normal_nav':'scroll_nav'" :fixed="true" :border="false">
      <template #title>
        <h2>我的</h2>
      </template>
      <template #left>
        <span class="iconfont icon-zuo" @click="$router.back()"></span>
      </template>
    </van-nav-bar>
    <div class="page_scroll" ref="pageScroll">
      <div class="user_page" :style="{backgroundImage:'url('+bgImg+')'}">
        <div class="user_box" ref="userBox">
          <div class="top">
            <!-- 用户个人信息 -->
            <div class="flex_align">
              <div class="user_icon flex_center">
                <img v-if="userInfo.icon" :src="userInfo.icon" alt="">
                <span v-else class="iconfont icon-user"></span>
              </div>
              <div class="info">
                <span class="tit">{{userInfo.nickname}}</span>
                <div class="hobby">{{userInfo.signature}}</div>
              </div>
            </div>
            <!-- 获赞详情 -->
            <div class="honor flex_align">
              <div><span class="tit">{{userInfo.thank_num}}</span>获感谢</div>
              <div><span class="tit">{{userInfo.awarded_num}}</span>获赞</div>
              <div><span class="tit">{{userInfo.fans_num}}</span>关注</div>
              <div><span class="tit">{{20}}</span>粉丝</div>
            </div>

            <!-- 荣誉tag -->
            <div class="honor_tags flex_align">
              <div class="tag_p">勋章 {{userInfo.model}}</div>
              <div class="tag_r">听力经验值 {{userInfo.empirical_value}}</div>
              <div class="tag_y">口语练习{{userInfo.oral_num}}次</div>
            </div>
            <div class="goal">订个目标吧!<span class="iconfont icon-fankui"></span></div>
            <!-- 图表 -->
            <div class="chart_box">
              <div class="">已记录{{userInfo.record_days}}天</div>
              <div class="wrapper" ref="dateScroll">
                <div class="chart">
                  <div class="months">
                    <span>6月</span>
                    <span>5月</span>
                    <span>4月</span>
                    <span>3月</span>
                    <span>2月</span>
                    <span>1月</span>
                    <span>12月</span>
                    <span>11月</span>
                  </div>
                  <div class="box">
                    <div class="flex_align" v-for="index in 40" :key="index">
                      <span></span>
                      <span class="active"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="left flex_align">
                    <span>一</span>
                    <span>三</span>
                    <span>五</span>
                    <span>日</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 图例说明 -->
            <div class="explain flex_bea">
              <span>图例说明</span><span class="iconfont icon-you"></span>
            </div>
          </div>
          <van-tabs v-model="activeTab">
            <van-tab title="动态">
              <div class="dy_list" v-show="activeTab===0">
                <div class="d_item" v-for="(item,index) in activeList" :key="index">
                  <div class="item_t">
                    <span class="tit">{{item.month}}月</span>
                    <span>{{item.day}}日</span>
                  </div>
                  <div class="item_bom flex_align">
                    <div class="left"></div>
                    <div class="right">
                      <div class="tit">获得{{item.num}}输入经验值</div>
                      <div class="desc">解锁新成就: 打卡{{item.daka_num}}天</div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab :title="'作品'+activeList.length">
              <div class="dy_list" v-show="activeTab===1">
                <div class="d_item" v-for="index in 7" :key="index">
                  123456
                </div>
              </div>
            </van-tab>
          </van-tabs>
          <!-- 作品轮播图 -->
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        tabList: [{
          name: '动态'
        }, {
          name: '作品'
        }],
        bgImg: require('../assets/images/bg3.jpg'),
        scroll: null,
        pageScroll: null,
        activeTab: 0,
        scrollTop: 0,
        showNav: true,
        userHeight: 0,
        tabHeight: 0,
        navHeight: 0,
        tabBoxStyle: {},
        activeList: []
      }
    },
    activated() {
      this.getActiveList()
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted() {
      this.$nextTick(() => {
        this.comScroll = new BScroll(this.$refs.dateScroll, {
          scrollX: true,
          scrollY: false,
          bounce: false,
          eventPassthrough: 'vertical'
        })
        this.pageScroll = new BScroll(this.$refs.pageScroll, {
          click: true,
          bounce: false,
          probeType: 3
        })
        this.pageScroll.on('scroll', (e) => {
          const top = parseInt(e.y)
          console.log(top)
          if (top >= -160) {
            this.showNav = true
          } else {
            this.showNav = false
          }
        })
      })
    },
    methods: {
      // 获取动态
      async getActiveList() {
        const res = await this.$http.fetch('/mock/getActiveList')
        this.activeList = res.data.data
        console.log(this.activeList)
      }
    }
  }

</script>

<style lang="less" scoped>
  .page_scroll {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: @grayBgColor;
  }

  .user_page {
    position: relative;
    padding-top: 150px;
    width: 100%;
    background-repeat: no-repeat;
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
      font-size: 22px;
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

  .chart_box {
    touch-action: none;
  }

  .user_box {
    // position: relative;

    width: 100%;
    height: 75%;
    background-color: #fff;
    border-radius: 13px 13px 0 0;
  }

  .top {
    font-size: 13px;
    color: #6d6d6d;
    padding: 15px;

    .info {
      font-size: 13px;
      margin-left: 10px;

      .tit {
        font-size: 18px;
        // margin-bottom: 16rpx;
      }

      .hobby {
        margin-top: 12px;
        color: #222;
      }
    }
  }

  .user_icon {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #eee9ef;

    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }

    .iconfont {
      color: #fff;
      font-size: 40px;
    }
  }

  .honor {
    height: 40px;

    .tit {
      margin-right: 4px;
    }

    div {
      margin-right: 15px;
    }
  }

  .honor_tags {
    div {
      padding: 3px 8px;
      border-radius: 5px;
      font-weight: 700;
      margin-right: 10px;
    }

    .tag_r {
      color: #e46a53;
      background-color: #ffe6e9;
    }

    .tag_y {
      color: #f1c400;
      background-color: #fcf7d7;
    }

    .tag_p {
      color: #4830aa;
      background-color: #e3dff6;
    }
  }

  .goal {
    margin: 15px 0;
    font-size: 16px;
    color: #222;
    font-weight: 700;

    .iconfont {
      color: #fef399;
      margin-left: 8px;
    }
  }

  .chart {
    position: relative;
    width: 180vw;
    height: 160px;
    margin-top: 25px;

    .left {
      left: 0;
      top: 25px;
      position: absolute;
      flex-direction: column;
      font-size: 11px;
      width: 20px;

      span {
        height: 32px;
      }
    }

    .months {
      display: flex;
      position: absolute;
      top: 0;
      left: 25px;

      span {
        font-size: 11px;
        color: #bababa;
        width: 72px;
      }
    }

    .box {
      display: flex;
      position: absolute;
      top: 25px;
      left: 25px;
      width: 250px;

      div {
        flex-direction: column;
        margin-right: 2px;
        width: 13px;

        span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #fff1f0;
          margin: 3px;
        }

        .active {
          background-color: #fb613b;
        }
      }
    }
  }

  .wrapper {
    width: 100%;
  }

  .explain {
    width: 90px;
    color: #fff;
    border-radius: 4px;
    padding: 1px 8px;
    background-color: #ffbd21;

    .iconfont {
      font-size: 10rpx;
      margin-top: 1rpx;
    }
  }

  .tab_box {
    margin-top: 10px;
    border-top: 10px solid #fafafa;
    background-color: #fff;
    width: 100%;
    z-index: 1000,
  }

  .work_swipe {
    width: 100%;
  }

  .dy_list {
    padding: 15px;
    background-color: #fafafa;

    .d_item {
      width: 100%;
      margin-top: 8px;

      .item_t {
        font-size: 14px;
        color: #222;
        font-weight: 700;

        .tit {
          font-size: 20px;
          margin-right: 8px;
        }
      }

      .item_bom {
        position: relative;
        margin-top: 8px;

        .right {
          // height: 180rpx;
          width: 96%;
          padding: 10px;
          background-color: #fff;
          border-radius: 8px;
          margin-left: 25px;

          .desc {
            font-size: 13px;
            color: #39383d;
            margin-top: 4px;
          }

          &::after {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 5px;
            height: 5px;
            background-color: #fff;
            border-radius: 50%;
            border: 3px solid #f2c039;
          }

          &::before {
            position: absolute;
            top: 0;
            left: 5px;
            content: '';
            width: 2px;
            height: 100%;
            background-color: #e5e5e5;
          }
        }

      }
    }
  }

</style>
