<template>
  <div id="searchContainer">
    <div class="header">
      <form>
        <div class="searchWrap">
          <i class="iconfont"></i>
          <div class="clear" v-if="keyword" @click="clear">×</div>
          <input type="text" placeholder="超轻口袋遮阳伞 防晒必备" v-model="keyword" @keyup="autoSearch">
        </div>
      </form>
      <span @click="$router.back()">取消</span>
    </div>
    <ul v-show="keyword" class="searchList">
      <li class="searchItem" v-for="(item, index) in data" :key="index">
        <div class="itemWrap">
          <div>
            <span>{{item}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="!keyword" class="hotSearch">
      <h3>热门搜索</h3>
      <ul class="list">
        <li class="listItem" v-for="(item, index) in hotKeywordVOList" :key="index">
          <a :href="item.schemeUrl">{{item.keyword}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { reqInitSearch, reqAutoSearch } from '../../api'
export default {
  data() {
    return {
      hotKeywordVOList: [],
      keyword: '',
      data: []
    }
  },
  methods: {
    async autoSearch() {
      const result = await reqAutoSearch(this.keyword)
      if (result.code) {
        this.data = result.data
        console.log(this.data)
      }
    },
    clear() {
      this.keyword = ''
    }
  },
  async mounted() {
    const result = await reqInitSearch()
    if (result.code) {
      this.hotKeywordVOList = result.data.hotKeywordVOList
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#searchContainer {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;

  .header {
    padding: 0 30px;
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

        .clear {
          position: absolute;
          top: 28px;
          right: 130px;
          width: 30px;
          height: 30px;
          line-height: 28px;
          border-radius: 50%;
          color: #f4f4f4;
          background-color: #ccc;
          text-align: center;
        }

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

          &::-webkit-input-placeholder {
          }
        }
      }
    }

    span {
      font-size: 28px;
      color: #333;
    }
  }

  .searchList {
    box-sizing: border-box;
    padding-left: 30px;
    width: 100%;

    .searchItem {
      position: relative;
      width: 100%;
      height: 90px;

      &:after {
        position: absolute;
        top: 90px;
        left: 0;
        display: block;
        content: '';
        background-color: #d9d9d9;
        width: 100%;
        height: 1px;
      }

      .itemWrap {
        height: 104px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        >div {
          height: 41px;
          font-size: 28px;
          color: #333;
        }
      }
    }
  }

  .hotSearch {
    padding: 0 30px 30px;
    margin-bottom: 20px;

    h3 {
      height: 90px;
      line-height: 90px;
      color: #999;
      font-size: 28px;
    }

    .list {
      overflow: hidden;

      .listItem {
        height: 45px;
        line-height: 45px;
        font-size: 24px;
        margin: 0 32px 32px 0;
        padding: 0 15px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;

        a {
          color: #333;
        }

        &:first-child {
          border-color: #b4282d;

          a {
            color: #b4282d;
          }
        }
      }
    }
  }
}
</style>
