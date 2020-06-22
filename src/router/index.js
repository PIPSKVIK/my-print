import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homePage/Home')
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import('../views/auth/Enter')
  },
  {
    path: '/exit',
    name: 'Exit',
    component: () => import('../views/auth/Exit')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/auth/Registration')
  },
  {
    path: '/layout-list',
    name: 'LayoutList',
    component: () => import('../views/layoutPage/LayoutList')
  },
  {
    path: '/creat-layout',
    name: 'CreateLayout',
    component: () => import('../views/layoutPage/LayoutCreate')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
