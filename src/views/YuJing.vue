<template>
  <div class="context">
    <!-- 头部导航 -->
    <home-header :active="0"></home-header>

    <!-- 轮播组件 -->
    <div class="yu_swiper">
      <van-swipe class="context_swiper" vertical height="100%" :show-indicators="false" @change="handleSwipe">
        <van-swipe-item class="swiper-item" v-for="(item,index) in list" :key="index">
          <!-- 视频标签 -->
          <!-- <img @click="handlePlayClick" class="swipe_img" :src="item.imgSrc" /> -->
          <video @click="handlePlayClick" class="swipe_img" :src="item.url"></video>
          <!-- 底部组件 -->
          <Tabbar :id="item.id" :numbers="{love:item.love_num,share:item.share_num,comment:item.comment_num}"
            :loves="item.love_ids" @shareClick="handleShare" @commentClick="handleComment">
          </Tabbar>
          <!-- 右边组件 -->
          <SideNav @showCaption="handleShowCaption"></SideNav>
          <!-- 字幕 -->
          <div class="centence" v-show="showCaption">
            {{item.content}}
          </div>
          <!-- 用户姓名和话题 -->
          <div class="conver_box">
            <div class="word flex_bea">
              <span class="tag" :style="{backgroundColor:item.color}">{{item.cate}}</span>{{item.description}}
            </div>
            <div class="conver">
              <div class="username">@ {{item.username}}</div>
              <div class="topic">{{item.description}}</div>
            </div>
          </div>
          <!-- 播放按钮 -->
          <div class="play_btn" v-show="isPlay" @click.stop="handlePlayClick">
            <span class="iconfont icon-bofang"></span>
          </div>
        </van-swipe-item>
      </van-swipe>

    </div>
    <!-- 分享面板 -->
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="shareOptions" @select="shareSelect" />
    <!-- 评论面板 -->
    <van-popup v-model="showComment" position="bottom" :style="{ height: '60%',borderRadius: '20px 20px 0 0'}">
      <div class="com_box">
        <div class="title">最新评论 {{commentList.length}}</div>
        <div class="item" v-for="(item,index) in commentList" :key="index">
          <div class="user flex_bea">
            <div class="flex_align">
              <img v-if="item.icon" src="../assets/images/user2.jpg" alt="">
              <div v-else class="icon_box"><span class="iconfont icon-user"></span></div>
              <div class="">
                <h3>{{item.nickname}}</h3>
                <p>{{item.add_time|datetime_ymd}}</p>
              </div>
            </div>
            <div class="flex_align tool">
              <span class="iconfont icon-pinglun"></span>
              <div class="flex_align">
                <span @click="handleLoveComClick(item.id,item.love_num+1)"
                  class="iconfont icon-iconfontzhizuobiaozhun44"><span
                    style="font-size: 20px;">{{item.love_num}}</span></span>
              </div>
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="content">
            <h3>评论内容</h3>
            <div class="txt">{{item.txt}}</div>
          </div>
        </div>
        <!-- 输入框 -->
        <div class="input_box flex_bea" v-if="showComment">
          <input @keydown.enter="sendComment" v-model="commentText" ref="commentRef" type="text"
            placeholder="说点什么, 让更多人记住你">
          <span @click="handleFocus" class="iconfont icon-keyboard"></span>
        </div>
      </div>
      <div v-if="commentList.length===0" class="none">暂无评论</div>
    </van-popup>

    <!-- <van-action-sheet v-model="showComment"
                      :actions="commentActions"
                      @select="commentSelect" /> -->
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  import Tabbar from '../components/home/Tabbar.vue'
  import SideNav from '../components/home/SideNav.vue'
  export default {
    components: {
      'home-header': Header,
      Tabbar,
      SideNav
    },
    data() {
      return {
        title: 'Hello',
        commentText: '',
        isPlay: true,
        currentPage: 0,
        pageInfo: {
          pageSize: 10,
          page: 1
        },
        currentId: 0,
        showComment: false,
        commentList: [],
        showShare: false,
        shareOptions: [
          [{
              name: '微信',
              icon: 'wechat'
            },
            {
              name: '微博',
              icon: 'weibo'
            },
            {
              name: 'QQ',
              icon: 'qq'
            }
          ],
          [{
              name: '复制链接',
              icon: 'link'
            },
            {
              name: '分享海报',
              icon: 'poster'
            },
            {
              name: '二维码',
              icon: 'qrcode'
            }
          ]
        ],
        showCaption: false,
        list: []
      }
    },
    activated() {},
    created() {
      this.getVideoList()
    },
    methods: {
      // 点击分享
      async handleComment(id) {
        this.currentId = id
        this.showComment = true
        if (!this.$store.state.userInfo.id) {
          return this.$router.push('/login')
        }
        this.getComments()
      },
      // 评论点赞
      async handleLoveComClick(id, num) {
        const res = await this.$http.post('/video/loveComment', {
          id: id,
          num: num
        })
        if (res.status !== 1) return
        this.getComments()
      },
      handleFocus() {
        this.$refs.commentRef.focus()
      },
      // 滑动事件
      handleSwipe(index) {
        // 记录当前页面索引
        this.currentPage = index
        // 初始播放按钮
        this.isPlay = true
        console.log(this.currentPage)
      },
      // 点击评论
      commentSelect(item) {
        // 默认情况下点击选项时不会自动收起
        // 可以通过 close-on-click-action 属性开启自动收起
        this.showComment = false
        this.$toast(item.name)
      },
      // 发送评论信息
      async sendComment() {
        console.log(this.commentText)
        if (this.commentText.trim().length === 0) {
          return
        }

        const res = await this.$http.post('/video/addComment', {
          id: this.currentId,
          user_id: this.$store.state.userInfo.id,
          content: this.commentText,
          comment_num: this.commentList.length + 1
        })
        console.log(res)
        if (res.status === 1) {
          this.getComments()
        }
      },
      async getComments() {
        const res2 = await this.$http.fetch('/video/getComments?id=' + this.currentId)
        if (res2.status === 0) return
        this.commentList = res2.data.reverse()
        this.commentText = ''
      },
      // 点击分享
      handleShare(id) {
        console.log(id)
        this.showShare = true
      },
      shareSelect(option) {
        const url = window.location.href
        this.$toast(`将:${url}\n分享到${option.name}`)
        this.showShare = false
      },
      // 获取视频列表
      async getVideoList() {
        const res = await this.$http.fetch('/video/getVideos', this.pageInfo)
        if (res.status === 0) return this.$toast.fail(res.msg)
        this.list = res.data
        console.log(res.data)
      },
      // 播放功能
      handlePlayClick(e) {
        this.isPlay = !this.isPlay
        const vos = document.querySelectorAll('.swiper-item .swipe_img')
        if (this.isPlay) {
          vos[this.currentPage].pause()
        } else {
          vos[this.currentPage].play()
        }
        console.log(vos)
      },
      // 是否显示字幕
      handleShowCaption(showCaption) {
        this.showCaption = showCaption
        console.log('yes')
      }
    }
  }

