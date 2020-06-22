<template>
  <div class="message">
    <!-- 头部导航 -->
    <home-header :searchStyle="{color:'#fff'}"><span class="tit">消息</span></home-header>
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
  .tit {
    font-size: 18px;
  }

</style>
