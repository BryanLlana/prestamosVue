<script setup>
import Loan from '@/components/Loan.vue';

</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Préstamos</h1>
      <RouterLink 
          :to="{ name: 'new-loan'}"
          class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center"
        >Nuevo Préstamo
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
      <Loan />
    </div>
  </div>
</template>