<template>
  <div id="articleContainer">
    <header class="header">
      <div class="left">
        <i class="home"></i>
      </div>
      <div class="center">
        <router-link
          to="/article/find"
          class="find"
          :class="{active: $route.path.indexOf('/find') !== -1}"
        >发现</router-link>
        <router-link
          to="/article/select"
          class="select"
          :class="{active: $route.path.indexOf('/select') !== -1}"
        >甄选家</router-link>
      </div>
      <div class="right">
        <i class="search"></i>
        <i class="shopcart"></i>
      </div>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isFind: true
    }
  },

  async mounted() {
    await this.$store.dispatch('getTabData')
    await this.$store.dispatch('getManual')
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
  padding: 100px 0 98px;

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
}
</style>
