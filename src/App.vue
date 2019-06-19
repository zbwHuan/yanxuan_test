<template>
  <div id="warp">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
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
