<script setup>
import { RouterLink } from 'vue-router'
import { useCustomerStore } from '@/stores/customer';

defineProps({
  customer: {
    type: Object,
    required: true
  }
})

const customerStore = useCustomerStore()
</script>

<template>
  <div class="bg-white rounded-lg p-4 shadow-md space-y-1">
    <h2 class="text-xl font-semibold border-b border-gray-400 pb-1">{{ customer.name + ' ' + customer.lastName }}</h2>
    <p class="text-gray-600 font-semibold">Dirección: <span class="font-normal">{{ customer.address }}</span></p>
    <p class="text-gray-600 font-semibold">Celular: <span class="font-normal">{{ customer.phone }}</span></p>
    <p class="text-gray-600 font-semibold" v-if="customer.reference">Referencia: <span class="font-normal">{{ customer.reference }}</span></p>
    <div class="flex gap-4 pt-2">
      <RouterLink
        :to="{ name: 'edit-customer', params: { id: customer.id }}"
        class="bg-green-400 py-1 px-3 rounded-md text-center"
      >Editar
      </RouterLink>
      <button 
        @click="customerStore.deleteCustomerById(customer.id)"
        type="button"
        class="bg-red-400 py-1 px-3 rounded-md text-center"
      >Eliminar
      </button>
    </div>
  </div>
</template>