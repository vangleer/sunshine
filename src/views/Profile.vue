<template>
  <div class="profile">
    <van-nav-bar title="@我的" left-arrow @click-left="$router.back()" />
    <!-- 内容 -->
    <PullRefresh>
      <div class="content">
        <div v-show="!noMore" class="no_more">没有更多数据了</div>
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
    height: 100vh;
    background-color: @grayBgColor;
  }

</style>
