import FirstView from '../pages/FirstView/FirstView.vue'
import Category from '../pages/Category/Category.vue'
import Article from '../pages/Article/Article.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import CategoryList from '../pages/Category/CategoryList/CategoryList'


export default [
  {
    path: '/firstview',
    component: FirstView
  },
  {
    path: '/category',
    component: Category,
    children: [
      {
        path: '/category/:id',
        component: CategoryList
      },
      {
        path: '',
        redirect: '/category/1022001'
      }
    ]
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