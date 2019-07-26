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
    authenticated: localStorage.getItem('logged_in') || false
  },
  mutations: {
    authenticated () {
      console.log('mutation')
      this.state.authenticated = true
      localStorage.setItem('logged_in', 'true')
    },
    logout () {
      console.log('hererqqqq')
      this.state.authenticated = false
      console.log(this.state.authenticated)
      localStorage.setItem('logged_in', 'false')
      console.log(localStorage.getItem('logged_in'))
      // this.$router.replace('/login')
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
