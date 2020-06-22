<template>
  <div class="context">
    <!-- 头部导航 -->
    <home-header :active="0"></home-header>

    <!-- 轮播组件 -->
    <div class="yu_swiper">
      <van-swipe class="context_swiper" vertical height="100%">
        <van-swipe-item class="swiper-item" v-for="(item,index) in list" :key="index">
          <!-- 视频标签 -->
          <img @click="handlePlayClick" class="swipe_img" :src="item.imgSrc" />
          <!-- 底部组件 -->
          <Tabbar></Tabbar>
          <!-- 右边组件 -->
          <SideNav @showCaption="handleShowCaption"></SideNav>
          <!-- 字幕 -->
          <div class="centence" v-show="showCaption">
            {{item.centence}}
          </div>
          <!-- 用户姓名和话题 -->
          <div class="conver_box">
            <div class="word flex_bea">
              <span class="tag" :style="{backgroundColor:item.color}">{{item.tag}}</span>{{item.words}}
            </div>
            <div class="conver">
              <div class="username">@ {{item.username}}</div>
              <div class="topic">{{item.topic}}</div>
            </div>
          </div>
          <!-- 播放按钮 -->
          <div class="play_btn" v-show="isPlay" @click.stop="handlePlayClick">
            <span class="iconfont icon-bofang"></span>
          </div>
        </van-swipe-item>
      </van-swipe>

    </div>
  </div>
</template>

<script>
  import Header from '../components/home/Header'
  import Tabbar from '../components/home/Tabbar.vue'
  import SideNav from '../components/home/SideNav.vue'
  export default {
    components: {
      'home-header': Header,
      Tabbar,
      SideNav
    },
    data() {
      return {
        title: 'Hello',
        isPlay: false,
        showCaption: false,
        list: [{
            id: 1,
            imgSrc: require('../assets/images/lun5.jpg'),
            username: '黄万通',
            centence: 'english is an international language, do you think about it.',
            words: '先来5000个句子再说',
            tag: '黄',
            color: '#c518f0',
            topic: '13aklshdfksjab',
            shareList: [{
                id: 1,
                title: '喜欢',
                icon: 'icon-love',
                num: 1369,
                en_name: 'love'
              },
              {
                id: 2,
                title: '消息',
                icon: 'icon-message_1',
                num: 52,
                en_name: 'message'
              },
              {
                id: 3,
                title: '分享',
                icon: 'icon-zhuanfa',
                num: 152,
                en_name: 'share'
              }
            ]
          },
          {
            id: 2,
            imgSrc: require('../assets/images/lun4.jpg'),
            username: '黄万通',
            centence: 'english is an international language, do you think about it.',
            words: '先来5000个句子再说',
            topic: '13aklshdfksjab',
            tag: '裴',
            color: '#2df1d3',
            shareList: [{
                id: 1,
                title: '喜欢',
                icon: 'icon-love',
                num: 1369,
                en_name: 'love'
              },
              {
                id: 2,
                title: '消息',
                icon: 'icon-message_1',
                num: 52,
                en_name: 'message'
              },
              {
                id: 3,
                title: '分享',
                icon: 'icon-zhuanfa',
                num: 152,
                en_name: 'share'
              }
            ]
          },
          {
            id: 3,
            imgSrc: require('../assets/images/lun3.jpg'),
            username: '黄万通',
            centence: 'english is an international language, do you think about it.',
            words: '先来5000个句子再说',
            topic: '13aklshdfksjab',
            tag: '男',
            color: '#18f045',
            shareList: [{
                id: 1,
                title: '喜欢',
                icon: 'icon-love',
                num: 1369,
                en_name: 'love'
              },
              {
                id: 2,
                title: '消息',
                icon: 'icon-message_1',
                num: 52,
                en_name: 'message'
              },
              {
                id: 3,
                title: '分享',
                icon: 'icon-zhuanfa',
                num: 152,
                en_name: 'share'
              }
            ]
          },
          {
            id: 4,
            imgSrc: require('../assets/images/lun2.jpg'),
            username: '黄万通',
            centence: 'english is an international language, do you think about it.',
            words: '先来5000个句子再说',
            topic: '13aklshdfksjab',
            tag: '女',
            color: '#f56437',
            shareList: [{
                id: 1,
                title: '喜欢',
                icon: 'icon-love',
                num: 1369,
                en_name: 'love'
              },
              {
                id: 2,
                title: '消息',
                icon: 'icon-message_1',
                num: 52,
                en_name: 'message'
              },
              {
                id: 3,
                title: '分享',
                icon: 'icon-zhuanfa',
                num: 152,
                en_name: 'share'
              }
            ]
          },
          {
            id: 5,
            imgSrc: require('../assets/images/lun1.jpeg'),
            username: '黄万通',
            centence: 'english is an international language, do you think about it.',
            words: '先来5000个句子再说',
            topic: '13aklshdfksjab',
            tag: '歌',
            color: '#6b4cd6',
            shareList: [{
                id: 1,
                title: '喜欢',
                icon: 'icon-love',
                num: 1369,
                en_name: 'love'
              },
              {
                id: 2,
                title: '消息',
                icon: 'icon-message_1',
                num: 52,
                en_name: 'message'
              },
              {
                id: 3,
                title: '分享',
                icon: 'icon-zhuanfa',
                num: 152,
                en_name: 'share'
              }
            ]
          }
        ]
      }
    },
    methods: {
      // 播放功能
      handlePlayClick() {
        this.isPlay = !this.isPlay
      },
      // 是否显示字幕
      handleShowCaption(showCaption) {
        this.showCaption = showCaption
        console.log('yes')
      }
    }
  }

</script>

<style lang="less" scoped>
  .yu_swiper {
    width: 100%;
    height: 100%;
  }

  .context {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #fff;
    font-size: 13px;
  }

  .context_swiper {
    width: 100%;
    height: 100%;

    .swiper-item {
      width: 100%;
      // height: 100%;
      background-color: #fc3530;
    }

    .swipe_img {
      width: 100%;
      height: 100%;
    }
  }

  .conver_box {
    position: absolute;
    bottom: 80px;
    left: 13px;
    width: 150px;
    height: 100px;

    .word {
      padding: 8px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.3);
    }

    .conver {
      margin-top: 13px;
      padding-left: 6px;

      .username {
        font-weight: 700;
        margin-bottom: 8px;
      }
    }
  }

  .centence {
    position: absolute;
    left: 50%;
    top: 55%;
    width: 180px;
    transform: translateX(-50%);
    text-align: center;
    line-height: 25px;
    font-size: 15px;
  }

  // 播放按钮
  .play_btn {
    position: absolute;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.7);

    .icon-bofang {
      font-size: 40px;
    }
  }

</style>
