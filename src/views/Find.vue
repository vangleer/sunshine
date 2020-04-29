<template>
  <div class="find_page">
    <!-- 轮播图 -->
    <div class="find_swiper">
      <van-swipe class="my-swipe">
        <van-swipe-item>
          <img src="../assets/images/find_pro1.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/find_pro2.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/find_pro3.jpg" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 导航 -->
    <div class="find_nav">
      <div class="find_nav_item">
        <div>
          <img src="../assets/images/huati.png" alt />
        </div>
        <p>话题</p>
      </div>
      <div class="find_nav_item">
        <div>
          <img src="../assets/images/words.png" alt />
        </div>
        <p>词汇</p>
      </div>
      <div class="find_nav_item">
        <div>
          <img src="../assets/images/duanyu.png" alt />
        </div>
        <p>短语</p>
      </div>
    </div>

    <!-- 推荐视频 -->
    <div class="find_recom">
      <!-- 最新视频推荐 -->
      <div class="recom_new">
        <h3>最新视频精选</h3>
        <div class="new_list">
          <div class="new_list_item">
            <img src="../assets/images/find_pro1.jpg" alt />
            <div class="start">
              <i class="iconfont icon-bofang"></i>
            </div>
            <div class="zhan">
              <i class="iconfont icon-xihuan"></i>
              <span>13</span>
            </div>
          </div>
          <div class="new_list_item">
            <img src="../assets/images/find_pro1.jpg" alt />
            <div class="start">
              <i class="iconfont icon-bofang"></i>
            </div>
            <div class="zhan">
              <i class="iconfont icon-xihuan"></i>
              <span>13</span>
            </div>
          </div>
          <div class="new_list_item">
            <img src="../assets/images/find_pro1.jpg" alt />
            <div class="start">
              <i class="iconfont icon-bofang"></i>
            </div>
            <div class="zhan">
              <i class="iconfont icon-xihuan"></i>
              <span>13</span>
            </div>
          </div>
          <div class="new_list_item">
            <img src="../assets/images/find_pro1.jpg" alt />
            <div class="start">
              <i class="iconfont icon-bofang"></i>
            </div>
            <div class="zhan">
              <i class="iconfont icon-xihuan"></i>
              <span>13</span>
            </div>
          </div>
          <div class="new_list_item">
            <img src="../assets/images/find_pro1.jpg" alt />
            <div class="start">
              <i class="iconfont icon-bofang"></i>
            </div>
            <div class="zhan">
              <i class="iconfont icon-xihuan"></i>
              <span>13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.find_page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  .find_swiper {
    width: 100%;
    height: 120px;
  }
  .van-swipe-item {
    width: 100%;
    background-color: #f5f5f5;
    text-align: center;
    img {
      width: 90%;
      height: 120px;
      border-radius: 6px;
    }
  }
  .find_nav {
    width: 100%;
    height: 120px;
    background-color: #f5f5f5;
    display: flex;
    color: #000;
    .find_nav_item {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f04007;
        padding-top: 10px;
        text-align: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
      p {
        font-size: 13px;
        margin-top: 8px;
      }
    }
    .find_nav_item:nth-child(2) > div {
      background-color: #08f53a;
    }
    .find_nav_item:nth-child(3) > div {
      background-color: #8308f5;
      > img {
        width: 25px;
      }
    }
  }
}
.find_recom {
  width: 100%;
  .recom_new {
    width: 100%;
    height: 300px;
    padding: 10px;
    h3 {
      color: #000;
      font-size: 14px;
      font-weight: 700;
      margin: 8px 0;
    }
    .new_list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // .new_list_item:nth-child(1) {}

      .new_list_item {
        position: relative;
        width: 31.5%;
        height: 120px;
        margin-bottom: 10px;
        color: #fff;
        img {
          width: 100%;
          height: 120px;
          border-radius: 6px;
        }
        .start {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          .iconfont {
            font-size: 1px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .zhan {
          position: absolute;
          left: 4px;
          bottom: 0px;
          .iconfont {
            font-size: 13px;
          }
          span {
            font-size: 13px;
            margin-left: 2px;
          }
        }
      }
      .new_list_item:nth-child(1) {
        width: 65%;
      }
    }
  }
}
</style>
