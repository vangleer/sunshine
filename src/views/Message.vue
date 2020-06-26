<template>
  <div class="message pd_up">
    <!-- 头部导航 -->
    <home-header :searchStyle="{visibility:'hidden'}"><span class="tit">消息</span></home-header>
    <!-- 内容 -->
    <PullRefresh>
      <div class="content">
        <!-- <img class="loading" src="../assets/images/loading.png" alt=""> -->
        <!-- 导航链接 -->
       <div class="msg_nav flex_bea">
         <div class="nav_item" v-for="(item,index) in navList" :key="index" @click="handleNalClick(item)">
           <div class="icon">
             <span :class="item.icon"></span>
           </div>
           <p>{{item.text}}</p>
         </div>
       </div>

       <!-- 待处理求助 -->
       <div class="help flex_bea">
         <div class="left flex_align">
           <img src="../assets/images/help.png" alt="">
           <span class="tit">待处理求助</span>
         </div>
         <div class="text">查看全部30条求助</div>
       </div>

       <!-- 官方消息 -->
       <div class="official flex_between">
         <div class="left flex_align">
           <img src="../assets/images/logo.jpg" alt="">
           <div class="box">
             <span class="tit">阳光口语官方</span>
             <p class="text">邀请好友双双爆积分啦</p>
           </div>
         </div>
         <div class="text">7天前</div>
       </div>
      </div>
    </PullRefresh>
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  export default {
    components: {
      'home-header': Header
    },
    data() {
      return {
        navList: [
          { id: 1, icon: 'iconfont icon-aixin', text: '赞和感谢', path: '/thank' },
          { id: 2, icon: 'iconfont icon-pinglun', text: '评论和回复', path: '/comment' },
          { id: 3, icon: 'iconfont icon-ziyuan', text: '@我的', path: '/profile' },
          { id: 4, icon: 'iconfont icon-tianjiajiahaoyoutianjiapengyou', text: '新增粉丝', path: '/newfans' }
        ]
      }
    },
    methods: {
      handleNalClick(item) {
        console.log(item.path)
        this.$router.push(item.path)
      }
    }
  }

</script>

<style lang="less" scoped>
  .tit {
    font-size: 18px;
  }

  .content {
    width: 100%;
    height: 100vh;
    // background-color: red;
  }
  .msg_nav {
    width: 100%;
    height: 130px;
    background-color: #fff;
    .nav_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      .icon {
        padding: 12px 10px 10px;
         border-radius: 50%;
        border: 1px solid #eee;
        background-color: #fdfbfb;
        .iconfont {
          font-size: 30px;
        }
      }
      p {
        font-size: 14px;
        color: #606063;
        margin-top: 10px;

      }
    }
  }
  .help {
    padding: 12px;
    .left {
      img {
        margin-right: 10px;
        width: 40px;
      }
    }
  }
  .official {
     padding: 12px;
    .left {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .box {
        p {
          margin-top: 10px;
        }
      }
    }
  }

</style>
