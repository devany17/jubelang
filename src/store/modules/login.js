import { setToken, getToken, removeToken, getDataUser, setDataUser, removeDataUser, SECRET_KEY } from '@/localstorage-helper'
var jwt = require('jsonwebtoken');

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
let dataUser = getDataUser()
let user
if (dataUser) user = JSON.parse(Buffer.from(dataUser, 'base64').toString('ascii'))

const state = {
  isLoggedIn: !!(getToken()),
  token: getToken() || '',
  dataUser: user || null,
}

const mutations = {
  [LOGIN](state) {
    state.isLoggedIn = true
    state.pending = false
  },
  [LOGOUT](state) {
    state.isLoggedIn = false
  },
}
const actions = {
  login({ commit, state }, token) {
    var jwtToken = jwt.sign({ token }, SECRET_KEY);
    setToken(jwtToken)
    state.token = getToken()
    commit(LOGIN)
  },
  logout({ commit, state }) {
    removeToken()
    state.token = ''
    commit(LOGOUT)
  },

}

export default {
  namespaced: true,
  strict: true,
  state,
  mutations,
  actions
}
