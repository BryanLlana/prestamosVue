<script setup>
</script>

<template>
  <div class="bg-white rounded-lg p-4 shadow-md space-y-1">
    <h2 class="text-xl font-semibold border-b border-gray-400 pb-1">Préstamo - Bryan Tito Llana</h2>
    <p class="text-gray-600">Cantidad: <span>1000</span></p>
    <p class="text-gray-600">Interés: <span>100 (10%)</span></p>
    <p class="text-gray-600">Pagos: <span>1 de 5</span></p>
    <div class="flex pt-2 gap-4">
      <RouterLink
        :to="{ name: 'edit-loan', params: { id: 1 }}"
        class="bg-green-400 py-1 px-3 rounded-md text-center"
      >Editar
      </RouterLink>
      <button 
        type="button"
        class="bg-red-400 py-1 px-3 rounded-md text-center"
      >Eliminar
      </button>
      <RouterLink
        :to="{ name: 'payments', params: { id: 1} }"
        class="bg-yellow-400 py-1 px-3 rounded-md text-center"
      >Ver Pagos
      </RouterLink>
    </div>
  </div>
</template>