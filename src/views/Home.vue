<template>
  <div class="home">
    <!-- 首页头部 -->
    <home-header ref="homeHeader" @clickItem="handleItemClick"></home-header>
    <!-- 首页轮播 -->
    <van-swipe
      ref="homeSwiper"
      class="my-swipe"
      @change="handleChange"
      duration="1000"
      initial-swipe="1"
      :show-indicators="false"
    >
      <van-swipe-item>
        <home-find></home-find>
      </van-swipe-item>
      <van-swipe-item>
        <yu-jing></yu-jing>
      </van-swipe-item>
      <van-swipe-item>
        <home-community></home-community>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Header from '../components/home/Header.vue'
import YuJing from './YuJing.vue'
import Community from './Community.vue'
import Find from './Find.vue'
export default {
  components: {
    'home-header': Header,
    'yu-jing': YuJing,
    'home-community': Community,
    'home-find': Find
  },
  methods: {
    handleChange(index) {
      // 通过header的ref调用swiper组件的changeCurrent方法
      this.$refs.homeHeader.changeCurrent(index)
    },
    // 触发导航项点击事件接收index
    handleItemClick(index) {
      // 通过swiper的ref调用swiper组件的moveTo方法
      this.$refs.homeSwiper.swipeTo(index)
    }
  }
}
</script>
<style lang="less">
.home {
  height: 100vh;
  width: 100%;
}
</style>
