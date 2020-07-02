<template>
  <div class="account_data">
    <!-- 头部导航 -->
    <van-nav-bar title="账号信息"
                 :border="false"
                 style="background-color:rgba(0,0,0,0);"
                 left-arrow
                 @click-left="$router.back()" />

    <!-- 内容 -->
    <div class="content">
      <div class="title">账号信息</div>
      <div class="item">
        <van-cell title="阳光英语号"
                  value="545218974561545"
                  value-class="tit" />
        <van-cell title="手机号"
                  value="15282033704"
                  value-class="tit" />
      </div>
      <div class="title">绑定社交账号</div>
      <div class="item">
        <van-cell title="微信"
                  value="小通"
                  is-link />
        <van-cell title="QQ"
                  value="未绑定"
                  is-link />
        <van-cell title="注销账号"
                  value="注销无法恢复,请谨慎操作"
                  is-link />
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
  width: 100%;
  height: 100vh;
  background-color: @grayBgColor;
}

.title {
  padding: @padding12;
  // background-color: #fff;
  color: @deepColor;
}
</style>
