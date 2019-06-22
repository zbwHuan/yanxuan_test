<template>
  <div id="categoryContainer">
    <Header>
      <HeaderSearch slot="center"/>
    </Header>
    <div class="mainContainer">
      <div class="leftNav" ref="leftNav">
        <ul class="navList">
          <li
            class="navItem"
            v-for="(item, index) in categoryL1List"
            :key="index"
            :class="{active: isActive === index}"
            @click="toggle(index)"
          >
            <router-link :to="'/category/' + item.id">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import CategoryList from './CategoryList/CategoryList'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      isActive: 0
    }
  },
  components: {
    CategoryList
  },
  computed: {
    ...mapState({
      categoryL1List: state => state.category.categoryL1List
    })
  },
  methods: {
    toggle(index) {
      this.isActive = index
    },
    _initScroll() {
      new BScroll('.leftNav', {
        click: true
      })
    }
  },
  mounted() {
    this.$router.push('/category')
    this.$store.dispatch('getCategory')
    this._initScroll()
    const leftNav = this.$refs.leftNav
    const height = document.documentElement.clientHeight - 88 - 98
    leftNav.style.height = height + 'px'
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

#categoryContainer {
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 88px 0 98px;

  .mainContainer {
    clearFix();
    width: 100%;
    border-top: 1px solid #ededed;

    .leftNav {
      width: 162px;
      float: left;

      .navList {
        width: 162px;
        padding-bottom: 40px;

        .navItem {
          width: 162px;
          margin-top: 40px;

          a {
            display: block;
            width: 162px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 28px;
            color: #333;
          }

          &.active a {
            position: relative;
            color: #b4282d;

            &::before {
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              content: '';
              height: 50px;
              width: 6px;
              background-color: #b4282d;
            }
          }
        }
      }
    }
  }
}
</style>
