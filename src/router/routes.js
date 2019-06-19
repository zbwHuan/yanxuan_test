import FirstView from '../pages/FirstView/FirstView.vue'
import Categroy from '../pages/Categroy/Categroy.vue'
import Article from '../pages/Article/Article.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'


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
    path: '/article',
    component: Article
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
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/firstview'
  },
]