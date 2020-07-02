<template>
  <div class="about_us">
    <!-- 头部导航 -->
    <van-nav-bar title="关于我们" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <div class="content">
      <div class="title">关于我们</div>
      <div class="desc">
        阳光英语团队致力于为英语学习者搭建一个真正意义上的线上英语学习环境。在这里,来自全世界成千上万个英语母语者通过短视频,将他们生活的点点滴滴展现出来,让英语学习者置身其中,身临其境的感受到生活中最真实的英语。
      </div>

      <div class="desc">本产品所使用的语音技术由科大讯飞支持提供。</div>
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
