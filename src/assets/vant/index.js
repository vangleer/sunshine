import Vue from 'vue'
// 全局组件
import MyPullRefresh from '../../components/PullRefresh'
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
  Tab,
  NavBar,
  Cell,
  Progress,
  Rate,
  Divider
} from 'vant'
Vue.use(Rate)
Vue.use(Divider)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(Progress)
Vue.use(NavBar)
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
Vue.component('PullRefresh', MyPullRefresh)
Vue.prototype.$toast = Toast
