import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: undefined
  },
  getters: {
    getCity(state) {
      return state.city
    }
  },
  mutations: {
    setCity(state, value) {
      state.city = value
    }
  },
  actions: {

  }
})
