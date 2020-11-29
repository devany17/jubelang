// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store/store.js'

import myAxios from './axios-helper'
Vue.use(Buefy)

Vue.config.productionTip = false
Object.defineProperties(Vue.prototype, {
  // Custom header axios
  axios: {
    get() { return myAxios }
  },
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
