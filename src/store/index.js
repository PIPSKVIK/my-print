import Vue from 'vue'
import TypeText from './stateForTypeTextComponent/Index'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TypeText
  }
})
