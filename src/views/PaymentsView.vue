<script setup>
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-2xl font-semibold">Pagos</h1>
      <RouterLink :to="{ name: 'loans' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <ul class="space-y-4">
      <li class="flex justify-between items-center border-b border-gray-500 pb-2">
        <div class="space-y-1">
          <h2 class="text-lg font-semibold">Pago de Cuota 1</h2>
          <p class="text-gray-600">Fecha: 01/02/2024</p>
          <button
            type="submit"
            class="text-white font-semibold bg-green-400 py-1 px-7 rounded-md text-center"
          >Pagado
          </button>
        </div>
        <div class="flex items-center">
          <RouterLink
            :to="{ name: 'edit-customer', params: { id: 1 } }"
            class="bg-yellow-400 py-1 px-3 rounded-md text-center"
          >Editar
          </RouterLink>
        </div>
      </li>
      <li class="flex justify-between items-center border-b border-gray-500 pb-2">
        <div class="space-y-1">
          <h2 class="text-lg font-semibold">Pago de Cuota 1</h2>
          <p class="text-gray-600">Fecha: 01/02/2024</p>
          <button
            type="submit"
            class="text-white font-semibold bg-green-400 py-1 px-7 rounded-md text-center"
          >Pagado
          </button>
        </div>
        <div class="flex items-center">
          <RouterLink
            :to="{ name: 'edit-customer', params: { id: 1 } }"
            class="bg-yellow-400 py-1 px-3 rounded-md text-center"
          >Editar
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>