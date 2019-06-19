<template>
  <div id="searchContainer">
    <div class="header">
      <form>
        <div class="searchWrap">
          <i class="iconfont"></i>
          <input type="text" placeholder="超轻口袋遮阳伞 防晒必备">
        </div>
      </form>
      <span @click="$router.back()">取消</span>
    </div>
    <h3>热门搜索</h3>
    <ul class="list">
      <li class="active">静音风扇7.8折</li>
      <li>牛皮席 直降840元</li>
      <li>行李箱</li>
      <li>破壁机直降180元</li>
      <li>枕头</li>
      <li>便携榨汁机 降20元</li>
      <li>女鞋</li>
      <li>可机洗 夏凉被</li>
      <li>锅</li>
      <li>全棉短袖36.7元</li>
      <li>小龙虾</li>
      <li>收纳</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#searchContainer {
  width: 100%;
  background-color: #fff;
  padding: 0 30px;
  box-sizing: border-box;

  .header {
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    form {
      width: 604px;
      height: 56px;
      background-color: #f4f4f4;

      .searchWrap {
        height: 56px;
        display: flex;
        padding: 0 20px;
        align-items: center;

        i {
          display: block;
          width: 28px;
          height: 28px;
          margin-right: 16px;
          background-image: url('../../common/images/search.png');
        }

        input {
          width: 520px;
          height: 40px;
          background-color: #f4f4f4;
          outline: none;
        }
      }
    }

    span {
      font-size: 28px;
      color: #333;
    }
  }

  h3 {
    height: 90px;
    line-height: 90px;
    color: #999;
    font-size: 28px;
  }

  .list {
    overflow: hidden;

    li {
      height: 45px;
      line-height: 45px;
      color: #333;
      font-size: 24px;
      margin: 0 32px 32px 0;
      padding: 0 15px;
      float: left;
      border: 1px solid #999;
      border-radius: 4px;

      &.active {
        color: #b4282d;
        border-color: #b4282d;
      }
    }
  }
}
</style>
