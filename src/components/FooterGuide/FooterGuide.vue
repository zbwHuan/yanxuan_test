<template>
  <div id="footerContainer">
    <div class="list">
      <a
        class="listItem"
        href="javascript:;"
        @click="goto('/firstview')"
        :class="{active: $route.path.indexOf('/firstview') !== -1}"
      >
        <i class="iconfont"></i>
        <span>首页</span>
      </a>
      <a
        class="listItem"
        href="javascript:;"
        @click="goto('/category')"
        :class="{active: $route.path.indexOf('/category') !== -1 }"
      >
        <i class="iconfont"></i>
        <span>分类</span>
      </a>
      <a
        class="listItem"
        href="javascript:;"
        @click="goto('/article')"
        :class="{active: $route.path.indexOf('/article') !== -1 }"
      >
        <i class="iconfont"></i>
        <span>识物</span>
      </a>
      <a
        class="listItem"
        href="javascript:;"
        @click="goto('/shopcart')"
        :class="{active: $route.path.indexOf('/shopcart') !== -1}"
      >
        <i class="iconfont"></i>
        <span>购物车</span>
      </a>
      <a
        class="listItem"
        href="javascript:;"
        @click="goto('/personal')"
        :class="{active: $route.path.indexOf('/personal') !== -1}"
      >
        <i class="iconfont"></i>
        <span>个人</span>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterGuide',
  methods: {
    goto(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

#footerContainer {
  top-border-1px(#e4e4e4);
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98px;

  .list {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .listItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24px;
      color: #666;

      .iconfont {
        margin-top: 10px;
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
      }

      &:nth-child(1) i {
        background-image: url('../../common/images/footer-tab.png');
        background-position: 0px -250px;
      }

      &:nth-child(2) i {
        background-image: url('../../common/images/footer-tab.png');
        background-position: 0px -150px;
      }

      &:nth-child(3) i {
        background-image: url('../../common/images/footer-tab.png');
        background-position: 0px -350px;
      }

      &:nth-child(4) i {
        background-image: url('../../common/images/footer-tab.png');
        background-position: 0px -50px;
      }

      &:nth-child(5) i {
        background-image: url('../../common/images/footer-tab.png');
        background-position: 0px -450px;
      }

      span {
        margin-top: 7px;
      }

      &.active {
        color: #b4282d;

        &:nth-child(1) i {
          background-image: url('../../common/images/footer-tab.png');
          background-position: 0px -200px;
        }

        &:nth-child(2) i {
          background-image: url('../../common/images/footer-tab.png');
          background-position: 0px -100px;
        }

        &:nth-child(3) i {
          background-image: url('../../common/images/footer-tab.png');
          background-position: 0px -300px;
        }

        &:nth-child(4) i {
          background-image: url('../../common/images/footer-tab.png');
          background-position: 0px 0px;
        }

        &:nth-child(5) i {
          background-image: url('../../common/images/footer-tab.png');
          background-position: 0px -400px;
        }
      }
    }
  }
}
</style>
