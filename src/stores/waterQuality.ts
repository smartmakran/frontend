import { defineStore } from 'pinia'
import { waterQualityHandler } from '../services/modules/waterQuality.service'
import { IWaterQuality } from '../interfaces/waterQuality.interface'

export const useWaterQualityStore = defineStore({
  id: 'waterQuality',
  state: () => ({
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async waterQualityHandler(waterQuality: IWaterQuality) {
      try {
        this.loading = true
        return await waterQualityHandler(waterQuality)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
