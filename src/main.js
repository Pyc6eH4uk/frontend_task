// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    authenticated: localStorage.getItem('logged_in') || false,
    username: localStorage.getItem('username') || ''
  },
  mutations: {
    authenticated (state, payload) {
      console.log('mutation', name.username)
      state.authenticated = true
      state.username = payload
      localStorage.setItem('logged_in', 'true')
      localStorage.setItem('username', payload)
    },
    logout () {
      this.state.authenticated = false
      localStorage.setItem('logged_in', 'false')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
