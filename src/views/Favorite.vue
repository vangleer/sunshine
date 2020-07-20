<template>
  <div class="favorite">
    <!-- 头部导航 -->
    <van-nav-bar title="我的收藏" left-arrow @click-left="$router.back()" :border="false" />

    <!-- 标签页 -->
    <div class="tab_box">
      <van-tabs v-model="active" animated swipeable :border="false">
        <van-tab title="喜欢">
          <div class="list">
            <div class="item" v-for="(item,index) in loveList" :key="index">
              <VideoBox :video="item" :isLove="false"></VideoBox>
            </div>
          </div>
        </van-tab>
        <van-tab title="我的收藏">
          <div class="list2 flex_between">
            <div class="item" v-for="(item,index) in list2" :key="index" :style="{backgroundColor:item.color}">
              {{item.name}}</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import VideoBox from '../components/VideoBox.vue'
  export default {
    components: {
      VideoBox
    },
    data() {
      return {
        list2: [{
            id: 1,
            title: '视频',
            color: '#db80a9'
          },
          {
            id: 2,
            title: '词汇',
            color: '#ff6e37'
          },
          {
            id: 3,
            title: '短语',
            color: '#ffa22b'
          },
          {
            id: 4,
            title: '话题',
            color: '#6b4cd8'
          },
          {
            id: 5,
            title: '句型',
            color: '#5267fe'
          }
        ],
        loveList: []
      }
    },
    created() {
      this.getLoveList()
      this.getCollectList()
    },
    methods: {
      // 获取喜欢列表
      async getLoveList() {
        const res = await this.$http.fetch('/mock/loveList')
        this.loveList = res.data.data
      },
      // 获取收藏列表
      getCollectList() {
        this.list2 = JSON.parse(localStorage.getItem('collect_list'))
      }
    }
  }

</script>

<style lang="less" scoped>
  .tab_box {
    .list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      padding: 10px;

      .item {
        width: 32%;
        margin-bottom: 8px;
      }
    }

    .list2 {
      flex-wrap: wrap;
      background-color: #f9f9f9;
      padding: @padding10;

      .item {
        width: 48%;
        height: 170px;
        text-align: center;
        line-height: 170px;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        background-color: #db80a9;
        margin-bottom: 10px;
        overflow: hidden;
        word-break: break-all;
        padding: 0 15px;
      }
    }
  }

</style>
