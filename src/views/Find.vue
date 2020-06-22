<template>
  <div class="find">
    <!-- 头部导航 -->
    <home-header :isSearch="false">
      <van-search v-model="value" shape="round" style="width: 80%;margin-top: 6px;" placeholder="搜索词汇/话题/用户">
        <template v-slot:left-icon>
          <span class="iconfont icon-search"></span>
        </template>
      </van-search>
    </home-header>
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  export default {
    components: {
      'home-header': Header
    }
  }

</script>

<style>

</style>
