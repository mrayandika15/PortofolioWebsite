import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store.vue')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  }, {
    path: '/CheckoutView',
    name: 'CheckoutView',
    component: () => import('../views/CheckoutView.vue')
  }, {
    path: '/ThankYou',
    name: 'ThankYou',
    component: () => import('../views/ThankYou.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
