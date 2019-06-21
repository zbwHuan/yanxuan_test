import { reqArticleTab, reqArticleManual } from '../../api'
import {
  RECEIVE_TABDATA,
  RECIVE_MANUAL
} from '../mutations-types'

const state = {
  tabData: [],
  manual: []
}

const actions = {
  async getTabData ({ commit }) {
    const result = await reqArticleTab()
    if (result.code === '200') {

      commit(RECEIVE_TABDATA, result.data)
    }
  },
  async getManual ({ commit }) {
    const result = await reqArticleManual()
    if (result.code === '200') {
      commit(RECIVE_MANUAL, result.data)
    }
  }
}

const mutations = {
  [RECEIVE_TABDATA] (state, data) {
    state.tabData = data
  },
  [RECIVE_MANUAL] (state, data) {
    state.manual = data
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}