import { api } from "@/lib/axios";

export const customerApi = {
  createCustomer: async data => {
    return await api.post('/customers', data)
  },
  getCostumers: async () => {
    return await api.get('/customers')
  }
}