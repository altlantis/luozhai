import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import detail from '@/view/detail/detail.vue'
import loupan from '@/view/loupan/loupan.vue'
import hui from '@/view/hui/hui.vue'
import group from '@/view/group/group.vue'


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
    },
    {
      path:'/loupan',
      component : loupan
    },
    {
      path:'/hui',
      component : hui
    },
    {
      path:'/group',
      component : group
    }
  ]
})
