import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import datetime from './datetime.js'
import lunarcalendar from './lunarcalendar.js'
import week from './week.js'

Vue.config.productionTip = false
Vue.use(datetime)
Vue.use(lunarcalendar)
Vue.use(week)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
