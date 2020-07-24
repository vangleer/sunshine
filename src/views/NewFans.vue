<template>
  <div class="new_fans">
    <!-- 导航 -->
    <van-nav-bar @click-left="$router.back()" style="background-color: #50b5fd;" left-arrow :fixed="true">
      <template #title>
        <span style="color: #fff;">新增粉丝</span>
      </template>
      <template #left>
        <span class="iconfont icon-zuo" style="font-size: 22px;color: #fff;font-weight: 700;"></span>
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <PullRefresh @refresh="handleRefresh">
      <div class="content">
        <div v-show="!noMore" class="no_more">没有更多了</div>
        <div class="list">
          <div class="item flex_bea" v-for="(item,index) in fanList" :key="index">
            <div class="info">
              <img class="icon" :src="item.icon" alt="">
              <div>
                <div class="tit">{{item.nickname}}</div>
                <p>{{item.word}}</p>
              </div>
            </div>
            <div class="btn">关注</div>
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
        fanList: []
      }
    },
    computed: {
      noMore() {
        return this.fanList.length
      }
    },
    created() {
      this.getFanList()
    },
    methods: {
      async getFanList() {
        const res = await this.$http.fetch('/mock/getfanList')
        this.fanList = res.data.data
        console.log(this.fanList)
      },
      handleRefresh() {
        this.getFanList()
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    min-height: 100vh;
    background-color: @grayBgColor;
    margin-top: 46px;
    padding-top: 1px;

    .list {
      width: 100%;
    }

    .item {
      width: 100%;

      .info {
        display: flex;
        align-items: center;

        .icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 8px;
        }

        .tit {
          font-size: 16px;
        }

        p {
          color: @deepColor;
          font-size: 14px;
        }
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 76px;
        height: 28px;
        border-radius: 6px;
        border: 1px solid @themeColor1;
        color: @themeColor1;
      }
    }
  }

</style>
