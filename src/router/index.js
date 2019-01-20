import Vue from 'vue'
import Router from 'vue-router'
import wrapYu from '@/components/wrapYu'
import Detail from '@/components/Detail'
import TiaoOne from '@/components/detial/TiaoOne'
import TiaoTwo from '@/components/detial/TiaoTwo'
import TiaoThree from '@/components/detial/TiaoThree'
import TiaoFour from '@/components/detial/TiaoFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wrapYu',
      component: wrapYu
    },
    {
      path: '/Detail',
      name: 'Detail',
      component:Detail,
      redirect:'/Detail/TiaoOne',
      children:[{
        path: '/Detail/TiaoOne',
        name: 'TiaoOne',
        component: TiaoOne
      },
        {
          path: '/Detail/TiaoTwo',
          name: 'TiaoTwo',
          component: TiaoTwo
        },
        {
          path: '/Detail/TiaoThree',
          name: 'TiaoThree',
          component: TiaoThree
        },
        {
          path: '/Detail/TiaoFour',
          name: 'TiaoFour',
          component: TiaoFour
        }]
    }
  ],
  mode: 'history'
})
