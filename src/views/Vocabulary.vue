<template>
  <div class="topic">
    <van-nav-bar title="词汇" :border="false" z-index="100" :fixed="true" left-arrow @click-left="$router.back()" />

    <!-- 索引栏组件 -->
    <MyIndexBar :sideBarList="sideBarList" :type="1" :activeKey="activeKey"></MyIndexBar>
  </div>
</template>

<script>
  import MyIndexBar from '../components/MyIndexBar'
  export default {
    components: {
      MyIndexBar
    },
    data() {
      return {
        activeKey: 0,
        sideBarList: [{
            id: 0,
            title: '入门',
            opt: ''
          },
          {
            id: 0,
            title: '简单',
            opt: ''
          },
          {
            id: 0,
            title: '进阶',
            opt: ''
          },
          {
            id: 0,
            title: '真实世界',
            opt: ''
          }
        ]
      }
    },
    created() {}
  }

</script>

<style lang="less" scoped>
  .topic {
    width: 100vw;
    height: 100vh;

  }

</style>
