<template>
  <div class="topic_detail">
    <!-- 头部导航 -->
    <van-nav-bar class="nav_bar" :class="showNav?'normal_nav':'scroll_nav'" :fixed="true" :border="false">
      <template #title>
        <h2>{{showNav?'':itemInfo.name}}</h2>
      </template>
      <template #left>
        <span class="iconfont icon-zuo" @click="$router.back()"></span>
      </template>
      <template #right>
        <div v-show="!showNav" class="right_btn" style="margin-top: 8px;">收藏</div>
      </template>
    </van-nav-bar>
    <div class="top_title nav_top" v-show="showNavTop">样例视频</div>
    <div class="page_scroll" ref="pageScroll">
      <div class="user_page" :style="{backgroundImage:'url('+bgImg+')'}">
        <div class="content">
          <div class="title">
            <div class="flex_bea">
              <div class="left flex_align">
                <div class="tag" :style="{color: '#fff',backgroundColor:itemInfo.color}">{{itemInfo.tag}}</div>
                <div class="info">
                  <span class="tit">{{itemInfo.name}}</span>
                  <p>{{itemInfo.play_num}}次播放<span>*</span>{{itemInfo.num}}人参与</p>
                </div>
              </div>
              <div class="right_btn" @click="handleCollect">收藏</div>
            </div>
            <div class="detail" v-if="itemInfo.isDetail">
              <p class="tips" @click="$router.back()"><span class="btn">{{itemInfo.type}}</span>查看更多{{itemInfo.type}} >
              </p>
              <p class="hear">[{{itemInfo.symbol}}] <span class="iconfont icon-dengpao"></span></p>
              <p>翻译. {{itemInfo.interpret}}</p>
            </div>
          </div>

          <!-- 样式视频 -->
          <div class="sample_video">
            <div ref="topTitle" class="top_title">样例视频</div>
            <WaterFull ref="waterFill"></WaterFull>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import WaterFull from '../components/community/WaterFull'
  export default {
    components: {
      WaterFull
    },
    data() {
      return {
        tabList: [{
          name: '动态'
        }, {
          name: '作品'
        }],
        itemInfo: {},
        bgImg: require('../assets/images/bg3.jpg'),
        pageScroll: null,
        activeTab: 0,
        showNav: true,
        showNavTop: false,
        tabBoxStyle: {},
        waterList: [{
            cover: require('../assets/images/user.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 200
          },
          {
            cover: require('../assets/images/lun1.jpeg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 160
          },
          {
            cover: require('../assets/images/lun2.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 240
          },
          {
            cover: require('../assets/images/lun3.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 250
          },
          {
            cover: require('../assets/images/lun4.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 120
          },
          {
            cover: require('../assets/images/lun5.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 160
          },
          {
            cover: require('../assets/images/study1.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 200
          },
          {
            cover: require('../assets/images/study2.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 180
          },
          {
            cover: require('../assets/images/study3.png'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 220
          }
        ]
      }
    },
    activated() {
      this.itemInfo = JSON.parse(localStorage.getItem('topic_detail'))
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
          if (top >= -90) {
            this.showNav = true
          } else {
            this.showNav = false
          }
          if (top >= -175) {
            this.showNavTop = false
          } else {
            this.showNavTop = true
          }
        })

        this.$refs.waterFill.handleLoad(this.waterList)
      })
    },
    methods: {
      handleCollect() {
        // 从缓存中拿到收藏数组
        const arr = JSON.parse(localStorage.getItem('collect_list')) || []
        arr.push(this.itemInfo)
        // 在存进缓存中
        localStorage.setItem('collect_list', JSON.stringify(arr))
      }
    }
  }

</script>

<style lang="less" scoped>
  .page_scroll {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    background-color: @grayBgColor;
  }

  .right_btn {
    height: 26px;
    color: #fff;
    padding: 0 12px;
    font-size: 14px;
    background-color: @themeColor1;
    border-radius: 16px;
    line-height: 26px;
  }

  .nav_top {
    position: fixed;
    z-index: 100;
    top: 44px;
    left: 0;
    margin-top: 1px;
  }

  .top_title {
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    background-color: #fff;
    padding: 16px;

  }

  .user_page {
    position: relative;
    padding-top: 150px;
    width: 100%;
    // height: 1600px;
    background-repeat: no-repeat;
  }

  .content {
    position: relative;
    width: 100%;
    background-color: @grayBgColor;
    padding-top: 70px;

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

      .detail {
        padding-left: 31px;
        font-size: 13px;

        p {
          margin-top: 6px;
        }

        .tips {
          color: #c2c1c6;
        }

        .btn {
          padding: 0 8px;
          border-radius: 6px 0 6px 0;
          background-color: red;
          margin-right: 8px;
          color: #fff;
        }

        .hear {
          color: #222;
          font-weight: 700;
          font-size: 14px;

          .iconfont {
            font-size: 18px;
          }
        }
      }

    }

    .sample_video {
      width: 100%;
      margin-top: 20px;
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
