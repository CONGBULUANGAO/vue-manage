import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/login',
      component: resolve => require(['@/components/page/Login.vue'], resolve)
    }
  ]
})
