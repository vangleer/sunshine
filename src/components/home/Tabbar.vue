<template>
  <div class="tabbar">
    <div class="user_icon">
      <img src="../../assets/images/logo.jpg" alt />
    </div>
    <div class="tab_nav">
      <div class="nav_item" :class="isLove?'love':''" @click="dianZhan">
        <span class="iconfont icon-love"></span>
        <p>{{numbers.loveNum}}</p>
      </div>
      <div class="nav_item">
        <img src="../../assets/images/comment.png" alt />
        <p>{{numbers.commentNum}}</p>
      </div>
      <div class="nav_item">
        <span class="iconfont icon-zhuanfa"></span>
        <p>{{numbers.shareNum}}</p>
      </div>
    </div>
    <div class="tab_play">
      <img src="../../assets/images/lushiping.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numbers: { type: Object, default() { return {} } },
    id: { type: Number, default: 1 }
  },
  data() {
    return {
      // 是否点赞
      isLove: false
    }
  },
  methods: {
    dianZhan() {
      const id = this.id
      this.isLove = !this.isLove
      if (this.isLove) {
        this.loveNum = this.loveNum + 1
        this.$store.commit('increaseLove', id)
      } else {
        this.$store.commit('decreaseLove', id)
        this.loveNum = this.loveNum - 1
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tabbar {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  height: 66px;
  bottom: 10px;
  left: 0;
  z-index: 2;
  line-height: 16px;
  .user_icon {
    width: 66px;
    height: 66px;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
  .tab_nav {
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin: 0 12px;
    .iconfont {
      font-size: 32px;
    }
    .nav_item {
      margin-top: 10px;
      width: 50px;
      img {
        width: 30px;
        margin-top: -8px;
      }
      p {
        width: 100%;
        padding-left: 24px;
        font-size: 10px;
        margin-top: -3px;
      }
    }
    .love {
      .iconfont {
        color: #f04007;
      }
    }
  }
  .tab_play {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 8px;
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
