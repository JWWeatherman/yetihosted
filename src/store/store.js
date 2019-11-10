import Vue from 'vue'
import Vuex from 'vuex'
import VueDefaultValue from 'vue-default-value/dist/vue-default-value'


Vue.use(Vuex)
Vue.use(VueDefaultValue)

export default new Vuex.Store({
  state: {
    Index: {},
    ConvertKey: 0,
    Privatekey: [],
  },
  mutations: {
    STARTUP_INDEX (state) {
      state.Index = new Index()
    }
  },
  actions: {
    startupIndex ({commit}) {
      commit('STARTUP_INDEX')
    },
    setSliderValue ({commit}, value) {
      commit('SET_SLIDER_VALUE', value)
    }
  },
  getters: {
    getIndex: state => state.Index
  }
})