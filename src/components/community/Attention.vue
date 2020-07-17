<template>
  <div class="attention_box">

    <MyScroll @finishPullUp="handleFinishPullUp" @finishPullDown="handleFinishPullDown">
      <!-- 如果没有数据 -->
      <div class="no_more" v-if="lovelist.length<0">快去社区中关注几个努力的大神吧!</div>
      <!-- 有数据 -->
      <div class="list">
        <div class="item" v-for="(item,index) in lovelist" :key="index">
          <!-- 用户信息 -->
          <div class="user flex_align">
            <div class="user_icon">
              <img src="../../assets/images/user2.jpg" />
            </div>
            <div class="username tit">{{item.name}}</div>
          </div>
          <!-- 个人特长 -->
          <div class="skill">
            <span>#模仿#</span>{{item.title}}
          </div>

          <!-- 视频 信息-->
          <div class="play_box">
            <!-- 视频 -->
            <VideoBox :video="item"></VideoBox>
            <!-- 工具条 -->
            <div class="tool_box">
              <div class="flex_bea">
                <div class="time">{{item.add_time}}小时前</div>
                <div class="tools flex_bea">
                  <div class="flex_align">
                    <span class="iconfont icon-share"></span>
                    分享
                  </div>
                  <div class="flex_align">
                    <span class="iconfont icon-pinglun"></span>
                    评论
                  </div>
                  <div class="flex_align">
                    <span class="iconfont" :class="!item.isLove?'icon-aixin':'icon-love'"
                      @click.stop="handleLoveClick(item)"></span>
                    点赞
                  </div>
                </div>
              </div>
              <div class="num">{{item.love_num}}人赞过</div>
            </div>

            <!-- 评论区 -->
            <div class="comment">
              <div class="look_com">查看{{item.comment_num}}条评论</div>
              <div class="input_box">
                <span class="iconfont icon-fankui"></span>
                <input v-model="item.commentText" @keyup.enter="sendComment(item)" type="text"
                  placeholder="看了有啥想说的,写下来吧 !" placeholder-style="color:#c6c4c4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyScroll>

  </div>
</template>

<script>
  import VideoBox from '../VideoBox'
  import MyScroll from './Scroll'
  export default {
    components: {
      VideoBox,
      MyScroll
    },
    data() {
      return {
        lovelist: [],
        inputText: ''
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const res = await this.$http.fetch('/mock/attentionList')
        this.lovelist = res.data.data
      },
      // 上拉加载
      handleFinishPullUp() {
        this.getList()
      },
      // 下拉刷新
      async handleFinishPullDown() {
        const res = await this.$http.fetch('/mock/attentionList')
        this.lovelist = [...res.data.data, ...this.lovelist]
      },
      handleLoveClick(item) {
        item.isLove = !item.isLove
        if (item.isLove) {
          item.love_num++
        } else {
          item.love_num--
        }
      },
      sendComment(item) {
        item.comment_num++
        item.commentText = ''
      }
    }
  }

</script>

<style lang="less" scoped>
  .no_more {
    font-size: @textSize15;
    color: @deepColor;
    text-align: center;
    padding-top: 150px;
  }

  .list {
    width: 100%;
    padding-bottom: 20px;

    .item {
      width: 100%;
      padding: 15px;
      background-color: @whiteColor;
      margin-top: 10px;

      .user {
        // width: 80rpx;
        height: 40px;

        .user_icon {
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        .username {
          margin-left: @margin10;
        }
      }

      .skill {
        font-size: @textSize15;
        color: @blackCoor;
        margin-top: @margin10;

        span {
          color: @yelColor;
          margin-right: 5px;
        }
      }
    }
  }

  .play_box {
    font-size: @textSize14;

    .v_item {
      width: 100%;
      height: 330px;
      margin: @margin10 0;
    }

    .item_src {
      width: 100%;
    }

    .tool_box {
      margin-top: 20px;

      .flex_align {
        width: 100px;
      }

      .time {
        color: #a09fa4;
      }

      .tools {
        width: 55%;

        .iconfont {
          font-size: 21px;
          width: 21px;
          margin-right: 5px;
        }

        .icon-love {
          color: @themeColor2;
          font-size: 20px;
        }
      }
    }

    .num {
      color: #525659;
      padding: 8px 0;
      border-bottom: 1px solid @borderColor;
    }

    .comment {
      .look_com {
        color: @deepColor;
        margin: 8px 0;
      }

      .input_box {
        position: relative;
        width: 100%;
        height: 30px;

        input {
          box-sizing: border-box;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          background-color: @grayBgColor;
          font-size: 8px;
          padding-left: 30px;
        }

        .iconfont {
          position: absolute;
          top: 50%;
          left: 8px;
          transform: translateY(-40%);
          color: @grayColor;
        }
      }
    }
  }

</style>
