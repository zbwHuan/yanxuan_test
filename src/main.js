import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import './mock/mock-server'

Vue.config.devtools = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})