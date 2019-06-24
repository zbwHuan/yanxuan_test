<template>
  <div class="title">
    <span class="left">{{name}}</span>
    <span class="more" v-if="isShow">更多 ></span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['name', 'isShow']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.title {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    font-size: 32px;
    height: 100px;
    line-height: 100px;
  }

  .more {
    font-size: 28px;
  }
}</style>
