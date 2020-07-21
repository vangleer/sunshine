<template>
  <div class="play_mode">
    <!-- 头部导航 -->
    <van-nav-bar title="播放模式" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <!-- 内容 -->
    <div class="content">
      <div class="item" v-for="(item,index) in modeList" :key="index" @click="handleSelect(index)">
        <div class="title">
          <div class="dot" :class="index===active?'active':''"></div>
          <span>{{item.title}}</span>
        </div>
        <div class="bom">
          <p>{{item.content}}</p>
          <p class="info">{{item.tips}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1,
        modeList: [{
            id: 1,
            title: '默认模式',
            content: '(第二遍字幕自动打开,开关可调节)',
            tips: ''
          },
          {
            id: 2,
            title: '神人模式',
            content: '(第二遍字保持关闭,开关可调节)',
            tips: ''
          },
          {
            id: 3,
            title: '懒人模式',
            content: '(视频将自动以"无字幕-有字幕-无字幕",循环播放,开关不可调节)',
            tips: '省时省力,是个不错的选择哟'
          }
        ]
      }
    },
    methods: {
      handleSelect(index) {
        // 将用户选择的播放模式保存到本地
        localStorage.setItem('play_mode', JSON.stringify(this.modeList[index]))
        this.active = index
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    height: 100vh;
    background-color: @grayBgColor;
    padding-top: 1px;
  }

  .item {
    padding: 16px;

    .title {
      display: flex;

      .dot {
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        border: 3px solid @themeColor2;
        margin-top: 3px;
        margin-right: 20px;
        opacity: 0.5;
      }

      .active {
        opacity: 1;
      }
    }

    .bom {
      padding-left: 30px;

      p {
        margin-top: 8px;
        color: @lightBlack;
        font-size: @textSize15;
      }

      .info {
        font-size: @textSize13;
        color: @grayColor;
      }
    }
  }

</style>
