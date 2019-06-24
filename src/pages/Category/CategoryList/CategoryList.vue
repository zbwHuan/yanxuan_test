<template>
  <div id="cateContainer" ref="right">
    <div class="mainWrap">
      <div class="mainContainer" v-if="categoryL1List.length">
        <header class="header">
          <a :href="category.wapExpandPicTargetUrl">
            <img class="headerImg" :src="category.wapBannerUrl">
          </a>
        </header>
        <ul class="cateList">
          <li class="cateItem" v-for="(item, index) in category.subCateList" :key="index">
            <img class="cateImg" :src="item.wapBannerUrl">
            <div class="cateTitle">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'categoryList',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      categoryL1List: state => state.category.categoryL1List
    }),
    category: {
      get() {
        const id = this.$route.params.id
        const category = this.categoryL1List.filter(
          item => item.id === id * 1
        )[0]

        this.$nextTick(() => {
          new BScroll('.mainWrap', {
            click: true
          })
        })

        return category
      },
      set() {}
    }
  },
  mounted() {
    this.category = this.categoryL1List[0]
    const right = this.$refs.right
    const height = document.documentElement.clientHeight - 88 - 98
    right.style.height = height + 'px'
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl';

#cateContainer {
  box-sizing: border-box;
  margin-left: 162px;
  padding: 30px 30px 21px;

  .mainWrap {
    width: 100%;
    height: 100%;
  }

  .mainContainer {
    .header {
      width: 100%;
      height: 192px;

      a {
        width: 100%;
        height: 192px;

        .headerImg {
          width: 100%;
          height: 192px;
        }
      }
    }

    .cateList {
      clearFix();

      .cateItem {
        float: left;
        width: 144px;
        height: 216px;

        &:nth-child(3n+1), &:nth-child(3n+2) {
          margin-right: 34px;
        }

        .cateImg {
          width: 144px;
          height: 144px;
        }

        .cateTitle {
          font-size: 24px;
          color: #333;
          text-align: center;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
