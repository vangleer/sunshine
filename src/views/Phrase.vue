<template>
  <div class="phrase">
    <van-nav-bar title="短语" :fixed="true" :border="false" z-index="100" left-arrow @click-left="$router.back()" />
    <!-- 索引栏组件 -->
    <MyIndexBar :sideBarList="sideBarList" :activeKey="activeKey"></MyIndexBar>
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
    }
  }

</script>

<style lang="less" scoped>
  .phrase {
    width: 100vw;
    height: 100vh;
  }

</style>
