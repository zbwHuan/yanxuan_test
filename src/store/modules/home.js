import { reqHomeData } from '../../api'
import {
  RECEIVE_POLICYDESCLIST,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_FLASHSALEMODULE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_CATEGORYMODULE,
  RECEIVE_CATEGORYLIST
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
      commit(RECEIVE_POLICYDESCLIST, policyDescList)
      commit(RECEIVE_KINGKONGMODULE, kingKongModule)
      commit(RECEIVE_FLASHSALEMODULE, flashSaleModule)
      commit(RECEIVE_FOCUSLIST, focusList)
      commit(RECEIVE_TAGLIST, tagList)
      commit(RECEIVE_POPULARITEMLIST, popularItemList)
      commit(RECEIVE_NEWITEMLIST, newItemList)
      commit(RECEIVE_CATEGORYMODULE, categoryModule)
      commit(RECEIVE_CATEGORYLIST, categoryList)
    }
  }
}

const mutations = {
  [RECEIVE_POLICYDESCLIST] (state, policyDescList) {
    state.policyDescList = policyDescList
  },
  [RECEIVE_KINGKONGMODULE] (state, kingKongModule) {
    state.kingKongModule = kingKongModule
  },
  [RECEIVE_FLASHSALEMODULE] (state, flashSaleModule) {
    state.flashSaleModule = flashSaleModule
  },
  [RECEIVE_FOCUSLIST] (state, focusList) {
    state.focusList = focusList
  },
  [RECEIVE_TAGLIST] (state, tagList) {
    state.tagList = tagList
  },
  [RECEIVE_POPULARITEMLIST] (state, popularItemList) {
    state.popularItemList = popularItemList
  },
  [RECEIVE_NEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList
  },
  [RECEIVE_CATEGORYMODULE] (state, categoryModule) {
    state.categoryModule = categoryModule
  },
  [RECEIVE_CATEGORYLIST] (state, categoryList) {
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