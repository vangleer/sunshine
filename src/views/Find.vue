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

    <PullRefresh @refresh="handleRefresh">
      <!-- 轮播图 -->
      <div class="swipe_box">
        <van-swipe class="find_swipe" indicator-color="#f04130">
          <van-swipe-item>
            <img src="../assets/images/study1.jpg" alt="" />
          </van-swipe-item>
          <van-swipe-item><img src="../assets/images/study2.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="../assets/images/study3.png" alt="" /></van-swipe-item>
        </van-swipe>
      </div>

      <!-- 导航链接 -->
      <div class="nav_link flex_bea">
        <div class="link topic flex_bea" @click="$router.push('/topic')">
          <div class="icon flex_center">
            <span class="iconfont icon-huati"></span>
          </div>
          <div class="text">话题</div>
        </div>
        <div class="link primer flex_bea" @click="$router.push('/introduction')">
          <div class="icon flex_center">
            <span class="iconfont icon-gongandunpai"></span>
          </div>
          <div class="text">入门</div>
        </div>
        <div class="link vocabulary flex_bea" @click="$router.push('/vocabulary')">
          <div class="icon flex_center">
            <span class="iconfont icon-adn"></span>
          </div>
          <div class="text">词汇</div>
        </div>
        <div class="link phrase flex_bea" @click="$router.push('/phrase')">
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
          <div @click="$router.push('/topic')" class="btn">全部话题</div>
        </div>
        <div class="bom">
          <!-- 练习主题 -->
          <div class="top flex_bea">
            <p>地道表达</p>
            <span @click="handleCollectClick(todayTask)" class="iconfont"
              :class="todayTask.isCollect?'icon-shoucang1':'icon-shoucang'"></span>
          </div>
          <!-- 练习内容 -->
          <div class="title">
            <span class="tag">#</span>
            <span class="text van-multi-ellipsis--l2">练一练: {{ todayTask.name }}</span>
          </div>
          <!-- 练习数据 -->
          <div class="num">
            <span>{{todayTask.play_num}}次播放</span>
            <span class="m">*</span>
            <span>{{todayTask.num}}人参与</span>
          </div>

          <!-- 练习样本 -->
          <div class="yangben">
            <div class="example flex_align">
              <img :src="img" v-for="(img,i) in todayTask.videos" :key="i" alt="" />
              <span class="text">
                有{{todayTask.videos&&todayTask.videos.length}}个实例
              </span>
            </div>
            <div class="btn" @click="handleGoDetail(todayTask)">立即打卡</div>
          </div>
        </div>
      </div>

      <!-- 推荐练习 -->
      <div class="practice">
        <div class="top_com flex_between">
          <span class="tit">推荐练习</span>
          <div class="btn" @click="getPracticeList"><span class="iconfont icon-share"></span> 换一批</div>
        </div>

        <!-- 练习列表 -->
        <div class="list">
          <div class="p_item" v-for="(item,index) in romList" :key="index">
            <div class="flex_bea practise_top">
              <div class="left flex_align">
                <div class="tag" :style="{backgroundColor:item.color}">{{item.tag}}</div>
                <div>
                  <span class="tit">{{item.name}}</span>
                  <!-- 练习数据 -->
                  <div class="num">
                    <span>{{item.play_num}}次播放</span>
                    <span class="m">*</span>
                    <span>{{item.num}}人参与</span>
                  </div>
                </div>
              </div>
              <div class="right flex_align">
                <span class="iconfont" :class="item.isCollect?'icon-shoucang1':'icon-shoucang'"
                  @click="handleCollectClick(item)"></span>
                <div class="btn_p" @click="handleGoDetail(item)">练习</div>
              </div>
            </div>
            <div class="example flex_align">
              <img :src="img" v-for="(img,i) in item.videos" :key="i" alt="" />
              <span class="text">
                有{{item.videos&&item.videos.length}}个实例
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 社区精选 -->
      <div class="community_select">
        <!-- 精选主题 -->
        <div class="top_com flex_between">
          <span class="tit">社区精选</span>
          <div class="btn" @click="$router.push('/community')">查看更多</div>
        </div>
        <div class="bom">
          <div class="b_item" v-for="(item,index) in selectList" :key="index">
            <!-- 视频组件 -->
            <div style="height: 130px;">
              <VideoBox :video="item" :isLove="false"></VideoBox>
            </div>
            <!-- 详情 -->
            <div class="info">
              <div class="tit topic">{{item.word}}</div>
              <div class="tool flex_bea">
                <p class="flex_align"><img class="icon" :src="item.photo" alt="" />
                  <span>{{item.name}}</span>
                </p>
                <p class="flex_align">
                  <span class="iconfont icon-xihuan"></span>
                  <span>{{item.love_num}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 猜你喜欢 -->
      <div class="you_like">
        <div class="top_com flex_between">
          <span class="tit">猜你喜欢</span>
        </div>
        <div class="l_item" v-for="(item,index) in likeList" :key="index">
          <div class="flex_bea practise_top">
            <div class="left flex_align">
              <div class="tag" :style="{backgroundColor:item.color}">{{item.tag}}</div>
              <div>
                <span class="tit">{{item.name}}</span>
                <!-- 练习数据 -->
                <div class="num">
                  <span>{{item.play_num}}次播放</span>
                  <span class="m">*</span>
                  <span>{{item.num}}人参与</span>
                </div>
              </div>
            </div>
            <div class="right flex_align">
              <div class="btn_p" @click="handleGoDetail(item)">练习</div>
            </div>
          </div>
          <div class="text_com">
            {{item.paragraph}}
            <!-- <span>全文</span> -->
          </div>
          <!-- 视频 -->
          <div class="play_box">
            <VideoBox :video="item" :isLove="false"></VideoBox>
          </div>

          <div class="owner flex_bea">
            <div class="icon">
              <img :src="item.photo" alt="" />
            </div>
            <div class="tool">
              <span class="iconfont icon-zhuanfa1" @click="handleShareClick(item)">{{item.share_num}}</span>
              <span class="iconfont icon-pinglun" @click="handleCommentClick(item)">{{item.comment_num}}</span>
              <span class="iconfont" :class="item.isLove?'icon-love':'icon-xihuan'"
                @click="handleLoveClick(item,index)">{{item.love_num}}</span>
              <span class="iconfont" :class="item.isCollect?'icon-shoucang1':'icon-shoucang'"
                @click="handleCollectClick(item)">{{item.collect}}</span>
            </div>
          </div>
        </div>
      </div>
    </PullRefresh>
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  import VideoBox from '../components/VideoBox.vue'
  export default {
    components: {
      'home-header': Header,
      VideoBox
    },
    data() {
      return {
        romList: [], // 推荐练习列表
        selectList: [], // 精选
        likeList: [], // 猜您喜欢
        todayTask: {}
      }
    },
    created() {
      this.getPracticeList()
      this.getComSelect()
      this.getListList()
      this.getTodayTask()
    },
    methods: {
      // 刷新功能
      handleRefresh() {
        this.getPracticeList()
        this.getComSelect()
        this.getListList()
        this.getTodayTask()
      },
      // 获取推荐练习列表
      async getPracticeList() {
        const res = await this.$http.fetch('/mock/romPractice')
        this.romList = res.data.data
      },
      // 获取精选列表
      async getComSelect() {
        const res = await this.$http.fetch('/mock/comSelect')
        this.selectList = res.data.data
      },
      // 获取猜您喜欢列表
      async getListList() {
        const res = await this.$http.fetch('/mock/youLike')
        this.likeList = res.data.data
      },
      // 点击分享
      handleShareClick(item) {},
      // 点击评论
      handleCommentClick(item) {},
      // 点击喜欢
      handleLoveClick(item) {
        item.isLove = !item.isLove
        item.isLove ? item.love_num++ : item.love_num--
      },
      // 点击收藏
      handleCollectClick(item) {
        const arr = JSON.parse(localStorage.getItem('collect_list'))
        item.isCollect = !item.isCollect
        item.isCollect ? item.collect++ : item.collect--
        if (item.isCollect) {
          arr.push(item)
          this.$toast({
            duration: 500,
            message: '收藏成功'
          })
        } else {
          arr.some((ele, index) => {
            if (ele.id === item.id) {
              arr.splice(index, 1)
              return true
            }
          })
        }
        localStorage.setItem('collect_list', JSON.stringify(arr))
      },
      // 获取今日任务数据
      async getTodayTask() {
        const res = await this.$http.fetch('/mock/todayTask')
        this.todayTask = res.data.data
      },
      // 去练习
      handleGoDetail(item) {
        // 将数据保存到localstorage中
        localStorage.setItem('topic_detail', JSON.stringify(item))
        // 跳转页面
        this.$router.push('/topicDetail')
      }
    }
  }

</script>

<style lang="less" scoped>
  .find {
    width: 100%;
    background-color: @grayBgColor;
  }

  .van-search {
    padding: 0 15px;

    .van-field {
      padding-left: 8px;
    }
  }

  // 轮播图
  .swipe_box {
    width: 100%;
    padding: 0 @padding12;
    border-radius: 10px;
    height: 150px;
    margin-top: @margin10;

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
        font-size: @textSize15;
        color: @blackCoor;
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
      background-color: @purpleColor;
      border-radius: 12px;
      color: #fff;

      .top {
        margin: 10px 0;

        p {
          font-size: 14px;
        }

        .iconfont {
          font-size: 26px;
          color: @yelColor;
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
          word-break: break-all;
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
          background-color: @themeColor1;
          color: #fff;
          border: 0;
        }
      }
    }
  }

  // 推荐练习
  .practice {
    padding: 0 @padding12;

    .iconfont {
      color: @deepColor;
    }

    .list {
      .p_item {
        width: 100%;
        height: 100px;
        padding: @padding12;
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
      justify-content: space-between;
      overflow: auto;
    }

    .b_item {
      position: relative;
      flex: none;
      width: 140px;
      height: 210px;
      margin-right: 12px;
      background-color: #fff;

      .info {
        padding: 0 6px 0;
      }

      .topic {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        margin-bottom: 10px;
      }

      .tool {
        position: absolute;
        width: 90%;
        bottom: 10px;
        font-size: 12px;
        color: @grayColor;

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
        margin-bottom: 10px;
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
            display: inline-block;
            font-size: 12px;
            width: 60px;
          }

          .iconfont::before {
            font-size: 26px;
            color: @deepColor;
          }

          .icon-shoucang::before {
            font-size: 23px;
          }

          .icon-shoucang1::before {
            color: @themeColor2;
          }

          .icon-love::before {
            color: @themeColor2;
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
    color: @blackCoor;
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
    background-color: @themeColor1;
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
      color: @blackCoor;
      margin-left: 8px;
    }
  }

  .practise_top {
    .right {
      .iconfont {
        font-size: @iconSize;
        color: @themeColor2;
        font-weight: 700;
        margin-right: 10px;
      }
    }

    .left {
      .tag {
        padding: 6px 10px;
        color: #fff;
      }
    }

    .num {
      margin: 0;
      color: @deepColor;
    }
  }

</style>
