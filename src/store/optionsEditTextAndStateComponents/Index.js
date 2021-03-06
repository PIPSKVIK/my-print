export default {
  state: {
    optionsColors: [
      { name: 'red', value: '#ff0000' },
      { name: 'blue', value: '#0000ff' },
      { name: 'black', value: '#000000' },
      { name: 'green', value: '#008000' },
      { name: 'grey', value: '#808080' }
    ],
    optionsSize: [
      { name: '14', value: 14 },
      { name: '18', value: 18 },
      { name: '20', value: 20 },
      { name: '24', value: 24 },
      { name: '28', value: 28 },
      { name: '32', value: 32 },
      { name: '36', value: 36 },
      { name: '40', value: 40 }
    ],
    typeSize: [
      { id: 1, name: 'XS' },
      { id: 2, name: 'S' },
      { id: 3, name: 'M' },
      { id: 4, name: 'L' },
      { id: 5, name: 'XL' },
      { id: 6, name: 'XXL' }
    ],
    typeFontFamily: [
      { name: 'Amatic SC', value: 'Amatic SC' },
      { name: 'Lobster', value: 'Lobster' },
      { name: 'Oswald', value: 'Oswald' },
      { name: 'Ruslan Display', value: 'Ruslan Display' }
    ],
    subjectsList: [
      { id: 1, label: 'М-Майка', img: 'image-men-t-shirt.jpg' },
      { id: 2, label: 'Ж-Майка', img: 'image-womens-t-shirt.jpg' }
    ],
    selectedColor: '#000000',
    selectedSize: 14,
    selectedFonts: '',
    textStyleWeight: false,
    textStyleItalic: false,
    textStyleUnderline: false,
    textStyleUppercase: false,
    typeSubjects: 'image-men-t-shirt.jpg',
    typeColor: '#000000',
    typeSubjectsSizes: '',
    currentColors: ['#000000', '#aa55aa', '#ffffff'],
    show: false
  },
  mutations: {
    changeTextStyle (state, type) {
      const prop = state[`textStyle${type}`]
      const value = !prop

      state[`textStyle${type}`] = value
    },
    changeSelectedOptions (state, { type, event }) {
      state[`selected${type}`] = event.value
    },
    updateTypeSubjects (state, getTypeSubjects) {
      state.typeSubjects = getTypeSubjects
    },
    updateTypeColor (state, getTypeColor) {
      state.typeColor = getTypeColor
    },
    changeTypeSubjectSize (state, value) {
      state.typeSubjectsSizes = value
    },
    saveCurrentColor (state) {
      if (!state.currentColors.includes(state.typeColor)) {
        state.currentColors.push(state.typeColor)
      }
    },
    changeShow (state) {
      state.show = !state.show
    }
  },
  actions: {},
  getters: {
    getTextStyleWeight (state) {
      return state.textStyleWeight
    },
    getTextStyleItalic (state) {
      return state.textStyleItalic
    },
    getTextStyleUnderline (state) {
      return state.textStyleUnderline
    },
    getTextStyleUppercase (state) {
      return state.textStyleUppercase
    },
    getSelectedColor (state) {
      return state.selectedColor
    },
    getSelectedSize (state) {
      return state.selectedSize
    },
    getSelectedFonts (state) {
      return state.selectedFonts
    },
    allOptionsColors (state) {
      return state.optionsColors
    },
    allOptionsSize (state) {
      return state.optionsSize
    },
    allTypeSize (state) {
      return state.typeSize
    },
    allTypeFontFamily (state) {
      return state.typeFontFamily
    },
    getSubjectsList (state) {
      return state.subjectsList
    },
    getTypeSubjects (state) {
      return state.typeSubjects
    },
    getTypeColor (state) {
      return state.typeColor
    },
    getTypeSubjectsSizes (state) {
      return state.typeSubjectsSizes
    },
    getCurrentColors (state) {
      return state.currentColors
    },
    getShow (state) {
      return state.show
    }
  }
}
