/* eslint-disable no-useless-catch */
import firebase from 'firebase/app'

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
    async register ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          email: email,
          name: 'Any name'
        })
      } catch (e) {
        throw e
      }
    },
    getUid () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async loguot ({ commit }) {
      await firebase.auth().signOut()
      commit('clearInfo')
    }
  }
}
