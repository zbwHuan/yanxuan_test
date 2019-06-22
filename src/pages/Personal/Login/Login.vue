<template>
  <div id="loginContainer">
    <div class="main">
      <div class="logo">
        <img src="./images/logo.png">
      </div>
      <div class="login">
        <form class="phone-form" v-show="isLogin === 1">
          <div class="phone">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="mess" v-if="isMessage">
            <input type="text" placeholder="请输入短信验证码">
            <div class="getMess">获取验证码</div>
          </div>
          <div class="password" v-else>
            <input type="text" placeholder="请输入密码">
          </div>
          <div class="help">
            <span>{{isMessage ? '遇到问题 ?' : '忘记密码 ?'}}</span>
            <span @click="isMessage = !isMessage">{{isMessage ? '使用密码验证登录' : '使用短信验证登录'}}</span>
          </div>
          <div class="submit">登录</div>
        </form>
        <form class="message-form" v-show="isLogin === 2">
          <div class="phone">
            <input type="text" placeholder="邮箱帐号">
          </div>
          <div class="password">
            <input type="text" placeholder="密码">
          </div>
          <div class="help">
            <span>注册帐号</span>
            <span @click="isMessage = !isMessage">忘记密码</span>
          </div>
          <div class="submit">登录</div>
        </form>
      </div>
      <div class="footer">
        <div class="other" @click="changeToggle">其他登录方式</div>
        <div class="reg" v-show="isLogin === 1">
          <span>注册帐号</span>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Login',
  data() {
    return {
      isMessage: true
    }
  },
  props: {
    isLogin: Number
  },
  methods: {
    changeToggle() {
      this.$emit('toggle', 0)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#loginContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;

  input {
    outline: none;
  }

  .main {
    width: 100%;
    height: 100%;
    padding: 0 40px;

    .logo {
      width: 100%;
      height: 64px;
      margin-top: 56px;
      text-align: center;

      img {
        height: 100%;
      }
    }

    .login {
      width: 100%;
      margin-top: 155px;

      .phone-form {
        width: 100%;

        .phone {
          height: 92px;
          border-bottom: 1px solid #d9d9d9;
          font-size: 28px;

          input {
            width: 590px;
            height: 43px;
            margin: 28px 0;
          }
        }

        .mess {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 92px;
          border-bottom: 1px solid #d9d9d9;
          font-size: 28px;
          margin-top: 40px;

          input {
            width: 380px;
            height: 43px;
            margin: 28px 0;
          }

          .getMess {
            height: 57px;
            border: 1px solid #7F7F7F;
            font-size: 28px;
            line-height: 53px;
            padding: 0 20px;
            border-radius: 10px;
          }
        }

        .password {
          height: 92px;
          border-bottom: 1px solid #d9d9d9;
          font-size: 28px;

          input {
            width: 590px;
            height: 43px;
            margin: 28px 0;
          }
        }

        .help {
          width: 100%;
          height: 120px;
          padding: 40px 0;
          display: flex;
          justify-content: space-between;
          font-size: 28px;
          line-height: 40px;

          span {
            &:first-child {
              color: #7f7f7f;
            }

            &:last-child {
              color: #333;
            }
          }
        }

        .submit {
          width: 100%;
          text-align: center;
          height: 92px;
          margin-bottom: 32px;
          font-size: 28px;
          line-height: 92px;
          border-radius: 6px;
          background-color: #b4282d;
          color: #fff;
        }
      }

      .message-form {
        width: 100%;

        .phone {
          height: 92px;
          border-bottom: 1px solid #d9d9d9;
          font-size: 28px;

          input {
            width: 590px;
            height: 43px;
            margin: 28px 0;
            color: #333;
          }
        }

        .mess {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 92px;
          border-bottom: 1px solid #d9d9d9;
          font-size: 28px;
          margin-top: 40px;

          input {
            width: 380px;
            height: 43px;
            margin: 28px 0;
          }
        }

        .password {
          height: 92px;
          border-bottom: 1px solid #d9d9d9;
          font-size: 28px;

          input {
            width: 590px;
            height: 43px;
            margin: 28px 0;
          }
        }

        .help {
          width: 100%;
          height: 120px;
          padding: 40px 0;
          display: flex;
          justify-content: space-between;
          font-size: 28px;
          line-height: 40px;

          span {
            &:first-child {
              color: #7f7f7f;
            }

            &:last-child {
              color: #333;
            }
          }
        }

        .submit {
          width: 100%;
          text-align: center;
          height: 92px;
          margin-bottom: 32px;
          font-size: 28px;
          line-height: 92px;
          border-radius: 6px;
          background-color: #b4282d;
          color: #fff;
        }
      }
    }

    .footer {
      text-align: center;
      font-size: 28px;

      .other {
        width: 100%;
        height: 94px;
        margin-bottom: 32px;
        line-height: 90px;
        border-radius: 4px;
        border: 2px solid #b4282d;
        color: #b4282d;
      }

      .reg {
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          background-image: url('./images/right.png');
          background-repeat: no-repeat;
          width: 28px;
          height: 28px;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
