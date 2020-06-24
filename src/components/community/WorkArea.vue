<template>
  <div class="work_area">
    <MyScroll>
      <div class="play_list">
        <WaterFull ref="waterFill"></WaterFull>
      </div>
    </MyScroll>
  </div>
</template>

<script>
  import WaterFull from './WaterFull'
  import MyScroll from './Scroll'
  export default {
    components: {
      WaterFull,
      MyScroll
    },
    data() {
      return {
        waterList: [{
            cover: require('../../assets/images/user.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 200
          },
          {
            cover: require('../../assets/images/lun1.jpeg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 160
          },
          {
            cover: require('../../assets/images/lun2.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 240
          },
          {
            cover: require('../../assets/images/lun3.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 250
          },
          {
            cover: require('../../assets/images/lun4.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 120
          },
          {
            cover: require('../../assets/images/lun5.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 160
          },
          {
            cover: require('../../assets/images/study1.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 200
          },
          {
            cover: require('../../assets/images/study2.jpg'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 180
          },
          {
            cover: require('../../assets/images/study3.png'),
            id: 1,
            isLiked: '23',
            likeCount: 0,
            name: '小小裴',
            photo: require('../../assets/images/user2.jpg'),
            title: '#自由穿搭我在行',
            width: 100,
            height: 220
          }
        ]
      }
    },
    mounted() {
      this.$refs.waterFill.handleLoad(this.waterList)
    }
  }

</script>

<style lang="less" scoped>
  .rec_topic {
    width: 100%;

    .top {
      padding: 15px 10px;
    }
  }

  .play_list {
    padding-bottom: 20px;
  }

</style>
