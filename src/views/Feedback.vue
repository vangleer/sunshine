<template>
  <div class="settings">
    <!-- 头部导航 -->
    <van-nav-bar title="意见反馈" :fixed="true" :border="false" style="background-color:#fff;" left-arrow
      @click-left="$router.back()">
      <template #right>
        <van-button size="mini" color="#ef6852" :disabled="isDisabled" @click="handleSubmit">提交</van-button>
      </template>
    </van-nav-bar>

    <!-- 内容 -->
    <div class="content">
      <div class="tip">欢迎提出你的意见建议,或英语相关的问题!我们一起打造阳光英语呀!</div>
      <div class="type">
        <div class="title">反馈类型:</div>
        <div class="list">
          <div class="item" v-for="(item,index) in questionList" :key="index" @click="handleSelect(index)">
            <span>{{item.title}}</span>
            <van-icon v-show="currentSelect===index" name="checked" size="18px" color="#f35b5b" />
          </div>
        </div>
      </div>

      <div class="supplement">
        <div class="title">补充说明:</div>
        <div class="text_box">
          <textarea v-model="message" placeholder="请详细描述您遇到的问题,这是对我们产品宝贵的意见或建议"></textarea>
          <div class="num">{{textCount}}&nbsp;/&nbsp;500</div>
        </div>

        <div class="title flex_bea">
          <span>添加截图&nbsp;(方便我们更好的处理你的意见)&nbsp;:</span>
          <span class="num2">{{imgCount}}&nbsp;/&nbsp;4</span>
        </div>
        <div class="img_box">
          <van-uploader v-model="fileList" multiple :max-count="maxCount" upload-icon="plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        maxCount: 4,
        fileList: [],
        currentSelect: 8,
        questionList: [{
            id: 1,
            title: '改进建议'
          },
          {
            id: 2,
            title: '功能异常'
          },
          {
            id: 3,
            title: '内容相关'
          },
          {
            id: 4,
            title: '界面异常'
          },
          {
            id: 5,
            title: '其他问题'
          }
        ]
      }
    },
    computed: {
      textCount() {
        return this.message.length
      },
      imgCount() {
        return this.fileList.length
      },
      isDisabled() {
        return this.message.trim().length === 0
      }
    },
    methods: {
      // 选择问题类型
      handleSelect(index) {
        this.currentSelect = index
      },
      // 点击提交
      handleSubmit() {
        const files = this.fileList.map(item => item.file)
        console.log(files)
        const formData = new FormData()
        formData.append('text', this.message)
        formData.append('files', 1)
        formData.append('type', this.questionList[this.currentSelect].id)
        console.log(formData)
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    padding-top: 60px;
  }

  .tip {
    padding: @padding12;
    font-size: @textSize14;
    color: @deepColor;
  }

  .title {
    padding: 12px;
    background-color: @grayBgColor;
    color: @deepColor;
  }

  .type {
    .list {
      .item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 12px;
        background-color: #fff;
        font-size: 14px;
        border-bottom: 1px solid #f5f3f3;
      }

      .item:last-child {
        border: 0;
      }
    }
  }

  .supplement {
    .text_box {
      position: relative;
      padding: 0 12px;
      background-color: @grayBgColor;
      height: 260px;

      textarea {
        width: 100%;
        border: 0;
        resize: none;
        height: 100%;
        border-radius: 10px;
        padding: @padding12;
        color: @grayColor;
        font-size: 14px;
      }
    }

    .img_box {
      padding: @padding12;
    }

    .num {
      position: absolute;
      right: 24px;
      bottom: 18px;
      color: @grayColor;
      font-size: 14px;
      font-weight: 700;
    }

    .num2 {
      color: @grayColor;
      font-size: 14px;
      font-weight: 700;
    }
  }

</style>
