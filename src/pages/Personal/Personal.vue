<template>
  <div id="personalContainer">
    <header class="header">
      <div class="left" @click="$router.push('/firstview')"></div>
      <div class="center"></div>
      <div class="right">
        <i class="search" @click="$router.push('/search')"></i>
        <i class="shopcart" @click="$router.push('/shopcart')"></i>
      </div>
    </header>
    <div v-show="!isLogin">
      <div class="main">
        <div class="logo">
          <img src="./images/loginLogo.png" class="loginImg">
        </div>
        <div class="btns">
          <div class="phone" @click="toggle(1)">
            <i></i>
            <span>手机号码登录</span>
          </div>
          <div class="email" @click="toggle(2)">
            <i></i>
            <span>邮箱账号登录</span>
          </div>
          <p class="register">
            <span>手机号快捷注册</span>
            <i></i>
          </p>
        </div>
      </div>

      <div class="footer">
        <div class="weChat">
          <i></i>
          <span>微信</span>
        </div>
        <div class="QQ">
          <i></i>
          <span>QQ</span>
        </div>
        <div class="sina">
          <i></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <Login v-show="isLogin" :isLogin="isLogin" @toggle="toggle"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Login from './Login/Login'
export default {
  data() {
    return {
      isLogin: 0
    }
  },
  methods: {
    toggle(num) {
      console.log(this.isLogin, num)
      this.isLogin = num
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
#personalContainer {
  width: 100%;
  height: 100%;
  padding-top: 88px;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 24px;
    background-color: #fafafa;
    border-bottom: 1px solid #d9d9d9;

    .left {
      left: 24px;
      width: 48px;
      height: 44px;
      background-image: url('./images/login.png');
      background-repeat: no-repeat;
      background-position: 0px -73px;
    }

    .center {
      position: absolute;
      left: 50%;
      margin-left: -86px;
      width: 172px;
      height: 54px;
      background-image: url('./images/login.png');
      background-repeat: no-repeat;
      background-position: 0px -126px;
    }

    .right {
      display: flex;
      width: 148px;
      height: 64px;
      justify-content: space-between;

      .search {
        width: 64px;
        height: 64px;
        background-image: url('./images/login.png');
        background-repeat: no-repeat;
        background-position: -4px -356px;
      }

      .shopcart {
        width: 64px;
        height: 64px;
        background-image: url('./images/login.png');
        background-repeat: no-repeat;
        background-position: -3px 0px;
      }
    }
  }

  .main {
    width: 100%;

    .logo {
      width: 100%;
      height: 410px;
      padding: 160px 0;
      text-align: center;

      .loginImg {
        height: 100%;
      }
    }

    .btns {
      width: 100%;
      padding: 0 40px;
      text-align: center;

      div {
        height: 94px;
        margin-bottom: 32px;
        font-size: 28px;
        line-height: 90px;
        vertical-align: middle;
        border: 2px solid #b4282d;
        border-radius: 4px;
      }

      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        background-image: url('./images/login-2.png');
        background-repeat: no-repeat;
        margin-right: 16px;
      }

      .phone {
        color: #ffffff;
        background-color: #b4282d;

        i {
          background-position: 0 -51px;
        }
      }

      .email {
        color: #b4282d;

        i {
          background-position: 0 -1px;
        }
      }

      .register {
        color: #333;
        font-size: 28px;
        height: 40px;
        line-height: 40px;

        i {
          width: 28px;
          height: 28px;
          margin-left: 4px;
          background-image: url('./images/right.png');
          background-position: 0 2px;
        }
      }
    }
  }

  .footer {
    position: absolute;
    left: 0;
    bottom: 80px;
    height: 40px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;

    div {
      height: 100%;
      line-height: 40px;
      padding: 0 40px;

      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        background-repeat: no-repeat;
      }

      span {
        margin-left: 5px;
        vertical-align: middle;
        font-size: 28px;
        color: #7f7f7f;
      }
    }

    .weChat {
      border-right: 2px solid #979797;

      i {
        background-image: url('./images/wechat.png');
      }
    }

    .QQ {
      border-right: 2px solid #979797;

      i {
        background-image: url('./images/QQ.png');
      }
    }

    .sina {
      i {
        background-image: url('./images/sina.png');
      }
    }
  }
}
</style>
