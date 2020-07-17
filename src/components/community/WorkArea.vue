<template>
  <div class="work_area">
    <MyScroll @finishPullUp="handleFinishPullUp" @finishPullDown="handleFinishPullDown">
      <div class="play_list">
        <WaterFull ref="waterFill"></WaterFull>
      </div>
    </MyScroll>
  </div>
</template>

<script>
  import WaterFull from './WaterFull'
  import MyScroll from './Scroll'
  export default {
    components: {
      WaterFull,
      MyScroll
    },
    data() {
      return {
        waterList: []
      }
    },
    created() {},
    async mounted() {
      const res = await this.$http.fetch('/mock/workList')
      this.waterList = res.data.data
      this.$refs.waterFill.handleLoad(this.waterList)
    },
    methods: {
      // 获取作品区的数据
      async getWorkList() {
        const res = await this.$http.fetch('/mock/workList')
        this.waterList = [...this.waterList, ...res.data.data]
        this.$refs.waterFill.handleLoad(this.waterList)
      },
      // 上拉加载
      handleFinishPullUp() {
        this.getWorkList()
      },
      // 下拉刷新
      async handleFinishPullDown() {
        const res = await this.$http.fetch('/mock/workList')
        this.waterList = res.data.data
        this.$refs.waterFill.handleLoad(this.waterList)
      }
    }
  }

</script>

<style lang="less">
  .rec_topic {
    width: 100%;

    .top {
      padding: 15px 10px;
    }
  }

  .play_list {
    padding-bottom: 20px;
  }

</style>
