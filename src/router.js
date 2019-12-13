import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { headshow: true, footshow: true }
    },
    {
      path: '/toxic',
      name: 'toxic',
      component: () => import('./views/Toxic.vue'),
      meta: { headshow: false, footshow: true }
    },
    {
      path: '/dfof',
      name: 'dfof',
      component: () => import('./views/Dfof.vue'),
      meta: { headshow: false, footshow: true }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: { headshow: true, footshow: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { headshow: true, footshow: true }
    }
  ]
})
