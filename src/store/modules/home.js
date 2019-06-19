import { reqHomeData } from '../../api'
import {
  RECIVE_POLICYDESCLIST,
  RECIVE_KINGKONGMODULE,
  RECIVE_FLASHSALEMODULE,
  RECIVE_FOCUSLIST,
  RECIVE_TAGLIST,
  RECIVE_POPULARITEMLIST,
  RECIVE_NEWITEMLIST,
  RECIVE_CATEGORYMODULE,
  RECIVE_CATEGORYLIST
} from '../mutations-types'

const state = {
  policyDescList: [], // 服务策略
  kingKongModule: {}, // 商品导航
  focusList: [],
  tagList: [],
  categoryList: {}, // 类目热销榜
  popularItemList: [], // 人气推荐
  flashSaleModule: {}, // 限时购
  newItemList: [], // 新品首发
  categoryModule: []
}


const actions = {
  async getHomeData ({ commit }) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const { policyDescList, kingKongModule, flashSaleModule, focusList, tagList, popularItemList, newItemList, categoryModule } = result.data
      const categoryList = result.data.categoryHotSellModule.categoryList
      commit(RECIVE_POLICYDESCLIST, policyDescList)
      commit(RECIVE_KINGKONGMODULE, kingKongModule)
      commit(RECIVE_FLASHSALEMODULE, flashSaleModule)
      commit(RECIVE_FOCUSLIST, focusList)
      commit(RECIVE_TAGLIST, tagList)
      commit(RECIVE_POPULARITEMLIST, popularItemList)
      commit(RECIVE_NEWITEMLIST, newItemList)
      commit(RECIVE_CATEGORYMODULE, categoryModule)
      commit(RECIVE_CATEGORYLIST, categoryList)
    }
  }
}

const mutations = {
  [RECIVE_POLICYDESCLIST] (state, policyDescList) {
    state.policyDescList = policyDescList
  },
  [RECIVE_KINGKONGMODULE] (state, kingKongModule) {
    state.kingKongModule = kingKongModule
  },
  [RECIVE_FLASHSALEMODULE] (state, flashSaleModule) {
    state.flashSaleModule = flashSaleModule
  },
  [RECIVE_FOCUSLIST] (state, focusList) {
    state.focusList = focusList
  },
  [RECIVE_TAGLIST] (state, tagList) {
    state.tagList = tagList
  },
  [RECIVE_POPULARITEMLIST] (state, popularItemList) {
    state.popularItemList = popularItemList
  },
  [RECIVE_NEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList
  },
  [RECIVE_CATEGORYMODULE] (state, categoryModule) {
    state.categoryModule = categoryModule
  },
  [RECIVE_CATEGORYLIST] (state, categoryList) {
    state.categoryList = categoryList
  },

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}