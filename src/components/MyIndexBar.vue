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
          <div v-for="(item,index) in anchorList" :key="index">
            <van-index-anchor :index="item"><br /></van-index-anchor>
            <van-cell title-style="font-weight: 700;" :title="currentItem.title+item" is-link />
            <van-cell title-style="font-weight: 700;" :title="currentItem.title+item" is-link />
            <van-cell title-style="font-weight: 700;" :title="currentItem.title+item" is-link />
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
      activeKey: Number
    },
    data() {
      return {
        anchorList: [],
        currentItem: {},
        current: this.activeKey
      }
    },
    computed: {},
    created() {
      this.currentItem = this.sideBarList[this.activeKey]
      var arr = []
      for (let i = 0; i < 26; i++) {
        // console.log(String.fromCharCode(65 + i))
        arr.push(String.fromCharCode(65 + i))
        this.anchorList = arr
      }
    },
    methods: {
      onChange(index) {
        this.currentItem = this.sideBarList[index]
        this.$emit('changeCurrent', index)
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
