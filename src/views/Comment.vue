<template>
  <div class="comment">
    <van-nav-bar title="评论/回复" @click-left="$router.back()" left-arrow />
    <!-- 内容 -->
    <PullRefresh @refresh="handleRefresh">
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
        comments: []
      }
    },
    computed: {
      noMore() {
        return this.comments.length
      }
    },
    methods: {
      handleRefresh() {
        console.log('刷新了')
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
