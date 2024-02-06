<script setup>
import { useLoanStore } from '@/stores/loan';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Payment from '@/components/Payment.vue'
const loanStore = useLoanStore()
const route = useRoute()

onMounted(() => {
  loanStore.getLoan(route.params.id)
})
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-2xl font-semibold">Pagos - {{ loanStore.loanPagos.customer?.name }} {{ loanStore.loanPagos.customer?.lastName }}</h1>
      <RouterLink :to="{ name: 'loans' }"
        class="bg-[#44487D] text-[#F1EFCC] text-md font-semibold py-1 px-3 rounded-md text-center">Volver
      </RouterLink>
    </div>

    <ul class="space-y-4">
      <Payment 
        v-for="payment in loanStore.loanPagos.payments"
        :payment="payment"
        :key="payment.id"
      />
    </ul>
  </div>
</template>