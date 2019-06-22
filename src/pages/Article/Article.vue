<template>
  <div id="articleContainer">
    <header class="header">
      <div class="left">
        <i class="home"></i>
      </div>
      <div class="center">
        <a to="/article/find" class="find" :class="{active: $route.path.indexOf('/find') !== -1}">发现</a>
        <a
          to="/article/select"
          class="select"
          :class="{active: $route.path.indexOf('/select') !== -1}"
        >甄选家</a>
      </div>
      <div class="right">
        <i class="search"></i>
        <i class="shopcart"></i>
      </div>
    </header>
    <div class="headTab">
      <ul class="tabWarp" ref="tabWrap">
        <li class="tabItem" v-for="(item, index) in tabData" :key="item.tabId">
          <a href="javascript:;" :class="{active: isActive === index}">{{item.tabName}}</a>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="list">
        <div v-for="(item, index) in manual" :key="index">
          <div v-for="(item, index) in item.topics" :key="index">
            <Item :topics="item"/>
          </div>
        </div>
        <Find ref="find" @toggle="toggle"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import Item from './arcicleItem/arcicleItem'
import Find from './find/find'
export default {
  data() {
    return {
      isActive: 0,
      pages: 1,
      flag: false
    }
  },
  components: {
    Item,
    Find
  },
  computed: {
    ...mapState({
      tabData: state => state.article.tabData,
      manual: state => state.article.manual
    })
  },
  async mounted() {
    await this.$store.dispatch('getTabData')
    await this.$store.dispatch('getManual')
    this._initBScroll()
  },
  methods: {
    toggle() {
      this.flag = false
    },
    _initBScroll() {
      const as = document.querySelectorAll('.tabWarp .tabItem')
      let width = 0
      as.forEach(item => {
        width += item.clientWidth
      }, 0)
      
      this.$refs.tabWrap.style.width = width + 1 + 'px'

      new BScroll('.headTab', {
        click: true,
        scrollX: true
      })
      this.mainScroll = new BScroll('.main', {
        click: true,
        mouseWheel: true,
        pullUpLoad: true
      })
      this.mainScroll.on('scroll', async pos => {
        if (this.flag) {
          return
        }
        if (pos.y <= this.mainScroll.maxScrollY) {
          this.flag = true
          this.$refs.find.getNewData()
        }
      })
    },
    getStyle(str) {
      const dom = document.querySelector(str)
      const height = dom.clientHeight
      return height
    }
  },
  watch: {
    flag() {
      this.$nextTick(() => {
        this.mainScroll.refresh()
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#articleContainer {
  width: 100%;
  height: 100%;
  padding: 172px 0 98px;

  .header {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    padding: 0 24px;
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(217, 217, 217);

    .left {
      position: absolute;
      top: 0;
      left: 24px;
      width: 46px;
      height: 100px;
      background-image: url('../../common/images/home.png');
      background-repeat: no-repeat;
      background-size: 46px 46px;
      background-position: center;
    }

    .center {
      width: 320px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        font-size: 28px;
        color: #7f7f7f;
        padding: 0 16px;

        &.active {
          color: #b4282d;
          font-size: 40px;
        }
      }
    }

    .right {
      position: absolute;
      top: 0;
      right: 24px;
      display: flex;
      width: 141px;
      height: 100%;
      justify-content: space-between;

      .search {
        width: 62px;
        height: 100%;
        background-image: url('../../common/images/search.png');
        background-repeat: no-repeat;
        background-size: 46px 46px;
        background-position: center;
      }

      .shopcart {
        width: 49px;
        height: 100%;
        background-image: url('../../common/images/shopcart.png');
        background-repeat: no-repeat;
        background-size: 46px 46px;
        background-position: center;
      }
    }
  }

  .headTab {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 72px;
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(217, 217, 217);

    .tabWarp {
      height: 72px;

      .tabItem {
        float: left;
        height: 72px;

        a {
          display: block;
          box-sizing: border-box;
          padding: 0 8px;
          margin: 0 20px;
          height: 72px;
          line-height: 72px;
          font-size: 28px;
          color: #7f7f7f;

          &.active {
            color: #b4282d;
            border-bottom: 4px solid #b4282d;
          }
        }
      }
    }
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .list {
    }
  }
}
</style>
