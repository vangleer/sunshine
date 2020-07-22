<template>
  <div class="search_page">
    <div style="position: fixed;top: 0;left: 0;width: 100%;">
      <!-- 收索框 -->
      <van-search v-model="searchValue" placeholder="收索词汇/短语/话题/用户" @input="handleSearch" clearable show-action
        @cancel="$router.back()" />
      <!-- 选择分类 -->
      <div class="search_cate">
        <span :class="index===activeItem?'active':''" v-for="(item,index) in cates" :key="item.id"
          @click="handleChangeCate(index)">{{item.title}}</span>
      </div>
    </div>

    <!-- 搜索内容 -->
    <div class="content" style="padding-top: 98px;">
      <div class="item" v-for="(item,index) in list" :key="index">{{item.word}}</div>
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
        ],
        list: [],
        allList: [],
        timeId: null
      }
    },
    async created() {
      const res = await this.$http.fetch('/mock/words?type=' + this.activeItem)
      this.allList = res.data.data
    },
    methods: {
      // 切换收索内容
      async handleChangeCate(index) {
        this.activeItem = index
        const res = await this.$http.fetch('/mock/words?type=' + this.activeItem)
        this.allList = res.data.data
      },
      handleSearch() {
        clearTimeout(this.timeId)
        this.timeId = setTimeout(() => {
          if (this.searchValue.trim().length <= 0) {
            this.list = []
            return
          }
          this.list = this.allList.filter((item, index) => {
            return item.word.toLowerCase().startsWith(this.searchValue.toLowerCase())
          })
        }, 300)
      }
    }
  }

</script>

<style lang="less">
  .search_page {
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

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 2px;
          background-color: #f53a35;
        }
      }
    }
  }

  .content {
    padding-bottom: 10px;

    .item {
      padding: 12px;
      background-color: #fff;
      margin-top: 10px;
    }
  }

</style>
