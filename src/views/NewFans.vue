<template>
  <div class="new_fans">
    <!-- 头部导航 -->
      <van-nav-bar title="新增粉丝"  left-arrow @click-left="$router.back()"/>
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
      fansList: []
    }
  },
  computed: {
    noMore() {
      return this.fansList.length
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 100vh;
  background-color: #fafafa;
}
</style>
