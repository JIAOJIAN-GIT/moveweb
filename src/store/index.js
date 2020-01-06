import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state, a) {
      state.count += a
    },
    subtract (state) {
      state.count--
    }
  },
  actions: {
    add2 (context) {
      setTimeout(() => {
        context.commit('subtract')
      }, 1500)
    }
  },
  modules: {
  }
})
