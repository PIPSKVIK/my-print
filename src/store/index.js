import Vue from 'vue'
import TypeText from './optionsEditTextAndStateComponents/Index'
import OptionsText from './dataTextOptions/index'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TypeText,
    OptionsText
  }
})
