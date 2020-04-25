import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/search', component: Search },
  { path: '/', redirect: '/home' }
]
const router = new VueRouter({
  routes
})
export default router
