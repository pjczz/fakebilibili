import Vue from 'vue'
import VueRouter from 'vue-router'
let Home = () => import('../views/home/Home.vue')
let Search = () => import('../views/search/Search.vue')

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', component: Home, meta: {
      title: "ViliVili",
      name: "referrer",
      content: "no-referrer"
    }
  },
  {
    path: '/search', component: Search, meta: {
      title: "ViliVili",
      name: "referrer",
      content: "no-referrer"
    }
  }
]

const router = new VueRouter({
  mode:'hash',
  base: process.env.BASE_URL,
 
  routes
})

export default router
