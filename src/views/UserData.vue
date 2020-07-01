<template>
  <div class="user_data">
    <!-- 头部导航 -->
    <van-nav-bar title="个人资料" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" :fixed="true" />
    <!-- 内容 -->
    <div class="content">
      <div class="icon_box flex_center">
        <!-- <div class="icon flex_center"></div> -->
        <div class="user_icon" v-if="imgUrl">
          <img :src="imgUrl" alt="">
        </div>
        <van-uploader v-else :after-read="handleReadAfter">
          <van-button class="flex_center" style="height:100px;width:100px;" round type="plain">
            <span class="iconfont icon-user"></span>
            <div class="photo">
              <van-icon name="photograph" />
            </div>
          </van-button>
        </van-uploader>
      </div>
      <div class="box">
        <div class="title">我的信息</div>
        <div class="list">
          <van-cell title="昵称" :value="userInfo.nickname" is-link
            @click="changeRouter({path:'/editUser',title:'昵称',info:userInfo.nickname})" />
          <van-cell title="性别" :value="userInfo.gender" is-link @click="showSex=true" />
          <van-cell title="身份" :value="userInfo.identity" @click="showIdentity=true" is-link />
          <van-cell title="生日" :value="userInfo.birthday" is-link @click="showBirthday=true" />
          <van-cell title="地区" :value="userInfo.city" is-link @click="showCity=true" />
          <van-cell title="个性签名" :value="userInfo.signature" is-link
            @click="changeRouter({path:'/editUser',title:'个性签名',info:userInfo.signature})" />
        </div>
      </div>
    </div>
    <!-- 性别编辑框 -->
    <van-action-sheet v-model="showSex" description="请选择选择性别" cancel-text="取消" :actions="sexActions"
      @select="sexSelect" />

    <!-- 身份编辑 -->
    <van-action-sheet v-model="showIdentity" description="请选择身份" cancel-text="取消" :actions="identityAction"
      @select="identitySelect" />

    <!-- 生日选择 -->
    <van-popup v-model="showBirthday" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate"
        @confirm="handleBirthConfirm" @cancel="showBirthday=false" />
    </van-popup>

    <!-- 地区选择 -->
    <van-popup v-model="showCity" position="bottom">
      <van-picker show-toolbar :columns="areaList" @confirm="onConfirm" @cancel="showCity=false" />
    </van-popup>
  </div>
</template>

<script>
  import area from '../assets/vant/area.js'
  export default {
    created() {
      this.areaList = area
      this.currentDate = new Date(this.userInfo.birthday)
    },
    data() {
      return {
        // imgUrl: require('../assets/images/user2.jpg'),
        imgUrl: '',
        userInfo: {
          nickname: '小通',
          gender: '男',
          identity: '上班',
          birthday: '1996-04-04',
          city: '天津',
          signature: '英语学习者'
        },
        areaList: {},
        // 所有性别
        sexActions: [{
          name: '男'
        }, {
          name: '女'
        }, {
          name: '不显示'
        }],
        // 所有身份
        identityAction: [{
          name: '上班族'
        }, {
          name: '上学'
        }],
        minDate: new Date(1970, 0, 1), // 最小时间
        maxDate: new Date(), // 最大时间
        currentDate: '', // 当前时间
        showSex: false, // 性别编辑
        showIdentity: false, // 身份编辑
        showBirthday: false, // 生日编辑
        showCity: false // 城市编辑
      }
    },
    methods: {
      handleReadAfter(file) {
        this.imgUrl = file.content
      },
      changeRouter(data) {
        this.$router.push({
          path: data.path,
          query: {
            title: data.title,
            info: data.info
          }
        })
      },
      // 确定选择地区
      onConfirm(value, index) {
        this.userInfo.city = value[0] + value[1]
        this.showCity = false
      },
      // 选择性别
      sexSelect(item) {
        // console.log(item.name)
        this.userInfo.gender = item.name
        this.showSex = false
      },
      // 选择身份
      identitySelect(item) {
        //  console.log(item.name)
        this.userInfo.identity = item.name
        this.showIdentity = false
      },
      // 选择生日
      handleBirthConfirm(date) {
        const y = date.getFullYear()
        const m = (date.getMonth() + 1).toString().padStart(2, '0')
        const d = date.getDate().toString().padStart(2, '0')
        const full = `${y}-${m}-${d}`
        this.userInfo.birthday = full
        console.log(full)
        this.showBirthday = false
      }
    }
  }

</script>

<style lang="less" scoped>
  .content {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
  }

  .icon_box {
    position: relative;
    width: 100%;
    height: 300px;

    .flex_center {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #eee9ef;

      .iconfont {
        font-size: 50px;
        color: #fff;
      }

      .photo {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        width: 28px;
        bottom: 0px;
        right: 0;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }

  .user_icon {
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 360px;
    background-color: #fff;

    .title {
      padding: 12px;
      background-color: #fafafa;
    }
  }

</style>
