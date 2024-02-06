import { loanApi } from "@/api/loanApi";
import { defineStore } from "pinia";
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from "vue-router";
import { convertToDDMMYYYY } from '@/helpers'
export const useLoanStore = defineStore('loan', () => {
  const loans = ref([])
  const loan = reactive({
    amount: '',
    interest: '',
    quantity: '',
    date: '',
    customer: ''
  })
  const loanPagos = ref({})

  const router = useRouter()
  const errorsInput = ref({})
  const alert = reactive({
    message: '',
    error: false
  })

  onMounted(async () => {
    try {
      const { data } = await loanApi.getLoans()
      loans.value = data.loans
    } catch (error) {
      console.log(error)
    }
  })


  const createLoan = async e => {
    e.preventDefault()
    errorsInput.value = {}
    try {
      const date = loan.date ? convertToDDMMYYYY(loan.date) : ''
      const { data } = await loanApi.createLoan({
        ...loan,
        date
      }) 
      alert.message = data.message
      loans.value = [...loans.value, data.loan]
      loan.amount = ''
      loan.interest = ''
      loan.quantity = ''
      loan.date = ''
      loan.customer = ''

      setTimeout(() => {
        alert.message = ''
        router.push({ name: 'loans' })
      }, 3000)
    } catch (error) {
      const errors = error.response.data.errors ?? ''
      if (errors) errorsInput.value = errors

      setTimeout(() => {
        errorsInput.value = {}
      }, 3000)
    }
  }

  const getLoan = async id => {
    try {
      const { data } = await loanApi.getLoan(id)
      loanPagos.value = data.loan
    } catch (error) {
      router.push({ name: 'loans' })
    }
  }

  const deleteLoan = async id => {
    if (confirm('¿Estás seguro en eliminar un préstamo?')) {
      try {
        const { data } = await loanApi.deleteLoan(id)
        alert.message = data.message
        loans.value = loans.value.filter(loan => loan.id !== id)
  
        setTimeout(() => {
          alert.message = ''
        }, 3000)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const countPaymentsCompleted = computed(() => {
    return payments => payments.filter(p => p.state === true).length
  })

  return {
    loans,
    loan,
    createLoan,
    countPaymentsCompleted,
    errorsInput,
    alert,
    loanPagos,
    getLoan,
    deleteLoan
  }
})