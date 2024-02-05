<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  customer: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-lg p-4 shadow-md space-y-1">
    <h2 class="text-xl font-semibold border-b border-gray-400 pb-1">{{ customer.name + ' ' + customer.lastName }}</h2>
    <p class="text-gray-600">Dirección: <span>{{ customer.address }}</span></p>
    <p class="text-gray-600">Celular: <span>{{ customer.phone }}</span></p>
    <p class="text-gray-600" v-if="customer.preference">Referencia: <span>{{ customer.preference }}</span></p>
    <div class="flex gap-4 pt-2">
      <RouterLink
        :to="{ name: 'edit-customer', params: { id: customer.id }}"
        class="bg-green-400 py-1 px-3 rounded-md text-center"
      >Editar
      </RouterLink>
      <button 
        type="button"
        class="bg-red-400 py-1 px-3 rounded-md text-center"
      >Eliminar
      </button>
    </div>
  </div>
</template>