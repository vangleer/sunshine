<template>
  <div class="message pd_up">
    <!-- 头部导航 -->
    <home-header :searchStyle="{color:'#fff'}"><span class="tit">消息</span></home-header>
    <!-- 内容 -->
    <PullRefresh>
      <div class="content">
        这是内容
      </div>
    </PullRefresh>
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  import PullRefresh from '../components/PullRefresh'
  export default {
    components: {
      'home-header': Header,
      PullRefresh
    }
  }

</script>

<style lang="less" scoped>
  .tit {
    font-size: 18px;
  }

  .content {
    width: 100%;
    height: 100vh;
    background-color: red;
  }

</style>
