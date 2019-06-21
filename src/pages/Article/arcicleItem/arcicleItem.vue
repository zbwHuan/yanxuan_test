<template>
  <div id="itemContainer">
    <Split/>
    <div class="wrap1" v-if="topics.style === 1">
      <div class="header">
        <span class="avatarWrap">
          <img class="avatar" :src="topics.avatar">
        </span>
        <span class="name">{{topics.nickname}}</span>
      </div>
      <div class="title">{{topics.title}}</div>
      <div class="imgWrap">
        <img class="img" :src="topics.picUrl">
      </div>
      <div class="readCount">
        <i class="icon"></i>
        <span>{{topics.readCount > 10000 ? Math.round(topics.readCount / 10000) + 'w' : topics.readCount}}人看过</span>
      </div>
    </div>

    <div v-if="topics.style === 2" class="wrap2">
      <div class="info">
        <div class="header">
          <span class="avatarWrap">
            <img class="avatar" :src="topics.avatar">
          </span>
          <span class="name">{{topics.nickname}}</span>
        </div>
        <div class="title">{{topics.title}}</div>
        <div class="subTitle">{{topics.subTitle}}</div>
        <div class="readCount">
          <i class="icon"></i>
          <span>{{topics.readCount > 10000 ? Math.round(topics.readCount / 10000) + 'w' : topics.readCount}}人看过</span>
        </div>
      </div>
      <div class="imgWrap">
        <img class="img" :src="topics.picUrl">
      </div>
    </div>

    <div class="wrap3" v-if="topics.style === 3">
      <div class="header">
        <div class="title">
          <span>{{topics.title}}</span>
        </div>
        <div class="content">{{topics.subTitle}}</div>
      </div>
      <ul class="itemList">
        <li class="item" v-for="(topics, index) in topics.itemList" :key="index">
          <img class="itemImg" :src="topics.itemUrl">
        </li>
      </ul>
      <div class="readCount">
        <i class="icon"></i>
        <span>{{topics.readCount > 10000 ? Math.round(topics.readCount / 10000) + 'w' : topics.readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    topics: Object
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
#itemContainer {
  .wrap1 {
    width: 100%;
    padding: 36px 30px;
    background-color: #fff;

    .header {
      width: 100%;
      height: 56px;
      line-height: 56px;
      margin-bottom: 24px;

      .avatarWrap {
        display: inline-block;
        width: 56px;
        height: 56px;
        border: 1px soild #d9d9d9;
        margin-right: 12px;

        .avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }

      .name {
        vertical-align: middle;
        font-size: 28px;
        color: #333;
      }
    }

    .title {
      width: 100%;
      line-height: 52px;
      font-size: 36px;
      color: #333;
      margin: -8px 0 16px;
    }

    .imgWrap {
      width: 100%;
      height: 376px;
      border-radius: 5px;
      overflow: hidden;

      .img {
        width: 100%;
      }
    }

    .readCount {
      margin: 20px 0 -16px;
      width: 100%;

      .icon {
        display: inline-block;
        width: 28px;
        height: 20px;
        margin-right: 8px;
        background-image: url('../../../common/images/eyes.png');
        background-size: 28px 20px;
        background-repeat: no-repeat;
      }

      span {
        color: #999;
      }
    }
  }

  .wrap2 {
    display: flex;
    justify-content: space-between;
    padding: 32px 30px;
    background-color: #fff;

    .info {
      width: 400px;

      .header {
        width: 100%;
        height: 56px;
        line-height: 56px;

        .avatarWrap {
          display: inline-block;
          width: 56px;
          height: 56px;
          border: 1px soild #d9d9d9;
          margin-right: 12px;

          .avatar {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            vertical-align: middle;
          }
        }

        .name {
          vertical-align: middle;
          font-size: 28px;
          color: #333;
        }
      }

      .title {
        width: 100%;
        height: 120px;
        line-height: 44px;
        font-size: 36px;
        color: #333;
        padding-top: 32px;
      }

      .subTitle {
        height: 48px;
        line-height: 40px;
        font-size: 28px;
        color: #7f7f7f;
        padding-top: 8px;
      }

      .readCount {
        margin-top: 18px;
        width: 100%;

        .icon {
          display: inline-block;
          width: 28px;
          height: 20px;
          margin-right: 8px;
          background-image: url('../../../common/images/eyes.png');
          background-size: 28px 20px;
          background-repeat: no-repeat;
        }

        span {
          color: #999;
        }
      }
    }

    .imgWrap {
      width: 272px;
      height: 272px;
      border-radius: 5px;
      overflow: hidden;
      text-align: center;

      .img {
        height: 100%;
        transform: translateX(-23%);
      }
    }
  }

  .wrap3 {
    width: 100%;
    padding: 36px 30px;
    background-color: #fff;

    .header {
      .title {
        color: #333;
        font-size: 36px;
        height: 54px;
        width: 100%;

        span {
          display: block;
          height: 54px;
          line-height: 54px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .content {
        color: #7f7f7f;
        font-size: 28px;
        padding-top: 8px;
        height: 88px;
        line-height: 40px;
      }
    }

    .itemList {
      margin: 24px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: 166px;
        height: 166px;
        margin-bottom: 8px;

        .itemImg {
          width: 100%;
          height: 100%;
        }
      }
    }

    .readCount {
      margin-top: 18px;
      width: 100%;

      .icon {
        display: inline-block;
        width: 28px;
        height: 20px;
        margin-right: 8px;
        background-image: url('../../../common/images/eyes.png');
        background-size: 28px 20px;
        background-repeat: no-repeat;
      }

      span {
        color: #999;
      }
    }
  }
}
</style>
