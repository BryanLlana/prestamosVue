import { api } from "@/lib/axios"; 

export const loanApi = {
  getLoans: async () => {
    return await api.get('/loans')
  }
}