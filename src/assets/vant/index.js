import Vue from 'vue'
import {
  Button,
  Swipe,
  SwipeItem,
  Circle,
  Popup,
  Tabbar,
  Search,
  TabbarItem,
  PullRefresh,
  Toast,
  Loading,
  Tabs,
  Tab
} from 'vant'
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Search)
Vue.use(Loading)
Vue.use(PullRefresh)
Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Circle)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.prototype.$toast = Toast
