<template>
  <div class="goal">
       <!-- 头部导航 -->
      <van-nav-bar title="目标与数据"  left-arrow @click-left="$router.back()"/>

      <!-- 内容 -->
      <div class="content">
        <div class="top">
          <div class="flex_bea">
           <div class="user_icon flex_align">
             <div class="icon_box flex_center">
                <span class="iconfont icon-user"></span>
              </div>
              <div class="user_name tit">小通</div>
            </div>
            <div class="text">学习记录</div>
        </div>
          <div class="study flex_align">
            <div class="today">
              <p>8<span class="text">/分钟</span></p>
              <span>今日学习</span>
            </div>
            <div class="today">
              <p>123<span class="text">分钟</span></p>
              <span>总学习时长</span>
            </div>
          </div>
        </div>

        <!-- 当前级别 -->
        <div class="current">
          <div class="title">当前级别: 简单</div>
          <div class="item">
            <p>在本级别获取听力经验值达到320000</p>
            <van-progress :percentage="50" track-color="#fceaea" />
          </div>
           <div class="item">
            <p>在本级别进行各项口语练习累计300次</p>
            <van-progress :percentage="50" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
  background-color: #f8f8f8;
  padding: 12px;
}
.top {
  background-color: #fff;
  border-radius: 10px;
  padding: 12px;
  .icon_box {
    width: 50px;
    height: 50px;
    background-color: #eee9ef;
    border-radius: 50%;
    border: 3px solid #ed4129;
    margin-right: 10px;
    .iconfont {
      color: #fff;
      font-size: 23px;
    }
  }
}
.study  {
  position: relative;
  &::after {
    position: absolute;
    left: 50%;
    top: 60%;
    content: '';
    width: 2px;
    height: 16px;
    background-color: #a6a6a6;

  }
  margin-top: 16px;
  .today {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    p {
      font-size: 23px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
}
</style>
