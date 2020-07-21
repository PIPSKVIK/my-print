export default {
  state: {
    optionsColors: [
      { name: 'red', value: '#ff0000' },
      { name: 'blue', value: '#0000ff' },
      { name: 'black', value: '#000000' },
      { name: 'green', value: '#008000' },
      { name: 'grey', value: '#808080' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    allOptionsColors (state) {
      return state.optionsColors
    }
  }
}
