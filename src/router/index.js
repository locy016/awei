import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: { headerShow: true, footerShow: true, accessToken: false }
    },
    {
      path: '/toxic',
      name: 'Toxic',
      component: () => import('@/views/toxic'),
      meta: { headerShow: false, footerShow: true, accessToken: false }
    },
    {
      path: '/dfof',
      name: 'Dfof',
      component: () => import('@/views/dfof'),
      meta: { headerShow: false, footerShow: true, accessToken: false }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about'),
      meta: { headerShow: true, footerShow: true, accessToken: false }
    }
  ]
})
