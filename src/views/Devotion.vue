<template>
  <div class="devotion">
    <!-- 头部导航 -->
    <van-nav-bar title="什么是贡献者" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <div class="content">
      <div class="title">什么是贡献者?</div>
      <div class="desc">
        阳光英语社区的英语母语者来自世界各地, 各行各业。他们通过这种方式帮助别学习英语是非常好好玩和有意义的事情
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="less" scoped>
  .content {
    padding: 16px;
  }

  .title {
    font-size: @titleSize;
    font-weight: 700;
    color: @blackCoor;
  }

  .desc {
    margin-top: 16px;
    color: @blackCoor;
    font-size: @textSize15;
    line-height: 26px;
  }

</style>
