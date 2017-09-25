import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import Page from '@/components/Page'
import ProductCart from '@/components/ProductCart'
import Success from '@/components/Success'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/success',
      name: 'SuccessPage',
      component: Success
    },
    {
      path: '/page/:id',
      name: 'page',
      component: Page
    },
    {
      path: '/cart',
      name: 'ProductCart',
      component: ProductCart

    }
  ]
})
