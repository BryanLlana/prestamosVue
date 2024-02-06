<script setup>
import { useCustomerStore } from '@/stores/customer';
import { useLoanStore } from '@/stores/loan';
import AlertaInput from '@/components/AlertaInput.vue';
import Alerta from '@/components/Alerta.vue';
const customerStore = useCustomerStore()
const loanStore = useLoanStore()
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Nuevo Préstamo</h1>
      <RouterLink :to="{ name: 'loans' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <Alerta v-if="loanStore.alert.message" :error="loanStore.alert.error">
      {{ loanStore.alert.message }}
    </Alerta>

    <form @submit="loanStore.createLoan" class="mt-10 md:w-[800px] md:mx-auto">
      <div class="mb-4">
        <label for="cantidad" class="block text-gray-700 text-sm font-bold mb-2">Cantidad:</label>
        <input
          v-model="loanStore.loan.amount"
          type="number"
          id="cantidad"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese la cantidad"
        >
        <AlertaInput v-if="loanStore.errorsInput.amount">{{ loanStore.errorsInput.amount }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="interes" class="block text-gray-700 text-sm font-bold mb-2">Interés (%):</label>
        <input
          v-model="loanStore.loan.interest"
          type="text"
          id="interes"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese el interés"
        >
        <AlertaInput v-if="loanStore.errorsInput.interest">{{ loanStore.errorsInput.interest }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="pagos" class="block text-gray-700 text-sm font-bold mb-2">Número de Pagos:</label>
        <input
          v-model="loanStore.loan.quantity"
          type="number"
          id="pagos"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese el número de pagos"
        >
        <AlertaInput v-if="loanStore.errorsInput.quantity">{{ loanStore.errorsInput.quantity }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="fecha" class="block text-gray-700 text-sm font-bold mb-2">Fecha de Pago:</label>
        <input
          v-model="loanStore.loan.date"
          type="date"
          id="fecha"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
        <AlertaInput v-if="loanStore.errorsInput.date">{{ loanStore.errorsInput.date }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="cliente" class="block text-gray-700 text-sm font-bold mb-2">Cliente:</label>
        <select v-model="loanStore.loan.customer" id="cliente" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>--Seleccione--</option>
            <option
              v-for="customer in customerStore.customers"
              :value="customer.id"
            >{{ customer.name + ' ' + customer.lastName }}</option>
        </select>
        <AlertaInput v-if="loanStore.errorsInput.customer">{{ loanStore.errorsInput.customer }}</AlertaInput>
      </div>

      <button
        type="submit"
        class="bg-[#44487D] text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
      >Agregar Préstamo
      </button>
    </form>
  </div>
</template>