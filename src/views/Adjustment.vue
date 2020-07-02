<template>
  <div class="adjustment">
    <!-- 头部导航 -->
    <van-nav-bar title="难度调整" left-arrow @click-left="$router.back()" />
    <div class="swipe_box">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item><img src="../assets/images/user2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="../assets/images/user2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="../assets/images/user2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="../assets/images/user2.jpg" alt="" /></van-swipe-item>
      </van-swipe>
      <!-- 级别 -->
      <div class="jibie">
        <div class="item">
          <span>简单</span>
        </div>
      </div>
      <div class="kaoshi">
        <span>ETS4 A1</span>
      </div>
    </div>

    <!-- 适合 -->
    <div class="fit">
      <div class="tit">适合于:</div>
      <div class="list">
        <p>1.有一定英语基础,希望提升的中同学</p>
        <p>2.有一定英语基础,希望提升的中同学</p>
        <p>3.有一定英语基础,希望提升的中同学</p>
      </div>
    </div>
    <p class="done"><span class="tit">学完本级:</span> 进行日常对话,描述经历,表达简单的观点</p>
    <!-- 按钮 -->
    <div class="btn">
      选择本级别
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }

</script>

<style lang="less" scoped>
  .swipe_box {
    width: 100%;
    padding: 10px 0;
    background-color: @grayBgColor;
    height: 380px;

    img {
      width: 100%;
      height: 250px;
    }

    .jibie {
      position: relative;
      margin-top: 10px;
      width: 100%;
      height: 4px;
      background-color: @themeColor2;

      &::before,
      &::after {
        top: -3px;
        //   transform: translate(-50%);
        position: absolute;
        content: '';
        width: 12px;
        height: 12px;
        background-color: @themeColor2;
        border-radius: 50%;
      }

      &::after {
        right: 0;
      }

      .item {
        position: relative;
        padding-top: 16px;
        text-align: center;

        &::before {
          top: -3px;
          left: 50%;
          transform: translate(-50%);
          position: absolute;
          content: '';
          width: 12px;
          height: 12px;
          background-color: @themeColor2;
          border-radius: 50%;
        }

        position: relative;
      }
    }

    .kaoshi {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      span {
        display: inline-block;
        background-color: @yelColor;
        color: #fff;
        border-radius: 5px;
        padding: 6px 10px;
      }
    }
  }

  .btn {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translate(-50%);
    width: 88%;
    height: 42px;
    text-align: center;
    line-height: 42px;
    color: #fff;
    border-radius: 20px;
    background-color: @themeColor2;
  }

  .fit {
    display: flex;
    padding: 12px;

    .list {
      margin-left: 20px;
    }

    p {
      color: @lightBlack;
      margin-bottom: 8px;
      font-size: 14px;
    }
  }

  .done {
    padding: 12px;
    color: @lightBlack;
    font-size: 14px;
  }

</style>
