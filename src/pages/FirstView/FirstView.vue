<template>
  <div id="firstViewContainer">
    <div class="headerContainer">
      <div class="header">
        <a href="javascript:;" class="logo"></a>
        <div class="headerSearch">
          <i class="iconfont"></i>
          <span>搜索商品, 共25113款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
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
    </div>

    <div class="mainContainer">
      <div class="main">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/b97b16feb75f78121c8fab18ae85300c.jpg?imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/60e4ba11fdb8320eda453427bf287639.jpg?imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/a89606c3c2cde5ee374e073bae08af0d.jpg?imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/760406902a34b942a444965e91ff9b2b.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/43f56a433442c235233f32d5ac5aa72f.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/b0ef72b4d2fa40bd378139e9e07a5e2d.jpg?imageView&quality=75&thumbnail=750x0"
              >
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/87afffbd9305868705159c719a368a01.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
              >
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
              <span>$223</span>
            </div>
          </div>
          <div class="floor">
            <img src="../../common/images/huodong.png">
          </div>
          <div class="floor">
            <a v-for="(item, index) in personalShop" :key="index"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import { reqHome } from '../../api'
export default {
  data() {
    return {
      policyDescList: [], // 服务策略
      kingKongModule: {}, // 商品导航
      flashSaleModule: {}, // 限时购
      personalShop: [] // 私人定制
    }
  },
  async mounted() {
    const result = await reqHome()

    if (result.code === 0) {
      this.policyDescList = result.data.policyDescList
      this.kingKongModule = result.data.kingKongModule
      this.flashSaleModule = result.data.flashSaleModule
    }
    this.$nextTick(() => {
      this.mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
      this.scroll = new BScroll('.headerTab', {
        click: true,
        scrollX: true
      })
      this.mainScroll = new BScroll('.mainContainer', {
        click: true
      })
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#firstViewContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .headerContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 148px;
    z-index: 99;
    background-color: #fff;

    .header {
      width: 100%;
      height: 88px;
      padding: 16px 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;

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

      .headerSearch {
        width: 442px;
        height: 56px;
        background-color: #ededed;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        color: rgb(51, 51, 51);

        i {
          width: 28px;
          height: 28px;
          margin-right: 10px;
          background-image: url('../../common/images/search.png');
          background-size: 100% 100%;
        }

        span {
          color: rgb(102, 102, 102);
        }
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
    }

    .headerTab {
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
  }

  .mainContainer {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 148px;
    bottom: 98px;

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
      overflow: hidden;

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
        display: flex;
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

      .floorItem {
      }
    }
  }
}
</style>
