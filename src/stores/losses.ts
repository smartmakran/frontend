import { defineStore } from 'pinia'
import { lossesHandler } from '../services/modules/losses.service'
import { ILosses } from '../interfaces/losses.interface'

export const useLossesStore = defineStore({
  id: 'losses',
  state: () => ({
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async lossesHandler(losses: ILosses) {
      try {
        this.loading = true
        return await lossesHandler(losses)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
