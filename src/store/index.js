import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userSession: undefined,
  },
  mutations: {
    setUserSession: (state, userSession) => (state.userSession = userSession),
  },
  actions: {
  },
  modules: {
  }
})

export default store;