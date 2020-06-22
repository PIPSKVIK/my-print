import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      { title: 'Главная', name: '/', exact: true },
      { title: 'Вход', name: '/enter', exact: null },
      {
        title: 'Выход',
        name: '/exit',
        exact: null,
        click: null
      },
      { title: 'Регистрация', name: '/registration', exact: null },
      { title: 'Список макетов', name: '/layout-list', exact: null },
      { title: 'Создать макет', name: '/creat-layout', exact: null }
    ],
    cards: [
      {
        id: 1,
        image: '1.jpg',
        name: 'T-short',
        title: 'Макет 1',
        color: 'red',
        price: '500'
      },
      {
        id: 2,
        image: '2.jpg',
        name: 'T-short',
        title: 'Макет 2',
        color: 'green',
        price: '600'
      },
      {
        id: 3,
        image: '3.jpg',
        name: 'T-short',
        title: 'Макет 3',
        color: 'black',
        price: '700'
      },
      {
        id: 4,
        image: '4.jpg',
        name: 'T-short',
        title: 'Макет 4',
        color: 'tomato',
        color2: 'tomato',
        price: '800'
      },
      {
        id: 5,
        image: '5.jpg',
        name: 'T-short',
        title: 'Макет 5',
        color: 'blue',
        price: '900'
      },
      {
        id: 6,
        image: '6.jpg',
        name: 'T-short',
        title: 'Макет 6',
        color: 'yellow',
        price: '1000'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    linkFromState (state) {
      return state.links
    },
    cardFromState (state) {
      return state.cards
    }
  }
})
