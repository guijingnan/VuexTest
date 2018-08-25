import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'

import mutations from './mutations'
import getters from './getters'
const state = {
  todos:[]
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
