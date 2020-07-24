<template>
  <div class="thank">
    <!-- 导航 -->
    <van-nav-bar @click-left="$router.back()" style="background-color: #50b5fd;" left-arrow :fixed="true">
      <template #title>
        <span style="color: #fff;">赞和感谢</span>
      </template>
      <template #left>
        <span class="iconfont icon-zuo" style="font-size: 22px;color: #fff;font-weight: 700;"></span>
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <PullRefresh @refresh="handleRefresh">
      <div class="content">
        <div v-show="!noMore" class="no_more">没有更多数据了</div>
        <div class="list">
          <div class="item" v-for="(item,index) in thankList" :key="index">
            <img :src="require('../assets/images/0'+item.img_num+'.png')" alt="">
            <div class="info">
              <div class="title">{{item.word}}</div>
              <p>评论数: {{item.comment_num}}</p>
              <p>热度: {{item.share_num}}</p>
            </div>
            <div class="btn" @click="$router.push('/playPage')">练习</div>
            <div class="tips">
              <span>{{item.nickname}}</span>
              <span class="num">点赞:{{item.love_num}}</span>
            </div>
          </div>
        </div>
      </div>
    </PullRefresh>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        thankList: []
      }
    },
    computed: {
      noMore() {
        return this.thankList.length
      }
    },
    created() {
      this.getLoveList()
    },
    methods: {
      async getLoveList() {
        const res = await this.$http.fetch('/mock/getLoveList')
        this.thankList = res.data.data
      },
      handleRefresh() {
        this.getLoveList()
      }
    }
  }

</script>

<style lang="less" scoped>
  .thank {
    width: 100%;

  }

  .list {
    width: 100%;

    img {
      width: 100%;
      height: 140px;
    }

    .item {
      position: relative;

      .info {
        position: absolute;
        top: 24px;
        left: 24px;
        color: #fff;

        .title {
          font-size: 18px;
          font-weight: 700;
        }

        p {
          margin-top: 6px;
          font-size: 14px;
        }
      }

      .tips {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        bottom: 27px;
        left: 0;
        font-size: 13px;
        padding: 0 0 0 17vw;

        .num {
          width: 33%;
        }
      }

      .btn {
        position: absolute;
        bottom: 64px;
        right: 28px;
        width: 60px;
        height: 28px;
        border-radius: 8px;

        border: 1px solid #fff;
        text-align: center;
        line-height: 27px;
        color: #fff;
        font-size: 14px;
      }
    }
  }

  .content {
    min-height: 100vh;
    margin-top: 46px;
    background-color: @grayBgColor;
  }

</style>
