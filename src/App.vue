<template>
  <div id="warp">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  },
  mounted() {
    this.$store.dispatch('getCategory')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#warp {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f4f4f4;
}
</style>
