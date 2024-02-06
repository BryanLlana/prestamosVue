<script setup>
import { useCustomerStore } from '@/stores/customer';
const customerStore = useCustomerStore()
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Nuevo Préstamo</h1>
      <RouterLink :to="{ name: 'loans' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <form class="mt-10 md:w-[800px] md:mx-auto">
      <div class="mb-4">
        <label for="cantidad" class="block text-gray-700 text-sm font-bold mb-2">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese la cantidad"
        >
      </div>

      <div class="mb-4">
        <label for="interes" class="block text-gray-700 text-sm font-bold mb-2">Interés (%):</label>
        <input
          type="number"
          id="interes"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese el interés"
        >
      </div>

      <div class="mb-4">
        <label for="pagos" class="block text-gray-700 text-sm font-bold mb-2">Número de Pagos:</label>
        <input
          type="number"
          id="pagos"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese el número de pagos"
        >
      </div>

      <div class="mb-4">
        <label for="fecha" class="block text-gray-700 text-sm font-bold mb-2">Fecha de Pago:</label>
        <input
          type="date"
          id="fecha"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
      </div>

      <div class="mb-4">
        <label for="cliente" class="block text-gray-700 text-sm font-bold mb-2">Cliente:</label>
        <select id="cliente" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>--Seleccione--</option>
            <option
              v-for="customer in customerStore.customers"
              :value="customer.id"
            >{{ customer.name + ' ' + customer.lastName }}</option>
        </select>
      </div>

      <button
        type="submit"
        class="bg-[#44487D] text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
      >Agregar Préstamo
      </button>
    </form>
  </div>
</template>