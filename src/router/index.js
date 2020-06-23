import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由组件
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import YuJing from '../views/YuJing.vue'
import Find from '../views/Find.vue'
import Community from '../views/Community.vue'
import Message from '../views/Message.vue'
import Film from '../views/Film.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    redirect: '/yujing',
    children: [{
        path: 'find',
        component: Find
      },
      {
        path: 'yujing',
        component: YuJing
      },
      {
        path: 'community',
        component: Community
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/film',
    component: Film
  }
]
const router = new VueRouter({
  routes
})
export default router
