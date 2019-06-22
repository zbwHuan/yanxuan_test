<template>
  <div id="header">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 88px;
  line-height: 88px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
}
</style>
