<template>
  <div class="pop_user">
    <!-- 弹出层头部 -->
    <div class="pop_hd">
      <div class="user_icon">
        <van-circle
          v-model="currentRate"
          :rate="30"
          layer-color="#f04007"
          :stroke-width="100"
          size="60px"
        />
        <img src="../assets/images/user.png" alt />
      </div>
      <div class="user_name">小通</div>
      <div class="go_profile">
        <p>
          查看主页
          <span class="iconfont icon-you"></span>
        </p>
      </div>
      <div class="jilu">
        <p>听力经验值 2888</p>
        <p>口语练习0次</p>
      </div>
    </div>
    <!-- 弹出层中间部分 -->
    <div class="pop_bd">
      <div class="item items1">
        <p>
          <i class="iconfont icon-clock"></i>
          <span>目标与进度</span>
        </p>
        <p>
          <i class="iconfont icon-xunzhang"></i>
          <span>成就与勋章</span>
        </p>
        <p>
          <i class="iconfont icon-integral"></i>
          <span>我的积分</span>
        </p>
      </div>
      <div class="item items2">
        <p>
          <i class="iconfont icon-icon_xinyong_xianxing_jijin-"></i>
          <span>我的消息</span>
        </p>
        <p>
          <i class="iconfont icon-xihuan"></i>
          <span>我的收藏</span>
        </p>
      </div>
      <div class="item items3">
        <p>
          <i class="iconfont icon-icon_jiaohuan"></i>
          <span>难度调整</span>
        </p>
      </div>
    </div>
    <!-- 弹出层底部 -->

    <div class="pop_bt">
      <div>
        <i class="iconfont icon-shezhi"></i>
        <p>系统设置</p>
      </div>
      <div>
        <i class="iconfont icon-fankui"></i>
        <p>意见反馈</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 50
    }
  }
}
</script>
<style lang="less">
.pop_user {
  width: 100%;
  height: 100%;
  .pop_hd {
    position: relative;
    width: 100%;
    height: 140px;
    padding: 12px;
    .user_icon {
      margin-top: 12px;
      position: relative;
      width: 52px;
      height: 52px;
      img {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 13px;
        left: 5px;
      }
    }
    .user_name {
      position: absolute;
      top: 34px;
      left: 82px;
      font-size: 18px;
      font-weight: 700;
    }
    .go_profile {
      position: absolute;
      right: 12px;
      top: 70px;
      p {
        color: #ccc;
      }
    }
    .jilu {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      height: 24px;
      width: 100%;
      padding: 12px;
      p {
        height: 20px;
        padding: 8px 10px;
        border-radius: 5px;
        line-height: 3px;
        font-size: 13px;
      }
      p:nth-child(1) {
        background-color: #f4c5b9;
        color: #fd410e;
      }
      p:nth-child(2) {
        background-color: #faebbe;
        color: #f5b904;
      }
    }
  }
  .pop_bd {
    width: 100%;
    height: 300px;
    margin-top: 40px;
    padding-left: 30px;
    .item {
      margin-top: 46px;
      & > p {
        margin: 22px;
        display: flex;
        align-items: center;
        .iconfont {
          font-size: 26px;
        }
        span {
          display: inline-block;
          margin-left: 12px;
          font-size: 16px;
        }
      }
    }
  }
  .pop_bt {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px;
    & > div {
      text-align: center;
      .iconfont {
        font-size: 26px;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
}
</style>
