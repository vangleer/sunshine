<template>
  <div class="community pd_up">
    <!-- 头部导航 -->
    <home-header>
      <!-- 分类 -->
      <!-- <div class="nav_cate flex_bea">
        <div class="cate_item" :class="index===currentCate?'active':''" v-for="(item,index) in cates" :key="item.id"
          @click="handleCateClick(index)">{{item.title}}</div>
      </div> -->
      <div class="nav_cate">
        <van-tabs type="line" @click="handleCateClick" v-model="currentCate" :border="false" title-active-color="#222"
          title-inactive-color="#807f82">
          <van-tab title-style="font-size:16px;font-weight:700;" v-for="(item, index) in cates" :key="index"
            :title="item.title"></van-tab>
        </van-tabs>
      </div>
    </home-header>

    <!-- 内容 -->
    <!-- <PullRefresh> -->
    <div class="content">
      <van-swipe ref="swiperRef" class="atten_swipe" :show-indicators="false" @change="handleChange">
        <van-swipe-item>
          <Attention></Attention>
        </van-swipe-item>
        <van-swipe-item class="swipe_item2">
          <WorkArea></WorkArea>
        </van-swipe-item>
        <van-swipe-item>
          <Attention></Attention>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- </PullRefresh> -->
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  // import PullRefresh from '../components/PullRefresh'
  import Attention from '../components/community/Attention'
  import WorkArea from '../components/community/WorkArea'
  export default {
    components: {
      'home-header': Header,
      // PullRefresh,
      Attention,
      WorkArea
    },
    data() {
      return {
        scroll: null,
        cates: [{
            id: 1,
            title: '关注',
            opt: ''
          },
          {
            id: 2,
            title: '作品区',
            opt: ''
          },
          {
            id: 3,
            title: '记录本',
            opt: ''
          }
        ],
        loveList: [{
          id: 123
        }],
        attentionData: [],
        currentCate: 0
        // active: 0
      }
    },
    methods: {
      // 点击切换
      handleCateClick(index) {
        this.currentCate = index
        this.$refs.swiperRef.swipeTo(index)
      },
      // 滑动轮播
      handleChange(e) {
        // console.log(e)
        this.currentCate = e
      }
    }
  }

</script>

<style lang="less" scoped>
  .swipe_item2 {
    height: 80vh;
  }

  .content {
    width: 100%;
    // height: 100vh;
    // height: 80vh;

    .atten_swipe {
      height: 80vh;
    }
  }

  .community {
    background-color: @grayBgColor;
  }

  .nav_cate {
    width: 60%;
    padding-top: 10px;

    .cate_item {
      position: relative;
      flex: 1;
      font-size: 16px;
      text-align: center;
      font-weight: 700;
      color: @deepColor;
    }

    .active {
      font-weight: 700;
      color: @blackCoor;
    }
  }

  .swiper_box {
    width: 100%;
    height: 80vh;
    background-color: @grayBgColor;

    .swiper {
      width: 100%;
      height: 100%;
    }
  }

</style>
