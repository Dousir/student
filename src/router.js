import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/news.vue')
    },
    {
      path: '/yiwei',
      name: 'yiwei',
      component: () => import('./views/yiwei.vue')
    }
  ]
})
