<template>
  <!-- 登录注册页面 -->
  <!-- <div class="login" :style="{backgroundImage:'url('+loginBg+')'}"> -->
  <div class="login">
    <van-nav-bar :fixed="true" style="background-color: rgba(0,0,0,0);" :border="false" z-index="100"
      @click-left="$router.back()">
      <template #left>
        <span class="iconfont icon-zuo"></span>
      </template>
    </van-nav-bar>

    <div class="box">
      <div class="title">
        <span :class="type===0?'active':''" @click="changeType(0)">登录</span>
        <span :class="type===1?'active':''" @click="changeType(1)">注册</span>
      </div>

      <div class="input_box">
        <div class="item">
          <p :class="showName?'active':'de'">用户名</p>
          <input v-model="formData.username" type="text" @focus="handleFocus('showName','username')"
            @blur="handleBlur('showName','username')">
        </div>
        <div class="item">
          <p :class="showPwd?'active':'de'">密码</p>
          <input v-model="formData.password" type="text" @focus="handleFocus('showPwd','password')"
            @blur="handleBlur('showPwd','password')">
        </div>

        <div class="item code" v-show="type===1">
          <p :class="showCode?'active':'de'">验证码</p>
          <input v-model="formData.code" type="text" @focus="handleFocus('showCode','code')"
            @blur="handleBlur('showCode','code')">
          <img src="../assets/images/bg1.jpeg" alt="">
        </div>

        <!-- 按钮 -->
        <div class="login_btn">
          <span @click="handleSubmit">{{type===0?'登录':'注册'}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: 0, // 是登录0 还是注册1
        showName: false,
        showPwd: false,
        showCode: false,
        formData: {
          username: '',
          password: '',
          code: ''
        },
        loginBg: require('../assets/images/login_bg2.jpg')
      }
    },
    methods: {
      changeType(type) {
        this.type = type
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
      handleSubmit() {
        console.log(this.formData)
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 90vw;
    height: 70vh;
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
      }

      p {
        width: 100%;
        height: 30px;
        color: @grayColor;
        transition: transform 0.3s;
        transform: translateY(0px);
      }

      p.active {
        transform: translateY(-30px);
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #ab27ff, #ff2764);
      }
    }

    .code {
      img {
        width: 120px;
        height: 22px;
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
