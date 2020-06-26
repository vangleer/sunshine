<template>
  <div class="thank">
    <!-- 导航 -->
      <van-nav-bar title="赞和感谢" @click-left="$router.back()"  left-arrow/>
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
      thankList: []
    }
  },
  computed: {
    noMore() {
      return this.thankList.length
    }
  }
}
</script>

<style lang="less" scoped>
.thank {
  // padding-top: 50px;
}
.content {
  height: 100vh;
  background-color: #fafafa;
}
</style>
