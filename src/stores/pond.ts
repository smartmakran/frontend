import { defineStore } from 'pinia'
import { getPondList } from '../services/modules/pond/pond.service'

export const usePondStore = defineStore({
  id: 'pond',
  state: () => ({
    list: [] as any[],
    currentPool: {} as any,
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async getPoolsList() {
      try {
        this.loading = true
        this.list = await getPondList()
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
