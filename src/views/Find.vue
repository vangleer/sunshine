<template>
  <!-- 精炼页面 -->
  <div class="find pd_up">
    <!-- 头部导航 -->
    <home-header :isSearch="false">
      <van-search @focus="$router.push('/search')" shape="round" style="width: 80%;margin-top: 6px;"
        placeholder="搜索词汇/话题/用户">
        <template v-slot:left-icon>
          <span class="iconfont icon-search"></span>
        </template>
      </van-search>
    </home-header>

    <!-- 录播图 -->
    <div class="swipe_box">
      <van-swipe class="find_swipe" indicator-color="#f04130">
        <van-swipe-item>
          <img src="../assets/images/study1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item><img src="../assets/images/study2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/images/study3.png" alt=""></van-swipe-item>
      </van-swipe>
    </div>

    <!-- 导航链接 -->
    <div class="nav_link flex_bea">
      <div class="link topic flex_bea">
        <div class="icon flex_center">
          <span class="iconfont icon-huati"></span>
        </div>
        <div class="text">话题</div>
      </div>
      <div class="link primer flex_bea">
        <div class="icon flex_center">
          <span class="iconfont icon-gongandunpai"></span>
        </div>
        <div class="text">入门</div>
      </div>
      <div class="link vocabulary flex_bea">
        <div class="icon flex_center">
          <span class="iconfont icon-adn"></span>
        </div>
        <div class="text">词汇</div>
      </div>
      <div class="link phrase flex_bea">
        <div class="icon flex_center">
          <span class="iconfont icon-shuxingliebiaoxiangqing2"></span>
        </div>
        <div class="text">短语</div>
      </div>
    </div>

    <!-- 今日任务 -->
    <div class="day_task">
      <div class="top_com flex_between">
        <span class="tit">今日任务</span>
        <div class="btn">全部话题</div>
      </div>
      <div class="bom">
        <!-- 练习主题 -->
        <div class="top flex_bea">
          <p>地道表达</p>
          <span class="iconfont icon-xihuan"></span>
        </div>
        <!-- 练习内容 -->
        <div class="title">
          <span class="tag">#</span>
          <span class="text">练一练:{{'there is the least I could do,but it was the most'}}</span>
        </div>
        <!-- 练习数据 -->
        <div class="num">
          <span>123456次播放</span>
          <span class="m">*</span>
          <span>7人参与</span>
        </div>

        <!-- 练习样本 -->
        <div class="yangben">
          <div class="example flex_align">
            <img src="../assets/images/user.jpg" alt="">
            <img src="../assets/images/user.jpg" alt="">
            <img src="../assets/images/user.jpg" alt="">
            <span class="text">
              有3个实例
            </span>
          </div>
          <div class="btn">立即打卡</div>
        </div>
      </div>
    </div>

    <!-- 推荐练习 -->
    <div class="practice">
      <div class="top_com flex_between">
        <span class="tit">推荐练习</span>
        <div class="btn">
          <span class="iconfont icon-share"></span> 换一批
        </div>
      </div>

      <!-- 练习列表 -->
      <div class="list">
        <div class="p_item" v-for="i in 4" :key="i">
          <div class="flex_bea practise_top">
            <div class="left flex_align">
              <div class="tag">词</div>
              <div>
                <span class="tit">大幂幂</span>
                <!-- 练习数据 -->
                <div class="num">
                  <span>123456次播放</span>
                  <span class="m">*</span>
                  <span>7人参与</span>
                </div>
              </div>
            </div>
            <div class="right flex_align">
              <span class="iconfont icon-xihuan"></span>
              <div class="btn_p">练习</div>
            </div>
          </div>
          <div class="example flex_align">
            <img src="../assets/images/user.jpg" alt="">
            <img src="../assets/images/user.jpg" alt="">
            <img src="../assets/images/user.jpg" alt="">
            <span class="text">
              有3个实例
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 社区精选 -->
    <div class="community_select">
      <!-- 精选主题 -->
      <div class="top_com flex_between">
        <span class="tit">精选主题</span>
        <div class="btn">差看更多</div>
      </div>
      <div class="wrapper" ref="comScroll">
        <div class="bom">
          <div class="b_item" v-for="i in 4" :key="i">
            <!-- 视频组件 -->
            <div style="height: 130px;">
              <VideoBox></VideoBox>
            </div>
            <!-- 详情 -->
            <div class="info">
              <div class="tit topic">english is an international language</div>
              <div class="tool flex_bea">
                <p class="flex_align"><img class="icon" src="../assets/images/user2.jpg" alt="">
                  <span>大幂幂~~</span></p>
                <p class="flex_align">
                  <span class="iconfont icon-xihuan"></span>
                  <span>12345</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 猜你喜欢 -->
    <div class="you_like">
      <div class="top_com flex_between">
        <span class="tit">今日任务</span>
        <div class="btn">全部话题</div>
      </div>
      <div class="l_item">
        <div class="flex_bea practise_top">
          <div class="left flex_align">
            <div class="tag">词</div>
            <div>
              <span class="tit">大幂幂</span>
              <!-- 练习数据 -->
              <div class="num">
                <span>123456次播放</span>
                <span class="m">*</span>
                <span>7人参与</span>
              </div>
            </div>
          </div>
          <div class="right flex_align">
            <span class="iconfont icon-xihuan"></span>
            <div class="btn_p">练习</div>
          </div>
        </div>
        <div class="text_com">
          asfdoihhhhdiasuhdddddddddddddddddddddddddddddddddddddddasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaiasdsadasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <!-- <span>全文</span> -->
        </div>
        <!-- 视频 -->
        <div class="play_box">
          <VideoBox></VideoBox>
        </div>

        <div class="owner flex_bea">
          <div class="icon">
            <img src="../assets/images/user2.jpg" alt="">
          </div>
          <div class="tool">
            <span class="iconfont icon-share">132</span>
            <span class="iconfont icon-pinglun">12</span>
            <span class="iconfont icon-aixin">456</span>
            <span class="iconfont icon-aixin">789</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../components/home/Header'
  import VideoBox from '../components/VideoBox.vue'
  import BScroll from 'better-scroll'
  export default {
    components: {
      'home-header': Header,
      VideoBox
    },
    data() {
      return {
        comScroll: null
      }
    },
    mounted() {
      this.comScroll = new BScroll(this.$refs.comScroll, {
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    }
  }

</script>

<style lang="less" scoped>
  .find {
    width: 100%;
    background-color: #f9f9f9;

  }

  // 轮播图
  .swipe_box {
    width: 100%;
    padding: 0 12px;
    border-radius: 10px;
    height: 150px;
    margin-top: 10px;

    .find_swipe {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;

    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  // 导航链接
  .nav_link {
    margin-top: 11px;

    .link {
      width: 25%;
      height: 80px;
      flex-direction: column;

      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        .iconfont {
          font-size: 25px;
          color: #fff;
        }
      }

      .text {
        font-size: 15px;
        color: #222;
      }
    }

    .topic .icon {
      background-color: #7456da;
      box-shadow: 0px 2px 8px rgba(100, 73, 241, 0.8);
    }

    .primer .icon {
      background-color: #88b12d;
      box-shadow: 0px 2px 8px rgba(136, 177, 45, 0.8);

      .iconfont {
        font-size: 28px;
      }
    }

    .vocabulary .icon {
      background-color: #fd682e;
      box-shadow: 0px 2px 8px rgba(253, 144, 46, 0.8);
    }

    .phrase .icon {
      background-color: #fea12a;
      box-shadow: 0px 2px 8px rgba(245, 161, 42, 0.8);

      .iconfont {
        font-size: 21px;
      }
    }

  }

  // 今日任务
  .day_task {
    width: 100%;
    padding: 12px;

    .bom {
      width: 100%;
      height: 260px;
      padding: 12px;
      background-color: #7895cd;
      border-radius: 12px;
      color: #fff;

      .top {
        margin: 10px 0;

        p {
          font-size: 14px;
        }

        .iconfont {
          font-size: 26px;
          color: #fa9721;
          font-weight: 700;
        }
      }

      .title {
        display: flex;

        .tag {
          height: 22px;
          margin-top: 3px;
        }

        .text {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }
      }

      .yangben {
        width: 100%;
        height: 100px;
        border-radius: 8px;
        background-color: #fff;
        padding: 16px;

        .btn {
          width: 160px;
          margin: 16px auto;
          background-color: #f07043;
          color: #fff;
          border: 0;
        }
      }
    }
  }

  // 推荐练习
  .practice {
    padding: 0 12px;

    .iconfont {
      color: #8a8989;
    }

    .list {
      .p_item {
        width: 100%;
        height: 100px;
        padding: 12px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 12px;

        .example {
          margin-top: 10px;
        }
      }
    }
  }

  // 精选主题
  .community_select {
    padding: 12px;
    overflow: hidden;

    .bom {
      display: flex;
      width: calc(148px*4);
      justify-content: space-between;
      overflow: scroll;
    }

    .b_item {
      width: 140px;
      background-color: #fff;

      .info {
        padding: 0 6px 12px;
      }

      .topic {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .tool {
        font-size: 12px;
        color: #bab8b8;

        .icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 4px;
        }
      }
    }
  }

  // 猜你喜欢
  .you_like {
    padding: 0 12px;

    .l_item {
      background-color: #fff;
      padding: 10px;
      border-radius: 6px;

      .text_com {
        margin-top: 10px;
        width: 100%;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 15px;
        line-height: 20px;
      }

      .play_box {
        height: 300px;
      }

      .owner {
        margin-top: 10px;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .tool {
          span {
            font-size: 12px;
            padding: 0 6px;
          }

          .iconfont::before {
            font-size: 26px;
          }
        }
      }
    }
  }

  // find页面公共样式

  .top_com {
    padding: 12px 0;

    .tit {
      font-size: 18px;
    }
  }

  .btn {
    padding: 6px 12px;
    border-radius: 18px;
    border: 1px solid #949494;
    font-size: 14px;
    font-weight: bold;
    color: #2e2d32;
    text-align: center;
  }

  .num {
    font-size: 13px;
    margin: 10px 0;

    .m {
      margin: 0 6px;
      // line-height: 26px;
    }
  }

  .btn_p {
    padding: 4px 16px;
    border-radius: 26px;
    background-color: #f06b40;
    color: #fff;
    font-weight: 700;

  }

  .example {
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-left: -3px;
    }

    .text {
      color: #222;
      margin-left: 8px;
    }
  }

  .practise_top {
    .right {
      .iconfont {
        font-size: 26px;
        color: #f06b40;
        font-weight: 700;
        margin-right: 10px;
      }
    }

    .left {
      .tag {
        padding: 6px 10px;
      }
    }

    .num {
      margin: 0;
      color: #848487;
    }
  }

</style>
