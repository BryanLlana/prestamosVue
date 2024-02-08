<script setup>
import PaymentOfDay from '@/components/PaymentOfDay.vue';
import { usePaymentStore } from '@/stores/payment';
import { onMounted } from 'vue';
const paymentStore = usePaymentStore()

onMounted(async () => {
  await paymentStore.getPayments()
})
</script>

<template>
  <div class="container mx-auto py-5 px-4 md:px-0">
    <h1 class="text-2xl font-semibold text-center">Pagos del Día</h1>

    <p v-if="paymentStore.payments.length === 0" class="mt-5">No tienes cobros el día de hoy, puedes descansar </p>
    <ul v-else class="space-y-4 mt-5">
      <PaymentOfDay 
        v-for="payment in paymentStore.payments"
        :payment="payment"
        :key="payment.id"
      />
    </ul>
  </div>
</template>