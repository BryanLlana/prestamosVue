import { paymentApi } from "@/api/paymentApi";
import { convertToDDMMYYYY } from "@/helpers";
import { defineStore } from "pinia";
import { reactive, ref } from 'vue'
import { useRouter } from "vue-router";

export const usePaymentStore = defineStore('payment', () => {
  const payment = reactive({
    id: '',
    amount: '',
    date: '',
    state: ''
  })

  const errorsInput = ref({})
  const alert = reactive({
    message: '',
    error: false
  })

  const router = useRouter()

  const getPaymentById = async id => {
    const { data } = await paymentApi.getPayment(id)
    payment.id = data.payment.id
    payment.amount = data.payment.amount
    payment.date = data.payment.date.split('T')[0]
    payment.state = data.payment.state
  }

  const updatePayment = async e => {
    e.preventDefault()
    errorsInput.value = {}
    try {
      const { id, date, ...values } = payment
      const { data } = await paymentApi.updatePayment(id, {
        date: convertToDDMMYYYY(date),
        ...values
      })
      alert.message = data.message

      setTimeout(() => {
        alert.message = ''
        router.push({ name: 'loans' })
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    payment,
    getPaymentById,
    updatePayment,
    alert,
    errorsInput
  }
})