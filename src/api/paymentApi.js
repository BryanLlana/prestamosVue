import { api } from "@/lib/axios";

export const paymentApi = {
  getPayment: async id => {
    return await api.get(`/payments/${id}`)
  },
  updatePayment: async (id, data) => {
    return await api.patch(`/payments/${id}`, data)
  },
  getPayments: async () => {
    return await api.get('/payments')
  }
}