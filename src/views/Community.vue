<template>
  <div class="community">
    <!-- 头部导航 -->
    <home-header>
      <!-- 分类 -->
      <div class="nav_cate flex_bea">
        <div class="cate_item" :class="index===currentCate?'active':''" v-for="(item,index) in cates" :key="item.id"
          @click="handleCateClick(index)">{{item.title}}</div>
      </div>
    </home-header>
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
        attentionData: '关注',
        currentCate: 0
      }
    },
    methods: {
      // 点击切换
      handleCateClick(index) {
        this.currentCate = index
        console.log('yes')
      },
      // 滑动轮播
      handleChange(e) {
        // console.log(e)
        this.currentCate = e.detail.current
      }
    }
  }

</script>

<style lang="less" scoped>
  .community {
    padding-top: 45px;
    padding-bottom: 50px;
  }

  .nav_cate {
    width: 60%;

    .cate_item {
      position: relative;
      flex: 1;
      font-size: 16px;
      text-align: center;
      font-weight: 700;
      color: #7d7d7e;
    }

    .active {
      font-weight: 700;
      color: #222;
    }
  }

  .swiper_box {
    width: 100%;
    height: 80vh;
    background-color: #f9f9f9;

    .swiper {
      width: 100%;
      height: 100%;
    }
  }

</style>
