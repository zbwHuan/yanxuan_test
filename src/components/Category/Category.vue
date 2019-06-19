<template>
  <div id="categoryContainer">
    <Split/>
    <a class="categoryImg" :href="category.titleSchemeUrl">
      <img :src="category.titlePicUrl">
    </a>
    <div class="listContainer" ref="container">
      <ul class="list" ref="listWrap">
        <li class="listItem" v-for="(item, index) in category.itemList" :key="index">
          <img class="img" :src="item.scenePicUrl">
          <div class="info">
            <span class="name">{{item.simpleDesc}}</span>
            <div class="price">
              <span class="new">¥{{item.retailPrice}}</span>
              <span class="old">¥{{item.counterPrice}}</span>
            </div>
            <div>
              <span
                class="discounts"
                v-for="(tag, index) in item.itemTagList"
                :key="index"
              >{{tag.name}}</span>
            </div>
          </div>
        </li>
        <li class="listItem finall">
          <a href="javascript:;">查看更多 ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    category: Object
  },
  mounted() {
    this.$nextTick(() => {
      this._initBScroll()
    })
  },
  methods: {
    _initBScroll() {
      const liwidth = 220
      const liCount = this.category.itemList.length + 1
      const width = liwidth * liCount
      this.$refs.listWrap.style.width = width + 'px'

      new BScroll(this.$refs.container, {
        click: true,
        scrollX: true
      })
    }
  },
  watch: {
    category() {
      this.$nextTick(() => {
        this._initBScroll()
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#categoryContainer {
  background-color: #fff;

  .categoryImg {
    display: block;
    width: 100%;
    height: 370px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .listContainer {
    padding: 0 30px 30px;

    .list {
      display: flex;
      padding-left: 20px;

      .listItem {
        width: 200px;
        float: left;
        margin-right: 20px;

        .img {
          width: 200px;
          height: 200px;
          background-color: #f4f4f4;
          margin-bottom: 12px;
        }

        .info {
          .name {
            display: inline-block;
            color: #333;
            font-size: 24px;
            margin-bottom: 6px;
            line-height: 36px;
          }

          .price {
            font-size: 24px;
            height: 36px;
            line-height: 36px;

            .new {
              color: #b4282d;
              margin-right: 12px;
            }

            .old {
              color: #999999;
              text-decoration: line-through;
            }
          }

          .discounts {
            display: block;
            float: left;
            height: 32px;
            line-height: 32px;
            font-size: 20px;
            color: #b4282d;
            border: 1px solid #b4282d;
            margin-bottom: 5px;
            padding: 0 10px;
            border-radius: 10px;

            &:nth-child(2) {
              margin-left: 10px;
            }
          }
        }
      }

      .finall {
        a {
          display: block;
          width: 200px;
          height: 200px;
          font-size: 28px;
          color: #333;
          background-color: #f4f4f4;
          line-height: 200px;
          text-align: center;
        }
      }
    }
  }
}
</style>
