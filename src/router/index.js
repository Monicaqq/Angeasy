import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由,将id存在id变量中
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  //在导航到新路由时滚动到顶部，或者像重新加载真实页面一样保留历史记录条目的滚动位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
