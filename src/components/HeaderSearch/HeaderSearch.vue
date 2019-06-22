<template>
  <div class="headerSearch" @click="$router.push('/search')">
    <i class="iconfont"></i>
    <span>搜索商品, 共25113款好物</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.headerSearch {
  flex-grow: 1;
  height: 56px;
  background-color: #ededed;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: rgb(51, 51, 51);

  i {
    width: 28px;
    height: 28px;
    margin-right: 10px;
    background-image: url('../../common/images/search.png');
    background-size: 100% 100%;
  }

  span {
    color: rgb(102, 102, 102);
  }
}
</style>
