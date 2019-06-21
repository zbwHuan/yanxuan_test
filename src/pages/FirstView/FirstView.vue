<template>
  <div id="firstViewContainer">
    <HeaderSearch>
      <a href="javascript:;" class="logo" slot="left"></a>
      <div class="login" slot="right">登录</div>
    </HeaderSearch>
    <header class="headerContainer">
      <div class="headerTab">
        <ul class="tabList">
          <li class="tabItem active">
            <span>推荐</span>
          </li>
          <li class="tabItem">
            <span>居家生活</span>
          </li>
          <li class="tabItem">
            <span>服饰鞋包</span>
          </li>
          <li class="tabItem">
            <span>美食酒水</span>
          </li>
          <li class="tabItem">
            <span>个护清洁</span>
          </li>
          <li class="tabItem">
            <span>母婴亲子</span>
          </li>
          <li class="tabItem">
            <span>运动旅行</span>
          </li>
          <li class="tabItem">
            <span>数码家电</span>
          </li>
          <li class="tabItem">
            <span>全球特色</span>
          </li>
        </ul>
        <div class="toggle">
          <div class="icon"></div>
        </div>
      </div>
    </header>

    <div class="mainContainer">
      <div class="mainWrap">
        <div class="main">
          <div class="swiper-container" ref="swiperWrap">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in focusList" :key="index">
                <img :src="item.picUrl">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <ul class="g-grow">
            <li class="item" v-for="(item, index) in policyDescList" :key="index">
              <i class="iconfont" :style="`background-image:url(${item.icon});`"></i>
              <span>{{item.desc}}</span>
            </li>
          </ul>
          <div class="kingkongModul">
            <a
              class="kingkongItem"
              v-for="(item, index) in kingKongModule.kingKongList"
              :key="index"
              :href="item.schemeUrl"
            >
              <div class="icon">
                <img :src="item.picUrl">
              </div>
              <div class="txt">{{item.text}}</div>
            </a>
          </div>
          <div class="m-indexBigPromotionModule">
            <div class="floor floorTop">
              <div class="promGood">
                <img src="http://yanxuan.nosdn.127.net/c7b29180b9602593004a9c24eba41c0c.png">
                <span>$2333</span>
              </div>
            </div>
            <Split/>
            <div class="floor newPerson">
              <div class="title">
                <span>-新人专享礼-</span>
              </div>
              <a href="javascript:;" class="left">
                <p>新人专享礼包</p>
                <div>
                  <img src="../../common/images/15yuan.png">
                </div>
              </a>

              <div class="right">
                <p>福利社</p>
                <p>今日特价</p>
                <div>
                  <img src="../../common/images/15yuan.png">
                </div>
              </div>
              <div class="right">
                <p>福利社</p>
                <p>今日特价</p>
                <div>
                  <img src="../../common/images/15yuan.png">
                </div>
              </div>
            </div>
            <Split/>
            <div class="floor tagList">
              <Title :name="'品牌制造商直供'" :isShow="true"/>
              <ul class="list">
                <li
                  class="listItem"
                  v-for="(item, index) in tagList"
                  :key="index"
                  :style="'background-image: url(' + item.picUrl + ')'"
                >
                  <div class="listItemWarp">
                    <h4 class="name">{{item.extra.materialName}}</h4>
                    <div>
                      <span class="price">{{item.floorPrice}}</span>
                      <span>元起</span>
                      <i v-if="item.newOnShelf">上新</i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Split/>
            <div class="floor categoryHotSellModule">
              <Title :name="'类目热销榜'" :isShow="false"/>
              <ul class="list">
                <li
                  class="listItem"
                  v-for="(item, index) in categoryList"
                  :key="index"
                  :style="'background-image: url(' + item.picUrl + ')'"
                >
                  <div class="name">
                    <span>{{item.categoryName}}</span>
                  </div>
                  <div class="imgWarp">
                    <img :src="item.picUrl">
                  </div>
                </li>
              </ul>
            </div>
            <Split/>
            <div class="floor popularItemList" v-if="popularItemList.length">
              <Title :name="'人气推荐'" :isShow="true"/>
              <div class="firstItem">
                <img class="img" :src="popularItemList[0].listPicUrl">
                <div class="info">
                  <div>
                    <span
                      class="discounts"
                      v-for="(tag, index) in popularItemList[0].itemTagList"
                      :key="index"
                    >{{tag.name}}</span>
                  </div>
                  <p class="name">{{popularItemList[0].name}}</p>
                  <p class="simpleDesc">{{popularItemList[0].simpleDesc}}</p>
                  <span class="price">¥{{popularItemList[0].counterPrice}}</span>
                </div>
              </div>
              <GoodList :goodList="popularItemList.slice(1)"/>
            </div>
            <Split/>
            <div class="floor flashSaleModule">
              <Title :name="'限时购'" :isShow="true"/>
              <GoodList :goodList="flashSaleModule.itemList"/>
            </div>
            <Split/>
            <div class="floor newItemList">
              <Title :name="'新品首发'" :isShow="true"/>
              <GoodList :goodList="newItemList"/>
            </div>
            <Split/>
          </div>
          <ul>
            <li v-for="(category, index) in categoryModule" :key="index">
              <Category :category="category"/>
            </li>
          </ul>
          <footer class="footer">
            <div class="link">
              <a href="https://m.you.163.com/downloadapp">下载APP</a>
              <a href="https://you.163.com/">电脑版</a>
            </div>
            <div class="info">
              <p>网易公司版权所有 © 1997-2019</p>
              <p>食品经营许可证：JY13301080111719</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

