import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import NotFind from '@/templates/not_find'
//import Echarts from '@/components/echarts'
import Index from '@/templates/index'
import VueApi from '@/templates/vue_api'
import Two from '@/templates/two'
// templates

import Echarts from '@/templates/echarts'
// components
import TableShowHide     from '@/components/table_show_hide'
import TableScrollBar    from '@/components/table_scroll_bar'
import WatchDeep         from '@/components/watch_deep'
import MessageBox        from '@/components/message_box'
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
          component: TableShowHide,
          redirect:'/tableShowHide'
      },{
          path: '/watchDeep',
          component: WatchDeep
      },{
          path: '/messageBox',
          component: MessageBox
      },{
          path: '/tableShowHide',
          component: TableShowHide
      },{
          path: '/tableScrollBar',
          component: TableScrollBar
      },{
          path:'/echarts',
          component:Echarts
      }]
    },
    {
        path:'/hello',
        component:Hello
    }
  ]
})
