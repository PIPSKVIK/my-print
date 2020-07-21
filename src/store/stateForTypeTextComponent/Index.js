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
      { name: '6', value: 6 },
      { name: '7', value: 7 },
      { name: '8', value: 8 },
      { name: '9', value: 9 },
      { name: '10', value: 10 },
      { name: '11', value: 11 },
      { name: '12', value: 12 },
      { name: '14', value: 14 },
      { name: '18', value: 18 },
      { name: '24', value: 24 },
      { name: '36', value: 36 }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    allOptionsColors (state) {
      return state.optionsColors
    },
    allOptionsSize (state) {
      return state.optionsSize
    },
    allOptionsTypeface (state) {
      return state.optionsTypeface
    }
  }
}
