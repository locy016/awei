import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios.js'
import './plugins/vant.js'
import util from './utils'
import calendar from './utils/calendar.js'
import chickensoup from './utils/chickensoup.js'
import dfofarray from './utils/dfofarray.js'
import './assets/global.css'

Vue.config.productionTip = false
Vue.use(util);
Vue.use(calendar)
Vue.use(chickensoup)
Vue.use(dfofarray)

/* 自定义路由拦截 */
router.beforeEach((to, form, next) => {
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
