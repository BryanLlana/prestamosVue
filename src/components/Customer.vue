<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-white rounded-lg p-4 shadow-md space-y-1">
    <h2 class="text-xl font-semibold border-b border-gray-400 pb-1">Bryan Tito Llana</h2>
    <p class="text-gray-600">Dirección: <span>Huaycan</span></p>
    <p class="text-gray-600">Celular: <span>12345677</span></p>
    <p class="text-gray-600">Referencia: <span>No hay referencias</span></p>
    <div class="flex gap-4 pt-2">
      <RouterLink
        :to="{ name: 'edit-customer', params: { id: 1 }}"
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