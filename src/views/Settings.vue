<template>
  <div class="settings">
    <!-- 头部导航 -->
    <van-nav-bar title="系统设置" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <div class="content">
      <!-- 设置列表 -->
      <div class="list">
        <div class="item" @click="$router.push(item.path)" v-for="(item,index) in list" :key="index">
          <div class="tit">{{item.title}}</div>
          <div class="right">{{item.data}}
            <span class="iconfont icon-you"></span>
          </div>
        </div>
        <!-- 退出登录 -->
        <div class="item logout">退出登录</div>
      </div>

      <!-- 版本 -->
      <div class="version">
        <van-divider :style="{ color: '#222' }">当前版本v3.0</van-divider>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            id: 1,
            title: '个人资料',
            path: '/',
            data: ''
          },
          {
            id: 2,
            title: '账号信息',
            path: '/',
            data: ''
          },
          {
            id: 3,
            title: '什么是贡献者',
            path: '/',
            data: ''
          },
          {
            id: 4,
            title: '播放模式',
            path: '/',
            data: ''
          },
          {
            id: 5,
            title: '黑名单',
            path: '/',
            data: ''
          },
          {
            id: 6,
            title: '关于我们',
            path: '/',
            data: ''
          },
          {
            id: 7,
            title: '服务协议',
            path: '/',
            data: ''
          },
          {
            id: 8,
            title: '隐私条款',
            path: '/',
            data: ''
          },
          {
            id: 9,
            title: '清除缓存',
            path: '/',
            data: ''
          }
        ]
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    height: 93vh;
    padding-top: 12px;
    background-color: #f9f9f9;
  }

  .list {
    width: 100%;
    background-color: #fff;

    .item {
      display: flex;
      padding: 0 12px;
      height: 42px;
      justify-content: space-between;
      align-items: center;

      .tit {
        font-size: 15px;
      }

      .right {
        color: #9d9d9d;
      }
    }

    .logout {
      color: #ed4e33;
      font-weight: 700;
      border-top: 1px solid #eee;
      // padding-top: 16px;
      height: 56px;
    }
  }

</style>