import GoodList from '../../components/GoodList/GoodList'
import Title from '../../components/Title/Title'
import Category from '../../components/Category/Category'

export default {
  components: {
    GoodList,
    Title,
    Category
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      policyDescList: state => state.home.policyDescList,
      kingKongModule: state => state.home.kingKongModule,
      focusList: state => state.home.focusList,
      tagList: state => state.home.tagList,
      categoryList: state => state.home.categoryList,
      popularItemList: state => state.home.popularItemList,
      flashSaleModule: state => state.home.flashSaleModule,
      newItemList: state => state.home.newItemList,
      categoryModule: state => state.home.categoryModule
    })
  },
  mounted() {
    this.$store.dispatch('getHomeData').then(() => {
      this._initScroll()
      this._initSwiper()
    })
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll('.headerTab', {
        click: true,
        scrollX: true
      })
      this.mainScroll = new BScroll('.mainWrap', {
        click: true
      })
    },

    _initSwiper() {
      this.swiper = new Swiper(this.$refs.swiperWrap, {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

#firstViewContainer {
  width: 100%;
  height: 100%;
  padding: 88px 0 98px;

  .logo {
    display: inline-block;
    width: 138px;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    font-family: '楷体';
    color: black;
    margin-right: 20px;
    background-image: url('../../common/images/logo.png');
  }

  .login {
    width: 74px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #b4282d;
    border: 1px solid #b4282d;
    border-radius: 5px;
    font-size: 24px;
    margin-left: 16px;
  }

  .headerContainer {
    position: relative;
    clearFix();
  }

  .headerTab {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 99;
    width: 100%;
    height: 60px;

    .tabList {
      padding: 0 30px;
      display: flex;
      width: 1460px;
      height: 60px;
      justify-content: space-between;

      .tabItem {
        height: 60px;

        span {
          box-sizing: border-box;
          display: inline-block;
          color: #333333;
          font-size: 28px;
          padding: 0 16px;
          margin-left: 20px;
          height: 60px;
          line-height: 60px;

          &:first-child {
            margin-left: 0;
          }
        }

        &.active span {
          border-bottom: 4px solid #b4282d;
          color: #b4282d;
        }
      }
    }

    .toggle {
      position: fixed;
      right: 0;
      top: 88px;
      z-index: 3;
      background-color: #fff;
      width: 100px;
      height: 60px;
      line-height: 60px;
      text-align: center;

      .icon {
        width: 30px;
        height: 30px;
        margin: 15px auto;
        background-image: url('../../common/images/toggle.png');
      }
    }
  }

  .mainContainer {
    width: 100%;
    height: 100%;
    padding-top: 60px;

    .mainWrap {
      height: 100%;
    }

    .swiper-container {
      width: 100%;
      height: 370px;

      .swiper-wrapper {
        width: 100%;
        height: 370px;

        .swiper-slide {
          width: 100%;
          height: 370px;

          img {
            width: 100%;
            height: 370px;
          }
        }
      }
    }

    .g-grow {
      display: flex;
      justify-content: space-around;
      heght: 72px;
      line-height: 72px;

      .item {
        color: #b4282d;

        span {
          vertical-align: middle;
          margin-left: 8px;
        }

        i {
          display: inline-block;
          width: 32px;
          height: 32px;
          background-size: 100%;
          vertical-align: middle;
        }
      }
    }

    .kingkongModul {
      background-color: #f3f5f7;
      overflow: hidden;
      padding-bottom: 32px;

      .kingkongItem {
        float: left;
        margin: 10px 20px 9px;

        .icon {
          img {
            width: 110px;
            height: 110px;
          }
        }

        .txt {
          color: #333;
          width: 110px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          margin-top: 10px;
        }
      }
    }

    .m-indexBigPromotionModule {
      width: 100%;

      .floor {
        width: 100%;
        padding: 0 30px 30px;
        background-color: #fff;
      }

      .floorTop {
        position: relative;
        width: 100%;
        height: 280px;
        background-image: url('https://yanxuan.nosdn.127.net/61bb38ff63f456706dc36e2446d808d5.gif?imageView&quality=75'); // yanxuan.nosdn.127.net/61bb38ff63f456706dc36e2446d808d5.gif?imageView&quality=75);
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .promGood {
          position: absolute;
          right: 10%;
          top: 14%;
          width: 168px;
          height: 168px;

          img {
            width: 100%;
            height: 100%;
          }

          span {
            position: absolute;
            left: 50%;
            bottom: 10%;
            color: #fff;
            margin-left: -76px;
            width: 152px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background-color: #f48f18;
            border-radius: 16px;
          }
        }
      }

      .newPerson {
        overflow: hidden;

        .title {
          width: 100%;
          height: 90px;
          line-height: 90px;
          font-size: 32px;
          text-align: center;
        }

        .left {
          display: block;
          float: left;
          width: 343px;
          height: 434px;
          background-color: rgb(249, 233, 207);
          margin-right: 4px;

          p {
            padding: 30px 0 0 30px;
            color: #333;
            font-size: 32px;
          }

          div {
            margin: 37px 42px;

            img {
              width: 258px;
            }
          }
        }

        .right {
          float: right;
          position: relative;
          padding: 20px 0 0 30px;
          margin-bottom: 4px;
          height: 215px;
          width: 343px;
          background-color: rgb(249, 233, 207);
          box-sizing: border-box;

          img {
            width: 200px;
            height: 200px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }

      .tagList {
        .list {
          background-size: 100% 100%;
          background-repeat: no-repeat;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .listItem {
            width: 343px;
            height: 260px;
            margin-bottom: 4px;

            .listItemWarp {
              padding-top: 33px;

              .name {
                font-size: 28px;
                text-align: center;
                margin-bottom: 3px;
              }

              div {
                text-align: center;

                span {
                  font-size: 24px;
                }

                i {
                  font-size: 24px;
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }

      .categoryHotSellModule {
        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .listItem {
            position: relative;
            width: 165px;
            height: 180px;
            margin-bottom: 10px;
            background-color: rgb(245, 245, 245);

            .name {
              height: 36px;
              line-height: 36px;
              font-size: 24px;
              color: #333;
              margin-top: 20px;
              text-align: center;
            }

            img {
              width: 120px;
              height: 120px;
              margin: 2px 10px 0 23px;
            }

            &:first-child, &:nth-child(2) {
              width: 340px;
              height: 200px;
              background-color: rgb(249, 243, 228);

              .name {
                font-size: 28px;
                margin-top: 66px;
                padding-left: 24px;
                text-align: left;

                span {
                  position: relative;

                  &::after {
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 53px;
                    width: 48px;
                    height: 4px;
                    background-color: #333;
                  }
                }
              }

              .imgWarp {
                position: absolute;
                top: 0;
                right: 0;
                width: 200px;
                height: 200px;
                margin: 0;

                img {
                  width: 200px;
                  height: 200px;
                }
              }
            }
          }
        }
      }

      .popularItemList {
        .firstItem {
          width: 690px;
          height: 280px;
          margin-bottom: 20px;
          background-color: rgb(254, 240, 223);
          display: flex;
          align-items: center;

          .img {
            width: 280px;
            height: 280px;
            margin-right: 30px;
          }

          .info {
            width: 350px;
            height: 160px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .discounts {
              font-size: 20px;
              color: #b4282d;
              border: 1px solid #b4282d;
              margin-bottom: 5px;
              padding: 0 8px;
            }

            .name {
              color: #333;
              font-size: 28px;
            }

            .simpleDesc {
              color: #7f7f7f;
              font-size: 24px;
            }

            .price {
              color: #b4282d;
              font-size: 28px;
            }
          }
        }
      }
    }

    .footer {
      box-sizing: border-box;
      width: 100%;
      height: 244px;
      padding: 54px 20px 28px;
      background-color: #414141;

      .link {
        display: flex;
        justify-content: center;
        margin-bottom: 36px;

        a {
          color: #fff;
          width: 170px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          border: 1px solid #999;

          &:first-child {
            margin-right: 50px;
          }
        }
      }

      .info {
        line-height: 32px;

        p {
          color: #999999;
          font-size: 24px;
          text-align: center;
        }
      }
    }
  }
}
</style>
