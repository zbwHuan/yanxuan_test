import FirstView from '../pages/FirstView/FirstView.vue'
// import Category from '../pages/Category/Category.vue'
import Article from '../pages/Article/Article.vue'
// import Find from '../pages/Article/find/find.vue'
// import Select from '../pages/Article/select/select.vue'
// import ShopCart from '../pages/ShopCart/ShopCart.vue'
// import Personal from '../pages/Personal/Personal.vue'
// import Search from '../pages/Search/Search.vue'
// import CategoryList from '../pages/Category/CategoryList/CategoryList'
const Category = () => import('../pages/Category/Category.vue')
const Find = () => import('../pages/Article/find/find.vue')
// const Article = () => import('../pages/Article/Article.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Select = () => import('../pages/Article/select/select.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')
const CategoryList = () => import('../pages/Category/CategoryList/CategoryList')


export default [
  {
    path: '/firstview',
    component: FirstView,
    meta: {
      isShowFooter: true,
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true,
    },
    children: [
      {
        name: 'categoryList',
        path: '/category/:id',
        component: CategoryList,
        meta: {
          isShowFooter: true,
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
    },
    children: [
      {
        path: '/article/find',
        component: Find,
        meta: {
          isShowFooter: true,
        }
      },
      {
        path: '/article/select',
        component: Select,
        meta: {
          isShowFooter: false,
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
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: false,
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: false,
    }
  },
  {
    path: '/',
    redirect: '/firstview'
  },
]