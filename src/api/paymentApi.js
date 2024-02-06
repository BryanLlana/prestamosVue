import { api } from "@/lib/axios";

export const paymentApi = {
  getPayment: async id => {
    return await api.get(`/payments/${id}`)
  }
}