<template>
  <div class="topic_detail">
    <!-- 头部导航 -->
    <van-nav-bar class="nav_bar"
                 :class="showNav?'normal_nav':'scroll_nav'"
                 :fixed="true"
                 :border="false">
      <template #title>
        <h2>我的</h2>
      </template>
      <template #left>
        <span class="iconfont icon-zuo"
              @click="$router.back()"></span>
      </template>
    </van-nav-bar>
    <div class="page_scroll"
         ref="pageScroll">
      <div class="user_page"
           :style="{backgroundImage:'url('+bgImg+')'}">
        <div class="content">
          <div class="title flex_bea">
            <div class="left flex_align">
              <div class="tag"
                   style="color: #fff;">#</div>
              <div class="info">
                <span class="tit">男人的品质</span>
                <p>456次播放<span>*</span>7人参与</p>
              </div>
            </div>
            <div class="right">收藏</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      tabList: [{
        name: '动态'
      }, {
        name: '作品'
      }],
      bgImg: require('../assets/images/bg3.jpg'),
      pageScroll: null,
      activeTab: 0,
      showNav: true,
      tabBoxStyle: {}
    }
  },
  mounted () {
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
          this.showNav = true
        } else {
          this.showNav = false
        }
      })
    })
  },
  methods: {}
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
  height: 1600px;
  background-repeat: no-repeat;
}

.content {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: @grayBgColor;
  .title {
    position: absolute;
    top: 0;
    left: 50%;
    width: 94%;
    padding: 12px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    .info {
      .tit {
        font-size: 16px;
      }
      p {
        font-size: 14px;
        color: @deepColor;
        margin-top: 4px;
        span {
          padding: 0 6px;
        }
      }
    }
    .right {
      padding: 4px 12px;
      color: #fff;
      font-size: 14px;
      background-color: @themeColor1;
      border-radius: 16px;
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

.wrapper {
  width: 100%;
}
</style>
