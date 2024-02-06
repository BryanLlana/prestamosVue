<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { usePaymentStore } from '@/stores/payment'
import { onMounted } from 'vue';
import Alerta from '@/components/Alerta.vue';

const paymentStore = usePaymentStore()
const route = useRoute()

onMounted(async () => {
  await paymentStore.getPaymentById(route.params.id)
})

</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Editar Pago Cuota</h1>
      <RouterLink :to="{ name: 'payments' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <Alerta v-if="paymentStore.alert?.message" :error="paymentStore.alert?.error">
      {{ paymentStore.alert?.message }}
    </Alerta>

    <form @submit="paymentStore.updatePayment" class="mt-10 md:w-[800px] md:mx-auto">
      <div class="mb-4">
        <label for="cantidad" class="block text-gray-700 text-sm font-bold mb-2">Monto:</label>
        <input
          disabled
          v-model="paymentStore.payment.amount"
          type="number"
          id="cantidad"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
      </div>

      <div class="mb-4">
        <label for="fecha" class="block text-gray-700 text-sm font-bold mb-2">Fecha de Pago:</label>
        <input
          v-model="paymentStore.payment.date"
          type="date"
          id="fecha"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
      </div>

      <div class="mb-4">
        <label for="cliente" class="block text-gray-700 text-sm font-bold mb-2">Estado:</label>
        <select v-model="paymentStore.payment.state" id="cliente" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
          <option :value="true" :selected="paymentStore.payment.state === true">Pagado</option>
          <option :value="false" :selected="paymentStore.payment.state === false" >Pendiente</option>
        </select>
      </div>

      <button
        type="submit"
        class="bg-[#44487D] text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
      >Actualizar Pago
      </button>
    </form>
  </div>
</template>