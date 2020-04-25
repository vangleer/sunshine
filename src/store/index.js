import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeData: {
      list: [
        {
          id: 0,
          name: '黄万通',
          numbers: { loveNum: 454, commentNum: 103, shareNum: 14 },
          play_detail: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          text: 'So l am putting on this lipstick',
          isPlay: false
        }
        // },
        // {
        //   id: 1,
        //   name: '黄万通',
        //   numbers: { loveNum: 4540, commentNum: 1030, shareNum: 140 },
        //   play_detail: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
        //   text: 'So l am putting on this lipstick',
        //   isPlay: false
        // },
        // {
        //   id: 2,
        //   name: '黄万通',
        //   numbers: { loveNum: 184, commentNum: 133, shareNum: 143 },
        //   play_detail: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
        //   text: 'So l am putting on this lipstick',
        //   isPlay: false
        // },
        // {
        //   id: 3,
        //   name: '黄万通',
        //   numbers: { loveNum: 120, commentNum: 13, shareNum: 5 },
        //   play_detail: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
        //   text: 'So l am putting on this lipstick',
        //   isPlay: false
        // }
      ],
      isShowText: false
    }
  },
  mutations: {
    showText(state) {
      state.homeData.isShowText = !state.homeData.isShowText
    },
    // 点赞加1
    increaseLove(state, data) {
      state.homeData.list.some(item => {
        if (item.id === data) {
          item.numbers.loveNum += 1
          return true
        }
      })
    },
    // 取消点赞
    decreaseLove(state, data) {
      state.homeData.list.some(item => {
        if (item.id === data) {
          item.numbers.loveNum -= 1
          return true
        }
      })
    },
    playClick(state, id) {
      state.homeData.list.some(item => {
        if (item.id === id) {
          item.isPlay = !item.isPlay
          return true
        }
      })
    }
  },
  actions: {},
  modules: {}
})
