// import { path } from 'express/lib/application'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }, {
    path: '/hycService',
    name: 'hycService',
    component: () => import('@/views/hycService')
  },
  {
    path: '/hycTree',
    name: 'hycTree',
    component: () => import('@/views/hycTree')
  }

]

const router = new VueRouter({
  routes
})

export default router
