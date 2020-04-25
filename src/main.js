import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant组件
import './assets/vant/index.js'
// 导入初始化css样式
import './assets/css/base.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
