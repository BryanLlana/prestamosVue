<script setup>
import Alerta from '@/components/Alerta.vue';
import AlertaInput from '@/components/AlertaInput.vue';
import { useCustomerStore } from '@/stores/customer';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const customerStore = useCustomerStore()
const route = useRoute()
onMounted(() => {
  customerStore.getCustomerFindById(route.params.id)
})
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Editar Cliente</h1>
      <RouterLink :to="{ name: 'customers' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <Alerta v-if="customerStore.alert.message" :error="customerStore.alert.error">
      {{ customerStore.alert.message }}
    </Alerta>

    <form @submit="customerStore.updateCustomerById" class="mt-10 md:w-[800px] md:mx-auto">
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
        <input
          v-model="customerStore.customerEdit.name"
          type="text"
          id="nombre"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese su nombre"
        >
        <AlertaInput v-if="customerStore.errorsInput.name">{{ customerStore.errorsInput.name }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="apellidos" class="block text-gray-700 text-sm font-bold mb-2">Apellidos:</label>
        <input
          v-model="customerStore.customerEdit.lastName"
          type="text"
          id="apellidos"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese sus apellidos"
        >
        <AlertaInput v-if="customerStore.errorsInput.lastName">{{ customerStore.errorsInput.lastName }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="direccion" class="block text-gray-700 text-sm font-bold mb-2">Dirección:</label>
        <input
          v-model="customerStore.customerEdit.address"
          type="text"
          id="direccion"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese su dirección"
        >
        <AlertaInput v-if="customerStore.errorsInput.address">{{ customerStore.errorsInput.address }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="celular" class="block text-gray-700 text-sm font-bold mb-2">Celular:</label>
        <input
          v-model="customerStore.customerEdit.phone"
          type="tel"
          id="celular"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese su número de celular"
        >
        <AlertaInput v-if="customerStore.errorsInput.phone">{{ customerStore.errorsInput.phone }}</AlertaInput>
      </div>

      <div class="mb-4">
        <label for="referencia" class="block text-gray-700 text-sm font-bold mb-2">Referencia:</label>
        <textarea
          v-model="customerStore.customerEdit.reference"
          id="referencia"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Ingrese una referencia"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-[#44487D] text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
      >Modificar Cliente
      </button>
    </form>
  </div>
</template>