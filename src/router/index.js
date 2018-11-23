import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
