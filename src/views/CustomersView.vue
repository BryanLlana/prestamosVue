<script setup>
import Customer from '@/components/Customer.vue';
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <h1 class="text-2xl font-semibold">Clientes</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      <Customer />
    </div>
  </div>
</template>