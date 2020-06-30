<template>
  <div class="pop_user">
    <!-- 弹出层头部 -->
    <div class="pop_hd">
      <div class="user_icon">
        <van-circle v-model="currentRate" :rate="30" layer-color="#f04007" :stroke-width="90" size="70px">
          <div class="icon_box">
            <span class="iconfont icon-user"></span>
          </div>
        </van-circle>
        <div class="user_name">小通</div>
      </div>
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
        <p @click="$router.push('/goal')">
          <i class="iconfont icon-shijianzhongbiao"></i>
          <span>目标与数据</span>
        </p>
        <p @click="$router.push('/adjustment')">
          <i class="iconfont icon-icon_jiaohuan"></i>
          <span>难度调整</span>
        </p>
      </div>
      <div class="item items2">
        <p @click="$router.push('/favorite')">
          <i class="iconfont icon-aixin"></i>
          <span>我的收藏</span>
        </p>
        <p @click="$router.push('/achievment')">
          <i class="iconfont icon-xunzhang1"></i>
          <span>成就与勋章</span>
        </p>
      </div>
      <div class="item items3">
        <p @click="$router.push('/intergral')">
          <i class="iconfont icon-integral"></i>
          <span>我的积分</span>
        </p>
        <p @click="$router.push('/invitefriends')">
          <i class="iconfont icon-tianjiajiahaoyoutianjiapengyou"></i>
          <span>邀请好友</span>
        </p>
      </div>
    </div>
    <!-- 弹出层底部 -->

    <div class="pop_bt">
      <div @click="$router.push('/settings')">
        <i class="iconfont icon-shezhi"></i>
        <p>系统设置</p>
      </div>
      <div @click="$router.push('/feedback')">
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
      height: 120px;
      padding: 12px;

      .user_icon {
        display: flex;

        .icon_box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #eee9ef;
        }

        .iconfont {
          font-size: 30px;
          line-height: 70px;
          color: #fff;
          // color: #fff;
        }
      }

      .user_name {
        font-size: 18px;
        font-weight: 700;
        margin-left: 10px;
      }

      .go_profile {
        position: absolute;
        right: 12px;
        top: 60px;

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

        &>p {
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

      &>div {
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
