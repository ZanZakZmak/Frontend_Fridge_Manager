import Vue from 'vue'
import VueRouter from 'vue-router'
import Fridge from '../views/Fridge.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Fridge',
    component: Fridge
  },
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shoppinglist" */ '../views/ShoppingList.vue')
  },
  {
    path: '/profileedit',
    name: 'ProfileEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profileedit" */ '../views/ProfileEdit.vue')
  },
  {
    path: '/shoppinglistsingle',
    name: 'ShoppingListSingle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shoppinglistsingle" */ '../views/ShoppingListSingle.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
