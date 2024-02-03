import { customerApi } from "@/api/customerApi";
import { defineStore } from "pinia";
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"; 

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref([])
  const customer = reactive({
    name: '',
    lastName: '',
    address: '',
    phone: '',
    reference: ''
  })
  const errorsInput = ref({})
  const alert = reactive({
    message: '',
    error: false
  })
  const router = useRouter()

  onMounted(async () => {
    try {
      const { data } = await customerApi.getCostumers()
      customers.value = data.customers
    } catch (error) {
      console.log(error)
    }
  })

  const createCustomer = async e => {
    e.preventDefault()
    try {
      const { data } = await customerApi.createCustomer(customer) 
      alert.message = data.message
      customers.value = [...customers.value, data.customer]

      setTimeout(() => {
        alert.message = ''
        router.push({ name: 'customers' })
      }, 3000)
    } catch (error) {
      const errors = error.response.data.errors ?? ''
      if (errors) errorsInput.value = errors
    }
  }

  return {
    customers,
    customer,
    createCustomer,
    errorsInput,
    alert
  }
})