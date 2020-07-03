<template>
  <div class="tally_book">
    <MyScroll>
      <div class="list">
        <div class="item" v-for="index in 6" :key="index">
          <!-- 上面用户信息 -->
          <div class="top flex_align">
            <img class="icon" src="../../assets/images/user2.jpg" />
            <div class="name">
              <span class="tit">大裴裴</span>
              <span class="nic">的目标</span>
            </div>
          </div>
          <!-- 目标 -->
          <div class="goal tit">这是我的目标</div>
          <!-- 视频区 -->
          <div class="play_list">
            <div class="v_item" v-for="index2 in 4" :key="index2">
              <VideoBox></VideoBox>
            </div>
          </div>
          <!-- 口语练习和经验值 -->
          <div class="accumulated flex_align">
            <div class="kouyu">累计获取<span class="yellow_color">123</span>听力经验值</div>
            <div class="kouyu">口语练习<span class="yellow_color">123</span>次</div>
          </div>
        </div>
      </div>
    </MyScroll>
  </div>
</template>

<script>
  import VideoBox from '../VideoBox'
  import MyScroll from './Scroll'
  export default {
    components: {
      VideoBox,
      MyScroll
    },
    mounted() {

    },
    data() {
      return {
        bookScroll: null
      }
    }
  }

</script>

<style lang="less" scoped>
  .tally_book {
    width: 100%;

    .list {
      width: 100%;
      padding-bottom: 20px;
    }
  }

  .accumulated {
    margin-top: 10px;
  }

  .item {
    width: 100%;
    // height: 300rpx;
    background-color: #fff;
    margin-top: 10px;
    padding: 12px;

    .top {
      height: 50px;

      .icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .tit {
        margin: 0 10px;
      }

      .nic {
        font-size: 16px;
        color: #ffdb7c;
        font-weight: 700;
      }
    }

    .goal {
      margin: 8px 0;
    }

    .play_list {
      display: flex;
      width: 150%;
      background-color: #fff;

      .v_item {
        width: 80px;
        height: 110px;
        margin-right: 10px;
      }
    }

    .wrapper {
      width: 100vw;
      background-color: #fff;
    }

    .kouyu {
      font-size: 13px;
      color: #acabb2;
      margin-right: 10px;
    }
  }

</style>
