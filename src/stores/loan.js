import { loanApi } from "@/api/loanApi";
import { defineStore } from "pinia";
import { ref, onMounted, computed } from 'vue'
export const useLoanStore = defineStore('loan', () => {
  const loans = ref([])

  onMounted(async () => {
    try {
      const { data } = await loanApi.getLoans()
      loans.value = data.loans
    } catch (error) {
      console.log(error)
    }
  })

  const countPaymentsCompleted = computed(() => {
    return payments => payments.filter(p => p.state === true).length
  })

  return {
    loans,
    countPaymentsCompleted
  }
})