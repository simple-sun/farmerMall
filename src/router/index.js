// createRouter创建路由实例
// createHistory 创建history路由
import { createRouter, createWebHistory } from 'vue-router'
import login  from '@/views/login/login.vue'
import layout from '@/views/layout/layout.vue'
import home   from '@/views/home/home.vue'
import category from '@/views/category/category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {
          path:'',
          name: 'home',
          component: home
        },
        {
          path:'category',
          name: 'category',
          component: category
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router
