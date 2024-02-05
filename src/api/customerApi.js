import { api } from "@/lib/axios";

export const customerApi = {
  createCustomer: async data => {
    return await api.post('/customers', data)
  },
  getCostumers: async () => {
    return await api.get('/customers')
  },
  getCustomerFindById: async id => {
    return await api.get(`/customers/${id}`)
  },
  updateCustomerById: async (id, data) => {
    return await api.patch(`/customers/${id}`, data)
  }
}