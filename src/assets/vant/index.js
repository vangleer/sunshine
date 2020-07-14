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
  Field,
  Divider,
  Uploader,
  Icon,
  ActionSheet,
  Picker,
  DatetimePicker,
  Sidebar,
  SidebarItem,
  IndexAnchor,
  IndexBar,
  Slider,
  Notify,
  Dialog,
  ShareSheet
} from 'vant'
Vue.use(Rate)
Vue.use(ShareSheet)
Vue.use(Slider)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(DatetimePicker)
Vue.use(Picker)
Vue.use(ActionSheet)
Vue.use(Icon)
Vue.use(Uploader)
Vue.use(Field)
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
Vue.prototype.$message = Notify
Vue.prototype.$dialog = Dialog
Vue.filter('dateFormat', (value) => {
  const date = new Date(value)
  const m = date.getMinutes().toString().padStart(2, '0')
  const s = date.getSeconds().toString().padStart(2, '0')

  return `${m}:${s}`
})

Vue.filter('timeFormat', (value) => {
  // value = parseInt(value)

  const m = parseInt((value / 60)).toString().padStart(2, 0)
  const s = parseInt((value % 60)).toString().padStart(2, 0)

  return `${m}:${s}`
})
