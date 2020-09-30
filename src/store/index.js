import Vue from 'vue'
import TypeText from './optionsEditTextAndStateComponents/Index'
import TypeTextVariables from './optionsEditTextAndStateComponents/TypeTextComponentVariables.js'
import Info from './Info.js'
import Auth from './Auth.js'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TypeText,
    TypeTextVariables,
    Auth,
    Info
  }
})
