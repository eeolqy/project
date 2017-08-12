
import Hello from '@/components/Hello'
import NotFind from '@/templates/not_find'
import Echarts from '@/components/echarts'
import Index from '@/templates/index'
import VueApi from '@/templates/vue_api'
import Two from '@/templates/two'
console.log(VueRouter)

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
          redirect:'/one'
      },{
          path: '/two',
          component: Two
      },{

          path: '/one',
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
