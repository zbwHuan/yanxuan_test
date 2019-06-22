import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Split from './components/Split/Split'
import HeaderSearch from './components/HeaderSearch/HeaderSearch.vue'
import Header from './components/Header/Header.vue'
import store from './store'
import 'lib-flexible/flexible.js'
import './mock/mock-server'

Vue.config.devtools = false

Vue.component('Split', Split)
Vue.component('HeaderSearch', HeaderSearch)
Vue.component('Header', Header)

/* router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    // let head = document.getElementsByTagName('head');
    let metas = document.getElementsByTagName('meta');
    let meta = Array.prototype.filter.call(metas, (item) => item.name === 'viewport')[0]
    meta.content = to.meta.content;
    // head[0].appendChild(meta)
  }

  next()
}); */


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})