import { api } from "@/lib/axios"; 

export const loanApi = {
  getLoans: async () => {
    return await api.get('/loans')
  },
  createLoan: async data => {
    return await api.post('/loans', data)
  },
  getLoan: async id => {
    return await api.get(`/loans/${id}`)
  },
  deleteLoan: async id => {
    return await api.delete(`/loans/${id}`)
  }
}