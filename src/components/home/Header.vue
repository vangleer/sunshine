<template>
  <div class="header">
    <div class="avatar" is-link @click="showPopup">
      <van-circle
        v-model="currentRate"
        :rate="30"
        layer-color="#f04007"
        :stroke-width="90"
        size="46px"
      />
      <img src="../../assets/images/user.png" alt />
    </div>
    <div class="nav">
      <span
        :class="index===active?'active':''"
        v-for="(item,index) in navList"
        :key="item.id"
        @click="changeCurrent(index)"
      >{{item.title}}</span>
    </div>
    <div class="search" @click="goSearch">
      <span class="iconfont icon-search"></span>
    </div>
    <van-popup :style="{ height: '100%',width: '70%' }" position="left" v-model="show">
      <pop-user></pop-user>
    </van-popup>
  </div>
</template>

<script>
import PopUser from '../PopUser.vue'
export default {
  components: {
    'pop-user': PopUser
  },
  data() {
    return {
      currentRate: 50,
      active: 0,
      show: false,
      navList: [
        { id: 0, title: '发现' },
        { id: 1, title: '语境' },
        { id: 2, title: '社区' }
      ]
    }
  },
  methods: {
    changeCurrent(index) {
      this.active = index
    },
    showPopup() {
      this.show = true
    },
    goSearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less">
.header {
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  width: 100%;
  padding: 10px;
  .avatar {
    position: relative;
    width: 52px;
    height: 52px;
    img {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 11px;
      left: 3px;
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    flex: 1;
    margin: 0 12px;
    .active {
      &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 20px;
        height: 3px;
        border-radius: 6px;
        background-color: red;
        z-index: 2;
      }
    }
    span {
      position: relative;
      color: #fff;
      padding: 6px 0;
    }
  }
  .search {
    padding: 13px;
    width: 49px;
    height: 49px;

    .iconfont {
      font-size: 26px;
      color: #fff;
      margin-left: 6px;
    }
  }
  .van-circle {
    margin-top: 8px;
  }
}
</style>
