import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios.js'
import './plugins/vant.js'
import util from './utils'
import './assets/global.css'

Vue.config.productionTip = false
Vue.use(util);

/* 自定义路由拦截 */
router.beforeEach((to, form, next) => {
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
