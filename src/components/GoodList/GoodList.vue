<template>
  <ul class="list">
    <li class="listItem" v-for="(item, index) in goodList" :key="index">
      <img class="img" :src="item.listPicUrl || item.picUrl">
      <div class="info" v-if="item.name">
        <span class="name">
          {{item.name}}
          <span class="price">￥{{item.counterPrice}}</span>
        </span>
        <div>
          <span class="discounts" v-for="(tag, index) in item.itemTagList" :key="index">{{tag.name}}</span>
        </div>
      </div>
      <div class="price" v-else>
        <span class="new">¥{{item.activityPrice}}</span>
        <span class="old">¥{{item.originPrice}}</span>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['goodList']
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .listItem {
    width: 216px;
    padding-bottom: 13px;

    .img {
      width: 216px;
      height: 216px;
      background-color: #f5f5f5;
      margin-bottom: 12px;
    }

    .info {
      .name {
        display: inline-block;
        color: #333;
        font-size: 24px;
        margin-bottom: 6px;
        line-height: 36px;

        .price {
          color: #b4282d;
        }
      }

      .discounts {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        font-size: 20px;
        color: #b4282d;
        border: 1px solid #b4282d;
        margin-bottom: 5px;
        padding: 0 12px;
        border-radius: 12px;
      }
    }

    .price {
      padding: 0 0 30px 20px;

      .new {
        color: #b4282d;
        font-size: 28px;
        margin-right: 12px;
      }

      .old {
        color: #7f7f7f;
        font-size: 24px;
        text-decoration: line-through;
      }
    }
  }
}
</style>

