import { defineStore } from 'pinia'
import { feedingCheckingHandler } from '../services/modules/feedingChecking.service'
import { IFeedingChecking } from '../interfaces/feedingChecking.interface'

export const useFeedingCheckingStore = defineStore({
  id: 'feedingChecking',
  state: () => ({
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async feedingCheckingHandler(feedingChecking: IFeedingChecking) {
      try {
        this.loading = true
        return await feedingCheckingHandler(feedingChecking)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
