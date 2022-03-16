import Vue from 'vue'
import VueRouter from 'vue-router'
let Home = () => import('../views/home/Home.vue')
let Search = () => import('../views/search/Search.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
    
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path: '/search',
    name: 'Search',
    component: Search

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
