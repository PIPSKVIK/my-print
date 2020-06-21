import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import('../views/Enter')
  },
  {
    path: '/exit',
    name: 'Exit',
    component: () => import('../views/Exit')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration')
  },
  {
    path: '/layout-list',
    name: 'LayoutList',
    component: () => import('../views/LayoutList')
  },
  {
    path: '/creat-layout',
    name: 'CreateLayout',
    component: () => import('../views/CreateLayout')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
