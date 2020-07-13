import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '未登录'
    },
    // 提词器内容
    autocueContent: '',
    showUserPop: false // 显示隐藏用户详情框
  },
  mutations: {
    showUserinfo(state, opt) {
      state.showUserPop = !state.showUserPop
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
