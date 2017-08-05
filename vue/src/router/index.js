import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NotFind from '@/templates/not_find'
import Echarts from '@/components/echarts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    { path: '*', component: NotFind },
    {
    	path:'/echarts',
    	component:Echarts
    }
  ]
})
