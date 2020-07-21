<template>
  <div class="account_data">
    <!-- 头部导航 -->
    <van-nav-bar title="账号信息" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <!-- 内容 -->
    <div class="content">
      <div class="title">账号信息</div>
      <div class="item">
        <van-cell title="阳光英语号" :value="userInfo.id" value-class="tit" />
        <van-cell title="手机号" :value="userInfo.mobile" value-class="tit" />
      </div>
      <div class="title">绑定社交账号</div>
      <div class="item">
        <van-cell title="微信" :value="userInfo.wechat" is-link />
        <van-cell title="QQ" :value="userInfo.qq" is-link />
        <van-cell @click="handleDelUser" title="注销账号" value="注销无法恢复,谨慎操作" is-link />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      handleDelUser() {
        console.log(this.userInfo.id)
        this.$dialog.confirm({
            title: '提示',
            message: `请再次确定,是否要注销该用户:${this.userInfo.mobile}`
          })
          .then(async () => {
            const res = await this.$http.fetch('/user/deleteUser?user_id=' + this.userInfo.id)
            if (res.status === 1) {
              this.$toast(res.msg)
              localStorage.removeItem('mobile')
            }
          })
          .catch(() => {
            // this.$toast('注销失败')
          })
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    height: 100vh;
    background-color: @grayBgColor;
    padding-top: 10px;
  }

  .title {
    padding: @padding12;
    // background-color: #fff;
    color: @deepColor;
  }

</style>
