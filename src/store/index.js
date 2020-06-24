import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showUserPop: false // 显示隐藏用户详情框
  },
  mutations: {
    showUserinfo(state, opt) {
      state.showUserPop = !state.showUserPop
    }
  },
  actions: {},
  modules: {}
})
