<template>
  <div class="pop_user">
    <!-- 弹出层头部 -->
    <div class="pop_hd">
      <div class="user_icon" @click="$router.push('/user')">
        <div class="user_img_box">
          <img class="user_img" v-if="userInfo.icon" :src="userInfo.icon" alt="">
          <div v-else class="icon_box">
            <span class="iconfont icon-user"></span>
          </div>
        </div>
        <div class="user_name">{{userInfo.username}}</div>
      </div>
      <div class="go_profile">
        <p>
          查看主页
          <span class="iconfont icon-you"></span>
        </p>
      </div>
      <div class="jilu">
        <p>听力经验值 {{userInfo.empirical_value}}</p>
        <p>口语练习{{userInfo.oral_num}}次</p>
      </div>
    </div>
    <!-- 弹出层中间部分 -->
    <div class="pop_bd">
      <div class="item items1">
        <p @click="changeRouter('/goal')">
          <i class="iconfont icon-shijianzhongbiao"></i>
          <span>目标与数据</span>
        </p>
        <p @click="changeRouter('/adjustment')">
          <i class="iconfont icon-icon_jiaohuan"></i>
          <span>难度调整</span>
        </p>
      </div>
      <div class="item items2">
        <p @click="changeRouter('/favorite')">
          <i class="iconfont icon-aixin"></i>
          <span>我的收藏</span>
        </p>
        <p @click="changeRouter('/achievment')">
          <i class="iconfont icon-xunzhang1"></i>
          <span>成就与勋章</span>
        </p>
      </div>
      <div class="item items3">
        <p @click="changeRouter('/intergral')">
          <i class="iconfont icon-integral"></i>
          <span>我的积分</span>
        </p>
        <p @click="changeRouter('/invitefriends')">
          <i class="iconfont icon-tianjiajiahaoyoutianjiapengyou"></i>
          <span>邀请好友</span>
        </p>
      </div>
    </div>
    <!-- 弹出层底部 -->

    <div class="pop_bt">
      <div @click="changeRouter('/settings')">
        <i class="iconfont icon-shezhi"></i>
        <p>系统设置</p>
      </div>
      <div @click="changeRouter('/feedback')">
        <i class="iconfont icon-fankui"></i>
        <p>意见反馈</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        currentRate: 50
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      changeRouter(path) {
        this.$router.push(path)
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
      padding: @padding12;

      .user_icon {
        display: flex;

        .user_img_box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid rgba(245, 58, 53, .7);
        }

        .user_img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .icon_box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: @grayBgColor;
        }

        .iconfont {
          font-size: 30px;
          line-height: 70px;
          color: @whiteColor;
          // color: #fff;
        }
      }

      .user_name {
        font-size: @titleSize;
        font-weight: 700;
        margin-left: @margin10;
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
        padding: @padding12;

        p {
          height: 20px;
          padding: 8px 10px;
          border-radius: 5px;
          line-height: 3px;
          font-size: @textSize13;
        }

        p:nth-child(1) {
          background-color: rgba(245, 58, 53, .1);
          color: #d02824;
        }

        p:nth-child(2) {
          background-color: rgba(244, 169, 50, 0.1);
          color: #ed9204;
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
            font-size: @iconSize;
          }

          span {
            display: inline-block;
            margin-left: @margin12;
            font-size: @textSize16;
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
          font-size: @iconSize;
        }

        p {
          margin-top: @margin10;
          font-size: @textSize16;
        }
      }
    }
  }

</style>
