<script setup>
import Loan from '@/components/Loan.vue';
import { useLoanStore } from '@/stores/loan';
import Alerta from '@/components/Alerta.vue';
const loanStore = useLoanStore()
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

    <Alerta v-if="loanStore.alert.message" :error="loanStore.alert.error">
      {{ loanStore.alert.message }}
    </Alerta>

    <p v-if="loanStore.loans.length < 1" class="font-semibold text-center mt-5">No hay préstamos</p>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
      <Loan
        v-for="loan in loanStore.loans"
        :loan="loan"
        :key="loan.id"
      />
    </div>
  </div>
</template>