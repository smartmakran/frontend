import { defineStore } from 'pinia'
import { feedingCheckingDataHandler } from '../services/modules/feeding_checking_data.service'
import { IFeedingCheckingData } from '../interfaces/feeding_checking_data.interface'

export const useFeedingCheckingDataStore = defineStore({
  id: 'feedingCheckingData',
  state: () => ({
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async feedingCheckingDataHandler(feedingCheckingData: IFeedingCheckingData) {
      try {
        this.loading = true
        return await feedingCheckingDataHandler(feedingCheckingData)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
