<template>
  <div>
    <div class="left">
      <van-sidebar v-model="current" @change="onChange">
        <van-sidebar-item v-for="(item,index) in sideBarList" :key="index" :title="item.title" />
      </van-sidebar>
    </div>
    <div class="content" ref="contentRef">
      <div class="middle">
        <van-index-bar z-index="99" @select="handleSelect">
          <div v-for="(item,index) in list" :key="index">
            <van-index-anchor :index="item.anchor"><br /></van-index-anchor>
            <van-cell title-style="font-weight: 700;" v-for="(item2,index2) in item.list" :key="index2"
              :title="item2.word" is-link />

          </div>
        </van-index-bar>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      sideBarList: {
        type: Array,
        default () {
          return []
        }
      },
      activeKey: Number,
      type: {
        type: Number,
        default: 1
      } // type为1表示词汇  type为2表示短语
    },
    data() {
      return {
        anchorList: [],
        currentItem: {},
        current: this.activeKey,
        list: []
      }
    },
    computed: {},
    created() {
      this.currentItem = this.sideBarList[this.activeKey]
      var arr = []
      for (let i = 0; i < 26; i++) {
        arr.push(String.fromCharCode(65 + i))
      }
      this.anchorList = arr
      this.getList()
    },
    methods: {
      onChange(index) {
        this.currentItem = this.sideBarList[index]
        this.getList()
      },
      async getList() {
        if (this.type === 1) { // 词汇
          const res = await this.$http.fetch('/mock/vocabulary')
          console.log(res)
          this.list = res.data
        } else { // 短语
          const res = await this.$http.fetch('/mock/phrase')
          console.log(res)
          this.list = res.data
        }
      },
      handleSelect(index) {
        console.log('ok')
        console.log(index)
        console.log(this.$refs.contentRef.scrollTop)
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    display: flex;
    width: 70vw;
    padding-top: @padding50;

  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    // overflow: hidden;
    padding-top: @padding50;
  }

  .middle {
    position: relative;
    left: 100px;
    width: 100%;
  }

  .right {
    width: 30px;
    height: 80vh;
    // background-color: red;
  }

  .left {
    position: fixed;
    left: 0;
    top: 50px;
    width: 100px;
    height: 100%;
    background-color: #fafafa;

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
