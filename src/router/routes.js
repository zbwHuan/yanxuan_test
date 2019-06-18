import FirstView from '../pages/FirstView/FirstView.vue'
import Categroy from '../pages/Categroy/Categroy.vue'
import Search from '../pages/Search/Search.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'


export default [
  {
    path: '/firstview',
    component: FirstView
  },
  {
    path: '/categroy',
    component: Categroy
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/firstview'
  },
]