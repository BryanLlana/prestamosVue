<script setup>
import Customer from '@/components/Customer.vue';
import { RouterLink } from 'vue-router';
import { useCustomerStore } from '@/stores/customer';

const customerStore = useCustomerStore()
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Clientes</h1>
      <RouterLink 
        :to="{ name: 'new-customer'}"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center"
      >Nuevo Cliente
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      <Customer 
        v-for="customer in customerStore.customers"
        :customer="customer"
        :key="customer.id"
      />
    </div>
  </div>
</template>