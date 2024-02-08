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
          path: '/pagos-del-dia',
          name: 'payments-of-day',
          component: () => import('@/views/PaymentsOfDayView.vue')
        },
        {
          path: '/clientes',
          name: 'customers',
          component: () => import('@/views/CustomersView.vue')
        },
        {
          path: '/clientes/new',
          name: 'new-customer',
          component: () => import('@/views/CustomerNewView.vue')
        },
        {
          path: '/clientes/edit/:id',
          name: 'edit-customer',
          component: () => import('@/views/CustomerEditView.vue')
        },
        {
          path: '/prestamos',
          name: 'loans',
          component: () => import('@/views/LoansView.vue')
        },
        {
          path: '/prestamos/new',
          name: 'new-loan',
          component: () => import('@/views/LoanNewView.vue')
        },
        {
          path: '/pagos/:id',
          name: 'payments',
          component: () => import('@/views/PaymentsView.vue')
        },
        {
          path: '/pagos/edit/:id',
          name: 'edit-payment',
          component: () => import('@/views/PaymentEditView.vue')
        }
      ]
    }
  ]
})

export default router
