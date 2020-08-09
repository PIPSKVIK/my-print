export default {
  state: {
    printText: 'Ваш Текст',
    textPositionX: '120',
    textPositionY: '120',
    textRotate: '0'
  },
  mutations: {
    upgradePrintText (state, getPrintText) {
      state.printText = getPrintText
    },
    updateTextPositionX (state, getTextPositionX) {
      state.textPositionX = getTextPositionX
    },
    updateTextPositionY (state, getTextPositionY) {
      state.textPositionY = getTextPositionY
    },
    updateTextRotate (state, getTextRotate) {
      state.textRotate = getTextRotate
    }
  },
  actions: {},
  getters: {
    getPrintText (state) {
      return state.printText
    },
    getTextPositionX (state) {
      return state.textPositionX
    },
    getTextPositionY (state) {
      return state.textPositionY
    },
    getTextRotate (state) {
      return state.textRotate
    }
  }
}
