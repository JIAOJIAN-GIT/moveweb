import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vants.js'
import 'amfe-flexible'

import './styles/index.css'// 引入全局样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
