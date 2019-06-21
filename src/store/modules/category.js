import { reqCategory } from '../../api'
import {
  RECEIVE_CATEGORYL1LIST
} from '../mutations-types'

const state = {
  categoryL1List: []
}


const actions = {
  async getCategory ({ commit }) {
    const result = await reqCategory()
    if (result.code === 0) {
      const { categoryL1List } = result.data
      commit(RECEIVE_CATEGORYL1LIST, categoryL1List)
    }
  }

}

const mutations = {
  [RECEIVE_CATEGORYL1LIST] (state, categoryL1List) {
    state.categoryL1List = categoryL1List
  }

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}