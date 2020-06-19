import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Enter from '@/views/Enter'
import Exit from '@/views/Exit'
import Authorization from '@/views/Authorization'
import LayoutList from '@/views/LayoutList'
import CreateLayout from '@/views/CreateLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enter',
    name: 'Enter',
    component: Enter
  },
  {
    path: '/exit',
    name: 'Exit',
    component: Exit
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/layout-list',
    name: 'LayoutList',
    component: LayoutList
  },
  {
    path: '/creat-layout',
    name: 'CreateLayout',
    component: CreateLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
