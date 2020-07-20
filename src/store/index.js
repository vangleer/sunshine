import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '未登录'
    },
    // 编辑用户名
    nickname: '',
    // 编辑个性签名
    signatrue: '',
    // 提词器内容
    autocueContent: '',
    showUserPop: false // 显示隐藏用户详情框
  },
  mutations: {
    showUserinfo(state, opt) {
      state.showUserPop = !state.showUserPop
    },
    // 修改用户消息
    changeType(state, data) {
      state.userInfo[data.type] = data.message
    },
    changeUserInfo(state, user) {
      state.userInfo = user
    },
    changeContent(state, date) {
      state.autocueContent = date
    }
  },
  actions: {},
  modules: {}
})
