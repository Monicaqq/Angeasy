import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/City'
import Test from '@/pages/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/city',
    //   name: 'City',
    //   component: City
    // },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
