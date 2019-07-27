import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Tasks from '@/components/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      },
      meta: {
        title: 'ГЛАВНАЯ СТРАНИЦА'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Леееееееера'
      }
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
      meta: {
        title: 'ЗАДАЧИ'
      }
    }
  ]
})
