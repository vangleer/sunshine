<template>
  <div class="topic">
    <!-- 头部导航 -->
    <van-nav-bar title="话题" :fixed="true" :border="false" left-arrow @click-left="$router.back()" />

    <!-- 内容 -->
    <div class="content">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="(item,index) in sideBarList" :key="index" :title="item.title" />
        </van-sidebar>
      </div>
      <div class="right" ref="rightRef">
        <div class="list">
          <div class="item" v-for="(item,index) in topicList" :key="index" @click="handleGoDetail(item)">
            <!-- <img src="../assets/images/study1.jpg" alt=""> -->
            <div class="bg" :style="{backgroundColor:item.color}"></div>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        activeKey: 0,
        sideBarList: [{
            id: 0,
            title: '生活',
            opt: ''
          },
          {
            id: 1,
            title: '文艺',
            opt: ''
          },
          {
            id: 2,
            title: '旅行',
            opt: ''
          },
          {
            id: 3,
            title: '职场',
            opt: ''
          },
          {
            id: 4,
            title: '时尚',
            opt: ''
          },
          {
            id: 5,
            title: '理财消费',
            opt: ''
          },
          {
            id: 6,
            title: '新知',
            opt: ''
          },
          {
            id: 7,
            title: '英语学习',
            opt: ''
          },
          {
            id: 8,
            title: '趣味',
            opt: ''
          }
        ],
        scroll: null,
        topicList: []
      }
    },
    created() {
      this.getTypes()
      this.onChange()
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.rightRef, {
          click: true,
          bounce: false
        })
      })
    },
    methods: {
      async getTypes() {
        const res = await this.$http.fetch('/mock/getTypes')
        this.sideBarList = res.data
      },
      async onChange(index) {
        const res = await this.$http.fetch('/mock/topic')
        this.topicList = res.data.data
      },
      handleGoDetail(item) {
        // 将数据保存到localstorage中
        localStorage.setItem('topic_detail', JSON.stringify(item))
        // 跳转页面
        this.$router.push('/topicDetail')
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    display: flex;
    width: 100vw;
    padding-top: @padding50;
    height: calc(100vh);
    overflow: hidden;

    // background-color: red;
    .left {
      width: 100px;
      height: 100%;
      background-color: #fafafa;
    }

    .right {
      flex: 1;
      height: 100%;
      background-color: #fff;

      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 20px 20px 0;

      }

      .item {
        position: relative;
        width: 45%;
        height: 140px;
        padding: 0;
        margin-bottom: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 12px;

        }

        .bg {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }

        span {
          position: absolute;
          width: 100%;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-weight: 700;
        }
      }
    }

    .van-sidebar-item {
      background-color: #fafafa;
      padding: 20px 10px 20px 20px;
    }

    .van-sidebar-item--select {
      background-color: #fff;
      width: 100%;
    }

    .van-sidebar {
      width: 100%;
    }
  }

</style>
