<template>
  <div class="v_item">
    <img class="item_src" src="../assets/images/user.jpg" />
    <div class="love">
      <span class="iconfont icon-xihuan"></span>
      <span class="num">{{video.tip}}</span>
    </div>
    <div class="play_btn flex_center">
      <span class="iconfont icon-bofang"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      video: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  // find页面的公共样式
  .v_item {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: @margin10;

    .item_src {
      width: 100%;
      height: 100%;
    }

    .play_btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);

      .iconfont {
        font-size: 10px;
        color: #fff;
      }
    }

    .love {
      position: absolute;
      width: 100%;
      bottom: 6px;
      left: 6px;
      color: #fff;
      height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;

      .iconfont {
        font-size: 14px;
      }

      .num {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 11px;
        margin-left: 4px;
        font-weight: normal;
      }
    }
  }

</style>
