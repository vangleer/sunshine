<template>
  <div class="header" :class="active === 0 ? 'white-color':'normal-color'">
    <div class="avatar" is-link @click="showPopup">
      <div class="user_img_box" v-if="userInfo.icon">
        <img class="user_img" :src="baseUrl+userInfo.icon" alt="">
      </div>
      <div v-else class="icon_box">
        <span class="iconfont icon-user"></span>
      </div>
    </div>
    <slot></slot>
    <div v-if="isSearch" class="search" :style="searchStyle" @click="goSearch">
      <span class="iconfont icon-search"></span>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
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
    computed: {
      ...mapState(['userInfo'])
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
        console.log('yes')
        this.$store.commit('showUserinfo')
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
    color: @blackCoor;
    background-color: @whiteColor;

    .active {
      color: @blackCoor;
      font-weight: 700;
    }
  }

  .white-color {
    color: @whiteColor;

    .active {
      color: @whiteColor;
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
    height: 112px;
    width: 100%;
    padding: 40px 12px 12px;

    .avatar {
      .user_img_box {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 3px solid rgba(245, 58, 53, .7);

        .user_img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .icon_box {
        width: 52px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: @grayBgColor;
        border: 3px solid rgba(245, 58, 53, .7);
      }

      .iconfont {
        font-size: @iconSize;
        // line-height: 50px;
        color: @whiteColor;
        // color: #fff;
      }
    }

    .search {
      padding: @padding12;
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
