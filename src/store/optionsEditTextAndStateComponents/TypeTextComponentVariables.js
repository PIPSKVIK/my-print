export default {
  state: {
    printText: 'Ваш текст',
    textPositionX: '230',
    textPositionY: '350',
    textRotate: '0'
  },
  mutations: {
    updatePrintText (state, getPrintText) {
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
