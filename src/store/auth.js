/* eslint-disable no-useless-catch */
import firebase from 'firebase/app'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutattion: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    async registerUser ({ dispatch, commit }, { email, password }) {
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
      } catch (e) {
        throw e
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
