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
        component: Find,
        meta: {
          index: 0
        }
      },
      {
        path: 'yujing',
        component: YuJing,
        meta: {
          index: 1
        }
      },
      {
        path: 'community',
        component: Community,
        meta: {
          index: 2
        }
      },
      {
        path: 'message',
        component: Message,
        meta: {
          index: 3
        }
      }
    ]
  },
  {
    path: '/search',
    component: Search,
    meta: {
      index: 4
    }
  },
  {
    path: '/film',
    component: Film,
    meta: {
      index: 5
    }
  }
]
const router = new VueRouter({
  routes
})

export default router
