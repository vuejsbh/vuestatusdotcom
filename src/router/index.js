import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/pages/AppMain'
import AppMainNews from '@/pages/AppMainNews'
import AppMainPosts from '@/pages/AppMainPosts'

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/posts',
      component: AppMain,
      children: [
        {
          path: 'posts',
          name: 'AppMainPosts',
          component: AppMainPosts
        },
        {
          path: 'news',
          name: 'AppMainNews',
          component: AppMainNews
        }
      ]
    }
  ]
})
