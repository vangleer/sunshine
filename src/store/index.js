import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '未登录'
    },
    showUserPop: false // 显示隐藏用户详情框
  },
  mutations: {
    showUserinfo(state, opt) {
      state.showUserPop = !state.showUserPop
    },
    changeUserInfo(state, user) {
      state.userInfo = user
    }
  },
  actions: {},
  modules: {}
})
