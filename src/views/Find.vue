<template>
  <div class="wrapper" ref="wrapper">
    <div class="find_page content">
      <!-- 轮播图 -->
      <div class="find_swiper">
        <van-swipe class="my-swipe">
          <van-swipe-item>
            <img src="../assets/images/find_pro1.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/find_pro2.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/find_pro3.jpg" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 导航 -->
      <div class="find_nav">
        <div class="find_nav_item" v-for="item in findNav" :key="item.id" @click="changeItem">
          <div>
            <img :src="item.imgSrc" alt />
          </div>
          <p>{{item.title}}</p>
        </div>
      </div>

      <!-- 推荐视频 -->
      <div class="find_recom">
        <!-- 最新视频推荐 -->
        <div class="recom_new">
          <h3>最新视频精选</h3>
          <div class="new_list">
            <div class="new_list_item play_item" v-for="item in findNew" :key="item.id">
              <img :src="item.imgSrc" alt />
              <div class="start">
                <i class="iconfont icon-bofang"></i>
              </div>
              <div class="zhan">
                <i class="iconfont icon-xihuan"></i>
                <span>{{item.loveNum}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 推荐用户 -->
        <div class="recom_user">
        <h2>来和这些贡献者互动吧</h2>
          <div class="user_wrapper" ref="userWrapper" @touchstart.stop>
            <ul class="content">
              <li v-for="item in findUsers" :key="item.id">
                <img class="user_icon" src="../assets/images/bg.jpg" alt />
                <div class="user_info">
                  <h4>{{item.name}}</h4>
                  <p>
                    <span>{{item.works}}个作品</span>
                    <span>{{item.fans}}粉丝</span>
                  </p>
                  <div class="guanzhu_btn">+ 关注</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 视频分类 -->
        <div class="play_cates">
          <div class="cate_item" v-for="item1 in findCates" :key="item1.id">
            <div class="cate_hd">
              <h4>{{item1.title}}</h4>
              <p>
                <span>查看更多</span>
                <i class="iconfont icon-you"></i>
              </p>
            </div>
            <div class="cate_bd">
              <div class="play_item" v-for="item2 in item1.list" :key="item2.id">
                <img :src="item2.src" alt />
                <div class="start">
                  <i class="iconfont icon-bofang"></i>
                </div>
                <div class="zhan">
                  <i class="iconfont icon-xihuan"></i>
                  <span>{{item2.love}}</span>
                </div>
              </div>
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
    return {}
  },
  computed: {
    findNav() {
      return this.$store.state.findData.nav
    },
    findNew() {
      return this.$store.state.findData.new
    },
    findUsers() {
      return this.$store.state.findData.users
    },
    findCates() {
      return this.$store.state.findData.cates
    }
  },
  methods: {
    userClick() {
      console.log('ok')
    },
    changeItem() {
      console.log('yes')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true, tap: true })
      this.scroll2 = new BScroll(this.$refs.userWrapper, { scrollX: true, scrollY: false })
    })
  }
}
</script>

<style lang="less">
.wrapper {
  height: 100vh;
}
.find_page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 80px;
  .find_swiper {
    width: 100%;
    height: 120px;
  }
  .van-swipe-item {
    width: 100%;
    background-color: #f5f5f5;
    text-align: center;
    img {
      width: 90%;
      height: 120px;
      border-radius: 6px;
    }
  }
  .find_nav {
    width: 100%;
    height: 120px;
    background-color: #f5f5f5;
    display: flex;
    color: #000;
    .find_nav_item {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f04007;
        padding-top: 10px;
        text-align: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
      p {
        font-size: 13px;
        margin-top: 8px;
      }
    }
    .find_nav_item:nth-child(2) > div {
      background-color: #08f53a;
    }
    .find_nav_item:nth-child(3) > div {
      background-color: #8308f5;
      > img {
        width: 25px;
      }
    }
  }
}
.find_recom {
  width: 100%;
  /* 最新推荐 */
  .recom_new {
    width: 100%;
    padding: 10px;
    h3 {
      color: #000;
      font-size: 14px;
      font-weight: 700;
      margin: 8px 0;
    }
    .new_list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // .new_list_item:nth-child(1) {}
      .new_list_item:nth-child(1) {
        width: 65%;
      }
    }
  }
  /* 用户推荐 */
  .recom_user {
    position: relative;
    width: 100%;
    height: 180px;
    margin-top: 12px;
    padding-left: 12px;
    background-color: #f5f5f5;
    h2 {
      margin-bottom: 18px;
      padding-top: 18px;
      font-size: 16px;
    }
    .user_wrapper {
      z-index: 9990;
      width: 100%;
    }
    ul {
      position: absolute;
      z-index: 9990;
      width: 200%;
      height: 120px;
      li {
        display: flex;
        float: left;
        padding: 12px;
        background-color: #fff;
        padding-right: 20px;
        margin-right:10px;
        border-radius: 6px;
        .user_icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .user_info {
          h4 {
            font-size: 14px;
          }
          p {
            color: #9c9a9d;
            font-size: 13px;
            span {
              margin-right: 5px;
            }
          }
          .guanzhu_btn {
            padding: 3px 12px;
            width: 80px;
            text-align: center;
            border-radius: 6px;
            background-color: red;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
          }
        }
      }
    }
  }
  .play_item {
    position: relative;
    width: 31.5%;
    height: 140px;
    margin-bottom: 10px;
    color: #fff;
    img {
      width: 100%;
      height: 140px;
      border-radius: 6px;
    }
    .start {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      .iconfont {
        font-size: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .zhan {
      position: absolute;
      left: 4px;
      bottom: 0px;
      .iconfont {
        font-size: 13px;
      }
      span {
        font-size: 13px;
        margin-left: 2px;
      }
    }
  }

  .play_cates {
    width: 100%;
    .cate_item {
      width: 100%;
      padding: 12px;
      margin-bottom: 12px;
      .cate_hd {
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        background-color: #fff;
        width: 100%;
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 13px;
          color: #9c9a9d;
        }
      }
      .cate_bd {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
