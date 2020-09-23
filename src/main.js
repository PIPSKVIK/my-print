import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: 'AIzaSyCSTZQ33naDu_rjOuW_ms8vFOU17-z0SfY',
  authDomain: 'my-print-e8a30.firebaseapp.com',
  databaseURL: 'https://my-print-e8a30.firebaseio.com',
  projectId: 'my-print-e8a30',
  storageBucket: 'my-print-e8a30.appspot.com',
  messagingSenderId: '404530594651',
  appId: '1:404530594651:web:4df757045388ef1965107e'
})

let app

// метод firebase который помогает поддержить автоматическую авторизацию && нужно проверить, инициализароли мы приложение ранее илил нет.
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
