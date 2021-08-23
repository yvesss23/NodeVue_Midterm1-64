import Vue from 'vue'
import Router from 'vue-router'
import CreateUser from '@/components/CreateUser'
import EditUser from '@/components/EditUser'
import IndexUser from '@/components/Index'
import ShowUser from '@/components/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mouse',
      name: 'mouse',
      component: CreateUser
    },
    {
      path: '/mouse',
      name: 'mouse',
      component: EditUser
    },
    {
      path: '/mouses',
      name: 'mouse',
      component: IndexUser
    },
    {
      path: '/mouse',
      name: 'mouse',
      component: ShowUser
    }
  ]
})
