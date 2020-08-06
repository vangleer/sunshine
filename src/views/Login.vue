<template>
  <!-- 登录注册页面 -->
  <!-- <div class="login" :style="{backgroundImage:'url('+loginBg+')'}"> -->
  <div class="login">
    <van-nav-bar :fixed="true" style="background-color: rgba(0,0,0,0);" :border="false" z-index="100"
      @click-left="$router.push('/')">
      <template #left>
        <span class="iconfont icon-zuo"></span>
      </template>
    </van-nav-bar>

    <div class="box">
      <div class="title">
        <span :class="type === 0 ? 'active' : ''" @click="changeType(0)">登录</span>
        <span :class="type === 1 ? 'active' : ''" @click="changeType(1)">注册</span>
      </div>

      <div class="input_box">
        <div class="item" :class="showName ? 'active' : 'de'">
          <p>手机号</p>
          <input v-model="formData.mobile" type="text" @focus="handleFocus('showName', 'mobile')"
            @blur="handleBlur('showName', 'mobile')" />
        </div>
        <div class="item" :class="showPwd ? 'active' : 'de'">
          <p>密码</p>
          <input v-model="formData.password" type="text" @focus="handleFocus('showPwd', 'password')"
            @blur="handleBlur('showPwd', 'password')" />
        </div>

        <!-- <div class="item code" v-show="type===1"> -->
        <div class="item code" :class="showCode ? 'active' : 'de'">
          <p>验证码</p>
          <input v-model="formData.code" type="text" @focus="handleFocus('showCode', 'code')"
            @blur="handleBlur('showCode', 'code')" />
          <!-- <embed class="img" :src="codeUrl" @click="getCode" type="image/svg+xml" /> -->
          <img class="img" @click="getCode" :src="codeUrl" alt="" />
        </div>

        <!-- 按钮 -->
        <div class="login_btn">
          <span @click="handleSubmit">{{ type === 0 ? '登录' : '注册' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from '../config/index'
  export default {
    data() {
      return {
        type: 0, // 是登录0 还是注册1
        showName: false,
        showPwd: false,
        showCode: false,
        formData: {
          mobile: '',
          password: '',
          code: ''
        },
        codeUrl: BASE_URL + 'user/getCode?time=' + Date.now(),
        // codeUrl: this.img_url,
        loginBg: require('../assets/images/login_bg2.jpg')
      }
    },
    activated() {
      this.getCode()
    },
    methods: {
      changeType(type) {
        this.refreshForm()
        this.type = type
      },
      // 刷新表单
      refreshForm() {
        this.formData.mobile = ''
        this.formData.password = ''
        this.formData.code = ''
        this.showName = false
        this.showPwd = false
        this.showCode = false
      },
      handleFocus(opt, type) {
        if (this.formData[type].trim().length === 0) {
          this[opt] = true
        }
      },
      handleBlur(opt, type) {
        if (this.formData[type].trim().length > 0) {
          this[opt] = true
        } else {
          this[opt] = false
        }
      },
      async getCode() {
        this.codeUrl = BASE_URL + 'user/getCode?time=' + Date.now()
      },
      async handleSubmit() {
        let res
        // 登录
        if (this.type === 0) {
          res = await this.$http.post('/user/login', this.formData)
        } else {
          // 注册
          res = await this.$http.post('/user/register', this.formData)
        }
        if (res.status === 0) {
          this.$message({
            type: 'warning',
            message: res.msg,
            duration: 1000
          })
        } else {
          this.$message({
            type: 'success',
            message: res.msg,
            duration: 1000
          })
          if (this.type === 0) {
            // 把手机号存到localStorage
            localStorage.setItem('mobile', res.data.mobile)
            this.$store.dispatch('getUserInfo')
            this.$router.back()
          } else {
            this.type = 0
          }
          // 清空数据
          this.refreshForm()
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  .login {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    // background-color: @grayBgColor;
    background: linear-gradient(to right bottom, #33bdfe, #b225ff);

    .icon-zuo {
      font-size: 26px;
      color: #fff;
      font-weight: 700;
    }
  }

  .box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 90vw;
    height: 460px;
    max-width: 350px;

    border-radius: 16px;
    padding: 12px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 100%;

      span {
        position: relative;
        font-size: 20px;
        font-weight: 700;
        padding: 12px 16px;
      }

      .active {
        color: @themeColor2;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background-color: @themeColor2;
          border-radius: 3px;
        }
      }
    }
  }

  .input_box {
    width: 100%;

    .item {
      position: relative;
      width: 100%;
      height: 40px;
      padding: 8px;
      margin: 40px 0;

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;
        padding: 8px;
        background-color: transparent;
        caret-color: tomato;
      }

      p {
        width: 100%;
        height: 30px;
        color: @grayColor;
        transition: transform 0.3s;
        transform: translateY(0px);
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        // background-size: 0px 0px;
        background: linear-gradient(to right, #ab27ff, #ff2764);
        transition: width 0.3s;
      }
    }

    .active {
      p {
        transform: translateY(-30px);
      }

      // &::after {
      //   width: 100%;
      // }
    }

    .code {
      input {
        width: 60%;
      }

      .img {
        width: 120px;
        height: 36px;
        position: absolute;
        right: 0;
        bottom: 8px;
      }
    }
  }

  // 登录按钮
  .login_btn {
    position: absolute;
    bottom: 50px;
    width: 92%;
    height: 36px;

    span {
      display: inline-block;
      width: 100%;
      height: 36px;
      border-radius: 10px;
      border-radius: 40px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-weight: 700;
      background: linear-gradient(to right, #33bdfe, #b225ff);
    }
  }

</style>
