<script setup>
import Loan from '@/components/Loan.vue';

</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <h1 class="text-2xl font-semibold">Préstamos</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      <Loan />
    </div>
  </div>
</template>