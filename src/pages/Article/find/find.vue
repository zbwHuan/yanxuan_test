<template>
  <div id="findContainer">
    <div class="headTab">
      <ul class="tabWarp" ref="tabWrap">
        <li class="tabItem" v-for="(item, index) in tabData" :key="item.tabId">
          <a href="javascript:;" :class="{active: isActive === index}">{{item.tabName}}</a>
        </li>
      </ul>
    </div>
    <div class="mainWrap">
      <div class="main">
        <div class="list">
          <div v-for="(item, index) in manual" :key="index">
            <div v-for="(item, index) in item.topics" :key="index">
              <Item :topics="item"/>
            </div>
          </div>
        </div>
        <div v-for="(item, index) in articleData" :key="index">
          <div v-for="(topic, index) in item.topics" :key="index">
            <Item :topics="topic"/>
          </div>
          <Split v-if="item.look"/>
          <div class="rating" v-if="item.look">
            <div class="header">
              <span class="avatarWrap">
                <img class="avatar" :src="item.look.avatar">
              </span>
              <span class="name">{{item.look.nickname}}</span>
            </div>
            <div class="content">{{item.look.content}}</div>
            <div class="imgWrap">
              <img class="img" :src="item.look.lookPics[0].picUrl">
            </div>
            <div class="readCount">
              <i class="icon"></i>
              <span>{{item.look.readCount > 10000 ? Math.round(item.look.readCount / 10000) + 'w' : item.look.readCount}}人看过</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { reqAuto } from '../../../api'
import Item from '../arcicleItem/arcicleItem'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      isActive: 0,
      page: 1,
      articleData: [],
      flag: false,
      mainScroll: null,
      headTab: null
    }
  },
  computed: {
    ...mapState({
      tabData: state => state.article.tabData,
      manual: state => state.article.manual
    })
  },
  async mounted() {
    // 初始加载第一页数据
    const result = await reqAuto(this.page)
    if (result.code === '200') {
      this.articleData = result.data.result
    }
    this._initBScroll()
  },
  methods: {
    async getNewData() {
      const result = await reqAuto(this.page)
      this.page++
      if (result.code === '200') {
        const newData = this.articleData.concat(result.data.result)
        this.articleData = newData
      }
    },
    _initBScroll() {
      const as = document.querySelectorAll('.tabWarp .tabItem')
      let width = 0
      as.forEach(item => {
        width += item.clientWidth
      }, 0)

      this.$refs.tabWrap.style.width = width + 1 + 'px'

      this.headTab = new BScroll('.headTab', {
        click: true,
        scrollX: true
      })
      this.mainScroll = new BScroll('.mainWrap', {
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
          this.getNewData()
        }
      })
    }
  },
  components: {
    Item
  },
  watch: {
    articleData() {
      this.$nextTick(() => {
        this.$emit('toggle')
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#findContainer {
  height: 100%;
  padding-top: 72px;

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

  .mainWrap {
    height: 100%;
  }

  .main {
    width: 100%;

    .list {
    }
  }

  .rating {
    width: 100%;
    padding: 36px 30px;
    background-color: #fff;

    .header {
      width: 100%;
      height: 56px;
      line-height: 56px;
      margin-bottom: 24px;

      .avatarWrap {
        display: inline-block;
        width: 56px;
        height: 56px;
        border: 1px soild #d9d9d9;
        margin-right: 12px;

        .avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }

      .name {
        vertical-align: middle;
        font-size: 28px;
        color: #333;
      }
    }

    .content {
      width: 100%;
      line-height: 48px;
      font-size: 32px;
      color: #333;
      margin: 24px 0 20px;
    }

    .imgWrap {
      width: 100%;
      height: 376px;
      border-radius: 5px;
      overflow: hidden;

      .img {
        width: 100%;
      }
    }

    .readCount {
      margin: 20px 0 -16px;
      width: 100%;

      .icon {
        display: inline-block;
        width: 28px;
        height: 20px;
        margin-right: 8px;
        background-image: url('../../../common/images/eyes.png');
        background-size: 28px 20px;
        background-repeat: no-repeat;
      }

      span {
        color: #999;
      }
    }
  }
}
</style>
