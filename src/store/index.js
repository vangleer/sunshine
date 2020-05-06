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
    },
    findData: {
      nav: [
        { id: '001', title: '话题', imgSrc: require('../assets/images/huati.png') },
        { id: '002', title: '词汇', imgSrc: require('../assets/images/words.png') },
        { id: '003', title: '短语', imgSrc: require('../assets/images/words.png') }
      ],
      new: [
        { id: '100', imgSrc: require('../assets/images/find_pro1.jpg'), loveNum: 13 },
        { id: '101', imgSrc: require('../assets/images/find_pro1.jpg'), loveNum: 36 },
        { id: '102', imgSrc: require('../assets/images/find_pro1.jpg'), loveNum: 123 },
        { id: '103', imgSrc: require('../assets/images/find_pro1.jpg'), loveNum: 363 },
        { id: '104', imgSrc: require('../assets/images/find_pro1.jpg'), loveNum: 386 }
      ],
      users: [
        { id: '2001', name: '黄万通', fans: 2000, works: 60, src: require('../assets/images/bg.jpg') },
        { id: '2002', name: '裴张岩', fans: 2000, works: 60, src: require('../assets/images/bg.jpg') },
        { id: '2003', name: '李赛叶', fans: 2000, works: 60, src: require('../assets/images/bg.jpg') }
      ],
      cates: [
        {
          id: '1001',
          title: '吐槽大会: 城市的堵车',
          list: [
            {
              id: '8008',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            },
            {
              id: '8009',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            },
            {
              id: '80010',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            }
          ]
        },
        {
          id: '1002',
          title: '可爱的格子们',
          list: [
            {
              id: '8008',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            },
            {
              id: '8009',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            },
            {
              id: '80010',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            }
          ]
        },
        {
          id: '1003',
          title: '接孩子放学',
          list: [
            {
              id: '8008',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            },
            {
              id: '8009',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            },
            {
              id: '80010',
              src: require('../assets/images/find_pro1.jpg'),
              love: 16
            }
          ]
        }
      ]
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
