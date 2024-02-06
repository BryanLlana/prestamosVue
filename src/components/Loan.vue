<script setup>
import { formatCurrency, displayDate } from '@/helpers'
import { useLoanStore } from '@/stores/loan';
defineProps({
  loan: {
    type: Object
  }
})

const loanStore = useLoanStore()
</script>

<template>
  <div class="bg-white rounded-lg p-4 shadow-md space-y-1">
    <h2 class="text-xl font-semibold border-b border-gray-400 pb-1">Préstamo - {{ loan.customer.name }} {{ loan.customer.lastName }}</h2>
    <p class="text-gray-600">Cantidad: <span>{{ formatCurrency(loan.amount) }}</span></p>
    <p class="text-gray-600">Interés: <span>{{ formatCurrency(loan.amount * loan.interest) }} ({{ loan.interest * 100 }}%)</span></p>
    <p class="text-gray-600">Pagos: <span>{{ loanStore.countPaymentsCompleted(loan.payments) }} de {{ loan.payments.length }}</span></p>
    <p class="text-gray-600">Fecha: <span>{{ displayDate(loan.date) }}</span></p>
    <div class="flex pt-2 gap-4">
      <RouterLink
      :to="{ name: 'payments', params: { id: loan.id} }"
      class="bg-yellow-400 py-1 px-3 rounded-md text-center"
      >Ver Pagos
    </RouterLink>
    <button 
      type="button"
      class="bg-red-400 py-1 px-3 rounded-md text-center"
    >Eliminar
    </button>
    </div>
  </div>
</template>