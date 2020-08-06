<template>
  <div class="invite_friend" :style="{backgroundImage:'url('+bgImg+')'}">
    <!-- 头部导航 -->
    <div class="nav flex_bea">
      <div class="left" @click="$router.back()"><span class="iconfont icon-zuo"></span></div>
      <div class="right">邀请记录</div>
    </div>

    <!-- 分享方式 -->
    <div class="methods">
      <div class="now flex_center"><span class="iconfont icon-weixin1"></span> 立即邀请</div>
      <div class="msg flex_bea">
        <div class="flex_center"> <span class="iconfont icon-haibao"></span>发送邀请海报</div>
        <div class="flex_center"><span class="iconfont icon-mianduimiansaoma"></span>面对面邀请</div>
      </div>
    </div>
    <!-- 邀请说明 -->
    <div class="explaine">
      <div class="box">
        <div class="top">
          <div class="title">
            -<span>邀请说明</span>-
          </div>
        </div>
        <div class="bom">
          <div class="item">1、邀请对象仅限未注册阳光英语APP的新用户;</div>
          <div class="item">2、新用户打开邀请链接并输入手机号即可领取20积分<span>(需用领取积分时输入的手机号注册阳光英语的APP查看积分);</span></div>
          <div class="item">3、获得积分后需在7日内注册,否则视为自动放弃 。</div>
          <div class="item">
            4、邀请者将获得20积分奖励:
            <p>- 新用户注册成功时,邀请者获得5积分;</p>
            <p>- 新用户完成一次打卡,邀请者获得5积分;</p>
            <p>- 新用户成功发布一个视频,邀请者再获得10积分;</p>
          </div>
          <div class="item">5、获得积分未来可以兑换VIP权益和其他付费项目;</div>
          <div class="item">6、温馨提示:若通过不正当获取奖励，经查实<span>[阳光英语]</span>有权撤销高用户的活动资格并取消奖励，情节严重者将追究其法律责任;</div>
          <div class="item">本活动最终解释权归<span>[阳光英语]</span>所有。</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bgImg: require('../assets/images/bg_invite.png')
      }
    }
  }

</script>

<style lang="less" scoped>
  .invite_friend {
    position: relative;
    width: 100%;
    height: 100vh;
    // background-image: url();
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    padding-top: 30px;
  }

  .nav {
    .left {
      width: 49px;
      height: 49px;
      text-align: center;
      line-height: 49px;

      .iconfont {
        font-size: 22px;
        font-weight: 700;
        color: #fff;
      }
    }

    .right {
      padding: 3px 10px 4px 14px;
      border-radius: 30px 0 0 30px;
      background-color: @themeColor2;
      color: #fff;
      font-size: @textSize14;
    }
  }

  // 分享方式
  .methods {
    position: absolute;
    top: 65%;
    left: 50%;
    width: 350px;
    // background-color: pink;
    transform: translateX(-50%);
    padding: 0 16px;

    .now {
      width: 100%;
      height: 46px;
      border-radius: 46px;
      background-color: @yelColor;
      color: #fff;
      font-size: 18px;
      font-weight: 700;

      .iconfont {
        color: #fff;
        font-size: 22px;
        padding-right: 6px;
      }
    }

    .msg {
      width: 100%;
      margin-top: 20px;

      >div {
        width: 46%;
        height: 36px;
        border-radius: 36px;
        border: 1px solid #fff;
        color: #fff;
        font-size: @textSize15;

        .iconfont {
          font-size: @textSize14;
          padding-right: 3px;
        }

        .icon-haibao {
          font-size: 16px;
        }
      }
    }
  }

  .explaine {
    position: absolute;
    bottom: -46%;
    width: 100%;
    // height: 400px;
    // border: 1px solid #ccc;
    padding: 11px;
    background: linear-gradient(to bottom, #7044a6, #5639ad);

    .box {
      // border: 1px solid #ccc;
      background-color: #ffffff;
      // height: 300px;
      width: 100%;
      border-radius: 12px;

      .top {
        width: 100%;
        height: 38px;
        border-radius: 12px 12px 0 0;
        background-color: #ffedcd;

        .title {
          position: relative;
          display: flex;
          justify-content: center;
          align-content: center;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 28px;
          background-color: @themeColor2;
          border-radius: 0 0 22px 22px;
          color: #fff;

          span {
            font-size: 14px;
            padding: 0 8px;
          }

          &::before,
          &::after {
            position: absolute;
            content: '';
            top: 2px;
            border-top: 4px solid transparent;
            border-left: 4px solid #ff6b6f;
            border-bottom: 4px solid transparent;
            border-right: 4px solid transparent;
          }

          &::before {
            left: -4px;
            transform: rotate(45deg);
          }

          &::after {
            right: -4px;
            transform: rotate(135deg);
          }
        }
      }
    }

    .bom {
      width: 100%;
      padding: @padding12;
      font-size: @textSize13;
      color: #c5a888;

      .item {
        margin-bottom: 12px;

        p {
          padding-left: 6px;
        }

        span {
          padding: 0 5px;
        }
      }
    }
  }

</style>
