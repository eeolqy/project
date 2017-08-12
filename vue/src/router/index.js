import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import NotFind from '@/templates/not_find'
import Echarts from '@/components/echarts'
import Index from '@/templates/index'
import VueApi from '@/templates/vue_api'
import Two from '@/templates/two'
console.log(VueRouter)
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '*',
      component: NotFind
    },
    {
      path: '',
      component: Index,
      children:[{
          path: '',
          component: VueApi,
          redirect:'/watch'
      },{
          path: '/two',
          component: Two
      },{

          path: '/watch',
          component: VueApi

      }]
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
