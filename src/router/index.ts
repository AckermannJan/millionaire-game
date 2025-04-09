import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/launchView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/gameView.vue'),
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('../views/resultsView.vue'),
    },
  ],
})

export default router
