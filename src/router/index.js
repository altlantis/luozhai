import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import detail from '@/view/detail/detail.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/detail',
    	component : detail
    },
    {
    	path:'/index',
    	component : index
    }
  ]
})
