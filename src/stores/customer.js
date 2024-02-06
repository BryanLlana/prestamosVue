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
  const customerEdit = reactive({
    id: '',
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
    errorsInput.value = {}
    try {
      const { data } = await customerApi.createCustomer(customer) 
      alert.message = data.message
      customers.value = [...customers.value, data.customer]
      customer.name = ''
      customer.lastName = ''
      customer.address = ''
      customer.phone = ''
      customer.reference = ''

      setTimeout(() => {
        alert.message = ''
        router.push({ name: 'customers' })
      }, 3000)
    } catch (error) {
      const errors = error.response.data.errors ?? ''
      if (errors) errorsInput.value = errors
    }
  }

  const getCustomerFindById = async id => {
    try {
      const { data } = await customerApi.getCustomerFindById(id)
      Object.assign(customerEdit, data.customer)
    } catch (error) {
      router.push({ name: 'customers' })
    }
  }

  const updateCustomerById = async e => {
    e.preventDefault()
    errorsInput.value = {}
    try {
      const { id, ...values } = customerEdit
      const { data } = await customerApi.updateCustomerById(id, values)
      alert.message = data.message
      customers.value = customers.value.map(customer => customer.id === id ? data.customer : customer)

      setTimeout(() => {
        alert.message = ''
        router.push({ name: 'customers' })
      }, 3000)
    } catch (error) {
      const errors = error.response.data.errors ?? ''
      if (errors) errorsInput.value = errors
    }
  }

  const deleteCustomerById = async id => {
    try {
      const { data } = await customerApi.deleteCustomerById(id)
      alert.message = data.message
      customers.value = customers.value.filter(customer => customer.id !== id)

      setTimeout(() => {
        alert.message = ''
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }
 
  return {
    customers,
    customer,
    customerEdit,
    createCustomer,
    getCustomerFindById,
    updateCustomerById,
    deleteCustomerById,
    errorsInput,
    alert
  }
})