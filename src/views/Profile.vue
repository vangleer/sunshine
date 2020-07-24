<template>
  <div class="profile">
    <van-nav-bar @click-left="$router.back()" style="background-color: #50b5fd;" left-arrow :fixed="true">
      <template #title>
        <span style="color: #fff;">@我的</span>
      </template>
      <template #left>
        <span class="iconfont icon-zuo" style="font-size: 22px;color: #fff;font-weight: 700;"></span>
      </template>
    </van-nav-bar>
    <!-- 内容 -->
    <PullRefresh>
      <div class="content">
        <div v-show="!noMore" class="no_more">没有更多了</div>
      </div>
    </PullRefresh>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myWorks: []
      }
    },
    computed: {
      noMore() {
        return this.myWorks.length
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    min-height: 100vh;
    margin-top: 46px;
    background-color: @grayBgColor;
  }

</style>
