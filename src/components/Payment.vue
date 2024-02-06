<script setup>
import { RouterLink } from 'vue-router';
import { convertToDDMMYYYY, formatCurrency } from '@/helpers'

defineProps({
  payment: {
    type: Object
  }
})
</script>

<template>
  <li class="flex justify-between items-center border-b border-gray-500 pb-2">
    <div class="space-y-1">
      <h2 class="text-lg font-semibold">Pago de Cuota</h2>
      <p class="text-gray-600 font-semibold">Fecha: {{ convertToDDMMYYYY(payment.date) }}</p>
      <p class="text-gray-600 font-semibold">Monto: {{ formatCurrency(payment.amount) }}</p>
      <button
        type="submit"
        class="text-white font-semibold bg-green-400 py-1 px-7 rounded-md text-center"
        :class="payment.state ? 'bg-green-400' : 'bg-red-400'"
      >{{ payment.state ? 'Pagado' : 'Pendiente' }}
      </button>
    </div>
    <div class="flex items-center">
      <RouterLink :to="{ name: 'edit-customer', params: { id: 1 } }"
        class="bg-yellow-400 py-1 px-3 rounded-md text-center">Editar
      </RouterLink>
    </div>
  </li>
</template>