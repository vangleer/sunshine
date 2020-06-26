<template>
  <div class="scroll" ref="scrollRef">
    <div>
      <div class="load_icon">
        <div class="load_box" v-show="showLoad">
          <van-loading color="#e54427" />
        </div>
      </div>
      <slot></slot>
      <div class="load_bom">
        <van-loading v-show="showUpload" color="#e54427" size="24px">加载中...</van-loading>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        scroll: null,
        showLoad: false,
        showUpload: false
      }
    },
    mounted() {
      // const self = this
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scrollRef, {
          // 上拉加载
          pullUpLoad: {
            // 当上拉距离超过30px时触发 pullingUp 事件
            threshold: -10,
            stop: -50
          },
          // 下拉刷新
          pullDownRefresh: {
            // 下拉距离超过30px触发pullingDown事件
            threshold: 30,
            // 回弹停留在距离顶部20px的位置
            stop: 50
          }
        })
        this.scroll.on('pullingUp', () => {
          console.log('处理上拉加载操作')
          this.showUpload = true
          setTimeout(() => {
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
            this.scroll.finishPullUp()
            this.showUpload = false
          }, 1000)
        })
        this.scroll.on('pullingDown', () => {
          console.log('处理下拉刷新操作')
          this.showLoad = true
          setTimeout(() => {
            console.log('asfsaf')
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
            this.showLoad = false
            this.scroll.finishPullDown()
          }, 2000)
        })
      })
    }
  }

</script>

<style lang="less" scoped>
  .scroll {
    width: 100%;
    height: 80vh;
    position: relative;
    padding-bottom: 80px;
  }

  .load_icon {
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translateX(-50%);
  }

  .load_bom {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 20px;
    // left: 50%;
    // transform: translateX(-50%);
    // margin: 0 auto;
    // top: -10px;
    // transform: translateX(-50%);
  }

</style>
