import { createRouter, createWebHistory } from 'vue-router'
import LayoutViewVue from '@/views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutViewVue,
      children: [
        {
          path: '/clientes',
          name: 'customers',
          component: () => import('@/views/CustomersView.vue')
        },
        {
          path: '/prestamos',
          name: 'loans',
          component: () => import('@/views/LoansView.vue')
        }
      ]
    }
  ]
})

export default router
