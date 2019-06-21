import FirstView from '../pages/FirstView/FirstView.vue'
import Category from '../pages/Category/Category.vue'
import Article from '../pages/Article/Article.vue'
import Find from '../pages/Article/find/find.vue'
import Select from '../pages/Article/select/select.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import CategoryList from '../pages/Category/CategoryList/CategoryList'


export default [
  {
    path: '/firstview',
    component: FirstView,
    meta: {
      isShowFooter: true,
      content: 'initial-scale=0.5'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true,
      content: 'initial-scale=0.5'
    },
    children: [
      {
        path: '/category/:id',
        component: CategoryList,
        meta: {
          isShowFooter: true,
          content: 'initial-scale=0.5'
        },
      },
      {
        path: '',
        redirect: '/category/1022001'
      }
    ]
  },
  {
    path: '/article',
    component: Article,
    meta: {
      isShowFooter: true,
      content: 'initial-scale=1'
    },
    children: [
      {
        path: '/article/find',
        component: Find,
        meta: {
          isShowFooter: true,
          content: 'initial-scale=1'
        }
      },
      {
        path: '/article/select',
        component: Select,
        meta: {
          isShowFooter: false,
          content: 'initial-scale=1'
        },
      },
      {
        path: '/article',
        redirect: '/article/find'
      }
    ]
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true,
      content: 'initial-scale=0.5'
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: true,
      content: 'initial-scale=0.5'
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: false,
      content: 'initial-scale=0.5'
    }
  },
  {
    path: '/',
    redirect: '/firstview'
  },
]