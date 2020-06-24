<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text=" " pulling-text="" loading-text="">
    <template #loading>
      <van-loading color="#e54427" />
    </template>
    <slot></slot>
  </van-pull-refresh>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 2000)
      }
    }
  }

</script>

<style>

</style>
