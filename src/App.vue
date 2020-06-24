<template>
  <div class="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        transitionName: 'left' // 路由动画类名
      }
    },
    watch: {
      $route(to, from) {
        const toIndex = to.meta.index
        const fromIndex = from.meta.index
        console.log(toIndex, fromIndex)
        this.transitionName = toIndex < fromIndex ? 'right' : 'left'
      }
    }
  }

</script>

<style lang="less">
  .left-enter {
    transform: translateX(100vw);
  }

  .left-leave-to {
    opacity: 0;
    transform: translateX(-100vw);
    position: absolute;
  }

  .left-enter-active,
  .left-leave-active {
    transition-property: transform, opacity;
    transition: 0.3s ease;
  }

  .right-enter {
    transform: translateX(-100vw);
  }

  .right-leave-to {
    opacity: 0;
    transform: translateX(100vw);
    position: absolute;
  }

  .right-enter-active,
  .right-leave-active {
    transition-property: transform, opacity;
    transition: 0.3s ease;
  }

</style>
