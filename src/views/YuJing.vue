<template>
  <div class="yujing_page">
    <van-swipe @change="onChange" style="height: 100vh;" :show-indicators="false" vertical>
      <van-swipe-item v-for="(item,index) in list" :key="item.id">
        <div class="player" @click="play(index,item)">
          <!-- <img src="../assets/images/bg.jpg" alt /> -->
          <video :ref="'homeVideo-'+index" src="../assets/video/dance.mp4"></video>
        </div>
        <!-- 视频详情 -->
        <div class="play_detail">{{item.play_detail}}</div>
        <!-- 侧边导航 -->
        <aside-nav></aside-nav>
        <!-- 播放按钮 -->
        <div class="play_btn" @click.stop="play(index,item)">
          <span v-show="!item.isPlay" class="iconfont icon-bofang"></span>
        </div>
        <!-- 字幕查看 -->
        <div class="look_text" v-show="showText">
          <span>{{item.text}}</span>
        </div>
        <!-- 底部组件 -->
        <tab-bar :id="item.id" :numbers="item.numbers" @click.stop></tab-bar>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Tabbar from '../components/home/Tabbar.vue'
import AsideNav from '../components/home/AsideNav.vue'
export default {
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    list() {
      return this.$store.state.homeData.list
    },
    showText() {
      return this.$store.state.homeData.isShowText
    }
  },
  components: {
    'tab-bar': Tabbar,
    'aside-nav': AsideNav
  },
  mounted() {
  },
  methods: {
    onChange(index) {
      console.log(index)
      this.currentPage = index
    },
    play(index, item) {
      var homeVideo = 'homeVideo-' + index
      this.$store.commit('playClick', item.id)
      if (item.isPlay) {
        this.$refs[homeVideo][0].play()
      } else {
        this.$refs[homeVideo][0].pause()
      }
    }
  }
}
</script>
<style lang="less">
.yujing_page {
  height: 100vh;
  width: 100%;
  .player {
    width: 100%;
    height: 100vh;
    // img {
    //   width: 100%;
    //   height: 100vh;
    // }
    video {
      width: 100%;
      height: 100vh;
    }
  }
  .play_btn {
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    .iconfont {
      font-size: 60px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .play_detail {
    position: absolute;
    bottom: 120px;
    left: 10px;
    width: 66%;
    padding: 12px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: left;
    font-size: 15px;
    color: orangered;
    font-weight: 700;
  }
  // 显示字幕
  .look_text {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    text-align: center;
  }
}
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #f04007;
  line-height: 26px;
}
</style>
