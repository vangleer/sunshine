<template>
  <div class="search_page">
    <!-- 收索框 -->
    <van-search v-model="searchValue" placeholder="收索词汇/短语/话题/用户" clearable show-action @cancel="$router.back()" />
    <!-- 选择分类 -->
    <div class="search_cate">
      <span :class="index===activeItem?'active':''" v-for="(item,index) in cates" :key="item.id"
        @click="handleChangeCate(index)">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        activeItem: 0,
        cates: [{
            id: 0,
            title: '字/词'
          },
          {
            id: 1,
            title: '话题'
          },
          {
            id: 2,
            title: '用户'
          }
        ]
      }
    },
    methods: {
      // 切换收索内容
      handleChangeCate(index) {
        this.activeItem = index
      }
    }
  }

</script>

<style lang="less">
  .search_page {
    height: 100vh;
    width: 100%;
    background-color: @grayBgColor;

    input {
      caret-color: @themeColor2;
    }

    .van-search__content {
      border-radius: 6px;
    }

    .van-search__action {
      color: @themeColor2;
    }

    .search_cate {
      display: flex;
      height: 42px;
      background-color: #fff;

      &>span {
        position: relative;
        padding: 12px;
        font-size: 14px;
        color: @grayColor;
        font-weight: 700;
      }

      span.active {
        color: @blackCoor;
        font-weight: 700;
      }

      span:nth-child(-n + 2)::after {
        content: '';
        position: absolute;
        top: 16px;
        right: 0;
        width: 1px;
        height: 10px;
        background-color: @grayColor;
      }
    }
  }

</style>
