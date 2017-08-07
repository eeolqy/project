import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NotFind from '@/templates/not_find'
import Echarts from '@/components/echarts'
import Index from '@/templates/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '*',
     name:'*',
     component: NotFind
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path:'/echarts',
    	component:Echarts
    },
    {
        path:'/hello',
        component:Hello
    }
  ]
})
