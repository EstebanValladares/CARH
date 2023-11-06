import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Regeneration.vue')
    },
    {
      path: '/thin',
      name: 'thin',
      component: () => import('../views/Thinking.vue')
    },
    {
      path: '/disc',
      name: 'disc',
      component: () => import('../views/Discovering.vue')
    },
    {
      path: '/maint',
      name: 'maint',
      component: () => import('../views/Maintaining.vue')
    },
    {
      path: '/us',
      name: 'us',
      component: () => import('../views/Us.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('')
    }
  ]
})

export default router
