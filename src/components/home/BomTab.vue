<template>
  <div class="bomtab" :class="bg?'bg_black':'bg_white'">
    <div class="item" :class="currenNav===index?'active':''" v-for="(item,index) in tabList" :key="item.id"
      @click="handleNavClick(index,item.path)">
      {{item.title}}
      <div v-if="index===2" class="item_third flex_center">
        <span class="iconfont icon-add"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // currenNav: 0,
        tabList: [{
            id: 1,
            title: '语境',
            path: '/yujing'
          },
          {
            id: 2,
            title: '精练',
            path: '/find'
          },
          {
            id: 3,
            title: '',
            path: '/film'
          },
          {
            id: 4,
            title: '社区',
            path: '/community'
          },
          {
            id: 5,
            title: '消息',
            path: '/message'
          }
        ]
      }
    },
    created() {
      const path = this.$route.path
      this.currenNav = this.tabList.findIndex((item) => {
        return item.path === path
      })
    },
    computed: {
      bg() {
        return this.currenNav === 0
      },
      currenNav: {
        get() {
          return this.$store.state.currenNav
        },
        set(newValue) {
          this.$store.commit('changeTab', newValue)
        }
      }
    },
    watch: {
      $route() {
        console.log('yes')
        const path = this.$route.path
        this.currenNav = this.tabList.findIndex((item) => {
          return item.path === path
        })
      }
    },
    methods: {
      handleNavClick(index, path) {
        this.currenNav = index
        if (index === 2) {
          return this.$router.push(path)
        }
        this.$router.replace(path)
      }
    }
  }

</script>

<style lang="less" scoped>
  .bg_black {
    background-color: @blackCoor;
    color: @grayColor;

    .active {
      color: #fff;
    }
  }

  .bg_white {
    background-color: #fff;
    color: @deepColor;

    .active {
      color: @blackCoor;
    }
  }

  .item_third {
    // position: absolute;
    width: 35px;
    height: 30px;
    border-radius: 6px;
    background-color: @themeColor1;
    margin-top: -3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    .icon-add {
      color: @whiteColor;
      font-weight: 700;
    }
  }

  .bomtab {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 3px;
    width: 100%;
    font-size: @textSize15;
    height: 50px;

    // background-color: red;
    .item {
      position: relative;
      font-weight: 500;
      font-size: @textSize16;
      // padding-bottom: 20px;
    }

    .active {
      font-weight: 700;
      font-size: @textSize16;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 18px;
        height: 3px;
        background-color: @themeColor2;
        border-radius: 3px;
      }
    }
  }

</style>
