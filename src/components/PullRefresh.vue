<template>
  <van-pull-refresh head-height="60" v-model="isLoading" @refresh="onRefresh" loosing-text=" " pulling-text="" loading-text="">
    <template #loading>
      <div class="load_box">
        <van-loading color="#e54427" size="26px"/>
      </div>
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
          this.$emit('refresh')
        }, 2000)
      }
    }
  }

</script>

<style>
.load_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  /* padding: 10px; */
  margin: 10px auto;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
}
</style>
