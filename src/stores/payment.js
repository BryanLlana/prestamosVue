import { paymentApi } from "@/api/paymentApi";
import { defineStore } from "pinia";
import { reactive, onMounted } from 'vue'

export const usePaymentStore = defineStore('payment', () => {
  const payment = reactive({
    amount: '',
    date: '',
    state: ''
  })

  const getPaymentById = async id => {
    const { data } = await paymentApi.getPayment(id)
    payment.amount = data.payment.amount
    payment.date = data.payment.date.split('T')[0]
    payment.state = data.payment.state
  }

  return {
    payment,
    getPaymentById
  }
})