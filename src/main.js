import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Split from './components/Split/Split'
import HeaderSearch from './components/HeaderSearch/HeaderSearch.vue'
import store from './store'
import 'lib-flexible/flexible.js'
import './mock/mock-server'

Vue.config.devtools = false

Vue.component('Split', Split)
Vue.component('HeaderSearch', HeaderSearch)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})