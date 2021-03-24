import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import index2 from "@/components/index2"
import index3 from "@/components/index3"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/index2',
      name: 'index2',
      component: index2
    },
    {
      path: '/index3',
      name: 'index3',
      component: index3
    }
  ],
  mode: 'history'
})
