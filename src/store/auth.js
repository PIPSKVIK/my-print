import firebase from 'firebase/app'

export default {
  state: {},
  mutattion: {},
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    }
  },
  getters: {}
}