</script>

<style lang="less" scoped>
  .yu_swiper {
    width: 100vw;
    height: 100vh;
    padding-bottom: 50px;
  }

  .context {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #fff;
    font-size: 13px;
  }

  .context_swiper {
    width: 100%;
    height: 100%;

    .swiper-item {
      width: 100%;
      height: 100%;
      background-color: #242323;
    }

    .swipe_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .conver_box {
    position: absolute;
    bottom: 80px;
    left: 13px;
    width: 150px;
    height: 100px;

    .word {
      padding: 8px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.3);
    }

    .conver {
      margin-top: 13px;
      padding-left: 6px;

      .username {
        font-weight: 700;
        margin-bottom: 8px;
      }
    }
  }

  .centence {
    position: absolute;
    left: 50%;
    top: 55%;
    width: 180px;
    transform: translateX(-50%);
    text-align: center;
    line-height: 25px;
    font-size: 15px;
  }

  // 播放按钮
  .play_btn {
    position: absolute;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.7);

    .icon-bofang {
      font-size: 40px;
    }
  }

  .tabbar {
    position: absolute;
    padding: 0 8px;
    width: 100%;
    bottom: 10px;
    left: 0;
    z-index: 2;

    .user_icon {
      width: 50px;
      text-align: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .tab_nav {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;
      margin: 0 12px;

      .iconfont {
        font-size: 32px;
      }

      .nav_item {
        width: 50px;

        p {
          width: 100%;
          padding-left: 24px;
          font-size: 10px;
          margin-top: -6px;
        }
      }

      .love {
        .iconfont {
          color: @themeColor2;
        }
      }
    }

    .tab_play {
      display: flex;
      width: 50px;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        margin-top: 6px;
        font-size: @textSize13;
      }
    }
  }

</style>
