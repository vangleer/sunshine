<template>
  <div class="water-fill">
    <template v-if="waterList.length != 0">

      <div class="water-wrapper">
        <!-- <refreshdiv ref="refreshdiv" /> -->
        <div class="water-box">
          <div class="water-sub" v-for="(items,index) in waterList" :key="index">
            <div class="water-item" v-for="(item,index) in items" :key="index">
              <div class="water-top">
                <img :src="item.cover" mode="widthFix" />
                <h3 v-html="item.title"></h3>
                <div class="play_btn flex_center">
                  <span class="iconfont icon-bofang"></span>
                </div>
              </div>
              <div class="water-bottom">
                <div class="water-bottom-item">
                  <div class="img-box">
                    <img class="water-avatar" :src="item.photo" mode="widthFix" />
                  </div>
                  <span class="water-name" v-html="item.name"></span>
                </div>
                <div class="water-bottom-item">
                  <span class="iconfont icon-xihuan"></span>
                  <span v-html="item.likeCount"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="water-none" v-if="waterList.length == 0">
      <img src="../../assets/images/no_more2.png" />
      <span>暂时木有内容呀～～</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'waterFill',
    data() {
      return {
        waterList: [],
        // errorimg: 'this.src="' + require('../../static/img/img_photo_default.png') + '"'
        errorimg: ''
      }
    },
    methods: {
      // 将数组拆分成可使用状态,减少代码
      groupCut(array, subGroupLength) {
        let index = 0
        const newArray = []
        while (index < array.length) {
          newArray.push(array.slice(index, index += subGroupLength))
        }
        return newArray
      },
      handleLoad(arr) {
        // 如果arr存在,即在父组件刷新的值  若不存在就是下拉请求刷新
        if (arr) {
          const length = arr.length
          this.waterList = this.groupCut(arr, length / 2)
        } else {
          console.log('写请求数据接口，将数据赋值给waterList')
        }
        this.$toast('刷新啦')
      }
    }
  }

</script>

<style lang="less">
  .water-fill {
    .water-wrapper {
      .water-box {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        font-size: 0;
        justify-content: space-between;
        background-color: @grayBgColor;
        padding: 10px 5px;

        .water-sub {
          display: flex;
          width: 49%;
          overflow: hidden;
          flex-direction: column;

          .water-item {
            width: 100%;
            border-radius: 6px;
            overflow: hidden;
            background-color: @whiteColor;
            margin-bottom: 10px;

            .water-top {
              position: relative;

              .play_btn {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.3);

                .iconfont {
                  font-size: 10px;
                  color: @whiteColor;
                }
              }

              img {
                width: 100%;
              }

              h3 {
                font-family: 'PingFangHK-Medium';
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                color: @blackCoor;
                span-align: justify;
                margin: 10px;
                .n-ellipsis(2);
              }
            }

            .water-bottom {
              display: flex;
              justify-content: space-between;
              margin: 0 10px 10px 10px;
              font-size: @textSize13;

              .water-bottom-item {
                display: flex;
                align-items: center;

                .img-box {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  overflow: hidden;

                  .water-avatar {
                    width: 10px;
                  }
                }

                .water-name {
                  max-width: 80px;
                  overflow: hidden;
                  white-space: nowrap;
                  span-overflow: ellipsis;
                }

                span {
                  line-height: 16px;
                  font-size: 12px;
                  color: @blackCoor;
                  margin-left: 7px;
                }

                img {
                  width: 14px;
                }
              }
            }
          }
        }
      }
    }

    .water-none {
      position: fixed;
      top: 50px;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 130px;
        height: 130px;
      }

      span {
        padding-top: 20px;
        font-size: @textSize13;
        color: @deepColor;
      }
    }
  }

  //多行文本省略
  .n-ellipsis(@n) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: @n;
    -webkit-box-orient: vertical;
    span-overflow: ellipsis;
    word-break: break-all;
  }

</style>
