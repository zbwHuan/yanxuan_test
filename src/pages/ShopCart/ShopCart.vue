<template>
  <div id="cartContiner">
    <Header>
      <div slot="left" class="left">购物车</div>
      <div slot="right" class="right">
        <span>领券</span>
      </div>
    </Header>
    <div class="tab">
      <ul class="tabList">
        <li>
          <i></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="mainContainer">
      <div class="main">
        <img src="./images/shopcart.png">
        <p>去添加点什么吧</p>
        <div class="btn" @click="$router.push('/personal')">登录</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#cartContiner {
  width: 100%;
  height: 100%;
  padding: 88px 0 98px;

  .left {
    font-size: 36px;
    height: 87px;
    line-height: 87px;
  }

  .right {
    width: 90px;
    font-size: 30px;
    color: #b4282d;
  }

  .tab {
    width: 100%;
    height: 70px;

    .tabList {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        font-size: 24px;
        color: #666;

        i {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin-right: 6px;
          background-image: url('./images/point.png');
        }
      }
    }
  }

  .mainContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .main {
      width: 100%;
      text-align: center;

      p {
        font-size: 28px;
        color: #999;
        margin-bottom: 50px;
      }

      .btn {
        width: 480px;
        height: 92px;
        line-height: 92px;
        color: #fff;
        font-size: 30px;
        background-color: #b4282d;
        margin: 0 auto;
      }
    }
  }
}
</style>
