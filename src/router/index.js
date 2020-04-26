import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import YuJing from '../views/YuJing.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home, children: [{ path: 'yujing', component: YuJing }] },
  { path: '/search', component: Search },
  { path: '/', redirect: '/home' }
]
const router = new VueRouter({
  routes
})
export default router
