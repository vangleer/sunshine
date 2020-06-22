<template>
  <div class="header" :class="active === 0 ? 'color_fff':'black_color'">
    <div class="avatar" is-link @click="showPopup">
      <van-circle v-model="currentRate" :rate="30" layer-color="#f04007" :stroke-width="90" size="46px" />
      <img src="../../assets/images/user.png" alt />
    </div>
    <slot></slot>
    <div v-if="isSearch" class="search" :style="searchStyle" @click="goSearch">
      <span class="iconfont icon-search"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isSearch: {
        type: Boolean,
        default: true
      },
      active: {
        type: Number,
        default: 1
      },
      searchStyle: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        currentRate: 50,
        show: false,
        navList: [{
            id: 0,
            title: '发现'
          },
          {
            id: 1,
            title: '语境'
          },
          {
            id: 2,
            title: '社区'
          }
        ]
      }
    },
    methods: {
      changeCurrent(index) {
        // 切换当前点击的索引
        this.active = index
        // 触发父组件的方法并把索引(index)传递过去
        this.$emit('clickItem', index)
      },
      // 显示左边用户部分信息
      showPopup() {
        this.show = true
      },
      // 去收索页面
      goSearch() {
        this.$router.push('/search')
      }
    }
  }

</script>

<style lang="less">
  .normal-color {
    color: #222;
    background-color: #fff;

    .active {
      color: #222;
      font-weight: 700;
    }
  }

  .white-color {
    color: #fff;

    .active {
      color: #fff;
      font-weight: 500;
    }
  }

  .header {
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    width: 100%;
    padding: 10px;
    padding-top: 20px;

    .avatar {
      position: relative;
      width: 52px;
      height: 52px;

      img {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 11px;
        left: 3px;
      }
    }

    .search {
      padding: 13px;
      width: 49px;
      height: 49px;

      .iconfont {
        font-size: 22px;
        margin-left: 6px;
        font-weight: 700;
      }
    }

    .van-circle {
      margin-top: 8px;
    }
  }

</style>
