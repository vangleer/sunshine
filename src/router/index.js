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
import Thank from '../views/Thank.vue'
import Comment from '../views/Comment.vue'
import NewFans from '../views/NewFans.vue'
import Profile from '../views/Profile.vue'
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
          index: 2,
          login: true
        }
      },
      {
        path: 'message',
        component: Message,
        meta: {
          index: 3,
          login: true
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
      index: 5,
      login: true
    }
  },
  {
    path: '/thank',
    component: Thank,
    meta: {
      index: 6,
      login: true
    }
  },
  {
    path: '/comment',
    component: Comment,
    meta: {
      index: 7,
      login: true
    }
  },
  {
    path: '/newfans',
    component: NewFans,
    meta: {
      index: 8,
      login: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      index: 9,
      login: true
    }
  },
  {
    path: '/goal',
    component: () => import('../views/Goal.vue'),
    meta: {
      index: 10,
      login: true
    }
  },
  {
    path: '/adjustment',
    component: () => import('../views/Adjustment.vue'),
    meta: {
      index: 11,
      login: true
    }
  },
  {
    path: '/favorite',
    component: () => import('../views/Favorite.vue'),
    meta: {
      index: 12,
      login: true
    }
  },
  {
    path: '/achievment',
    component: () => import('../views/Achievment.vue'),
    meta: {
      index: 13,
      login: true
    }
  },
  {
    path: '/intergral',
    component: () => import('../views/Integral.vue'),
    meta: {
      index: 14,
      login: true
    }
  },
  {
    path: '/inviteFriends',
    component: () => import('../views/InviteFriends.vue'),
    meta: {
      index: 15,
      login: true
    }
  },
  {
    path: '/settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      index: 16,
      login: true
    }
  }, {
    path: '/feedBack',
    component: () => import('../views/Feedback.vue'),
    meta: {
      index: 17,
      login: true
    }
  },
  {
    path: '/userData',
    component: () => import('../views/UserData.vue'),
    meta: {
      index: 18,
      login: true
    }
  },
  {
    path: '/accountData',
    component: () => import('../views/ZhanghaoData.vue'),
    meta: {
      index: 19,
      login: true
    }
  },
  {
    path: '/devotion',
    component: () => import('../views/Devotion.vue'),
    meta: {
      index: 20,
      login: true
    }
  },
  {
    path: '/playMode',
    component: () => import('../views/PlayMode.vue'),
    meta: {
      index: 21,
      login: true
    }
  },
  {
    path: '/hitList',
    component: () => import('../views/HitList.vue'),
    meta: {
      index: 22,
      login: true
    }
  },
  {
    path: '/aboutUs',
    component: () => import('../views/AboutUs.vue'),
    meta: {
      index: 23
    }
  },
  {
    path: '/serviceContract',
    component: () => import('../views/ServiceContract.vue'),
    meta: {
      index: 24
    }
  },
  {
    path: '/privacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
    meta: {
      index: 25
    }
  },
  {
    path: '/editUser',
    component: () => import('../views/EditUser.vue'),
    meta: {
      index: 26,
      login: true
    }
  },
  {
    path: '/user',
    component: () => import('../views/User.vue'),
    meta: {
      index: 27,
      login: true
    }
  },
  {
    path: '/topic',
    component: () => import('../views/Topic.vue'),
    meta: {
      index: 28
    }
  },
  {
    path: '/introduction',
    component: () => import('../views/Introduction.vue'),
    meta: {
      index: 29
    }
  },
  {
    path: '/vocabulary',
    component: () => import('../views/Vocabulary.vue'),
    meta: {
      index: 30
    }
  },
  {
    path: '/phrase',
    component: () => import('../views/Phrase.vue'),
    meta: {
      index: 31
    }
  },
  {
    path: '/autocue',
    component: () => import('../views/Autocue.vue'),
    meta: {
      index: 32
    }
  },
  {
    path: '/topicDetail',
    component: () => import('../views/TopicDetail.vue'),
    meta: {
      index: 34
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      index: 35
    }
  },
  {
    path: '/test',
    component: () => import('../views/test.vue'),
    meta: {
      index: 36
    }
  },
  {
    path: '/playPage',
    component: () => import('../views/PlayPage.vue'),
    meta: {
      index: 37
    }
  },
  {
    path: '/official',
    component: () => import('../views/Official.vue'),
    meta: {
      index: 38
    }
  }
]
const router = new VueRouter({
  routes
})
export default router
