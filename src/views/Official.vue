<template>
  <div class="comment">
    <!-- 导航 -->
    <van-nav-bar title="阳光英语官方" @click-left="$router.back()" left-arrow :fixed="true" />
    <!-- 内容 -->
    <PullRefresh @refresh="handleRefresh">
      <div class="content">
        <div class="box">
          <div class="title">
            <img class="logo" src="../assets/images/logo.jpg" alt="">
            <div class="tit">邀请好友, 双双“爆”积分啦！</div>
          </div>
          <div class="text" ref="myList">
            <div class="item" v-for="(item,index) in list2" :key="index">
              <p v-html="item.content">
              </p>
            </div>
            <span @click="handleUp" id="up" style="color: #5466b2;">{{text}}</span>
          </div>
          <p class="date">06-18</p>
        </div>
        <div class="no_more">没有更多了</div>
      </div>

    </PullRefresh>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            id: 1,
            content: '你还不知道【邀请积分】可以兑换即将到来的收费项目?<br />那真是亏了啊。。。快往下看'
          },
          {
            id: 2,
            content: '点击屏幕左上角你的头像-“我的积分”-“邀请积分”, 获取你的专属邀请码和邀请链接本月邀请成功可获得20积分哟!'
          },
          {
            id: 3,
            content: '飞流直下三千尺, 阳光英语爆积分。<br />近水楼台先得月, 积分兑换不用钱。'
          },
          {
            id: 4,
            content: '还在等什么, 快去邀请呀~'
          }
        ],
        list2: [],
        isUp: true,
        text: '...全文'
      }
    },
    computed: {
      noMore() {
        return this.list.length
      }
    },
    created() {
      this.list2 = this.list.filter(item => {
        return item.id <= 2
      })
    },
    mounted() {

    },
    methods: {
      handleRefresh() {},
      handleUp() {
        this.isUp = !this.isUp

        if (this.isUp) {
          this.text = '...全文'
          this.list2 = this.list.filter(item => {
            return item.id <= 2
          })
        } else {
          this.list2 = this.list
          this.text = '收起'
        }
      },
      handleUpClick() {

      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    min-height: 100vh;
    margin-top: 46px;
    background-color: @grayBgColor;

    .text {
      position: relative;
      padding: 0px 16px;
      color: #222;
      font-size: 15px;

      p {
        line-height: 23px;
      }
    }

    .box {
      background-color: #fff;
      padding-bottom: 10px;
    }

    .date {
      padding: 10px 26px;
      color: @deepColor;
    }
  }

  .title {
    display: flex;
    align-items: center;
    padding: 26px 12px 0;

    .tit {
      font-size: 16px;
    }

    .logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 12px;
    }
  }

  span#up {
    color: #5466b2;
  }

  #up {
    position: absolute;
    bottom: 0;
    right: 12px;
  }

</style>
