import Vue from 'vue'
import TypeText from './optionsEditTextAndStateComponents/Index'
import TypeTextVariables from './optionsEditTextAndStateComponents/TypeTextComponentVariables.js'
import Auth from './Auth'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TypeText,
    TypeTextVariables,
    Auth
  }
})
