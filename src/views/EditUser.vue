<template>
  <div class="edit">
    <van-nav-bar :title="title" :border="false" left-arrow @click-left="$router.back()">
      <template #right>
        <van-button size="mini" color="#ef6852" :disabled="isDisabled" @click="handleSubmit">完成</van-button>
      </template>
    </van-nav-bar>

    <div class="content">
      <textarea v-model="message"></textarea>
      <span class="num">2&nbsp;/&nbsp;50</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '编辑',
        message: '小通'
      }
    },
    computed: {
      isDisabled() {
        return this.message.length === 0
      }
    },
    activated() {
      this.title = this.$route.query.title
      this.message = this.$route.query.info
    },
    methods: {
      handleSubmit() {
        console.log(this.message)
      }
    }
  }

</script>

<style lang="less" scoped>
  .edit {
    background-color: #f9f9f9;
    width: 100%;
    height: 100vh;
  }

  .content {
    position: relative;
    margin-top: 10px;
    height: 120px;

    textarea {
      width: 100%;
      border: 0;
      resize: none;
      height: 100%;
      // border-radius: 10px;
      padding: 12px;
      color: #21242b;
      font-size: 14px;
    }

    .num {
      position: absolute;
      right: 24px;
      bottom: 10px;
      color: #d2d2d2;
      font-size: 14px;
      font-weight: 700;
    }
  }

</style>
