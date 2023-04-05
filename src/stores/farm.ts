import { defineStore } from 'pinia'
import { getFarmDetails, getFarmsList } from '../services/modules/farm/farm.service'
import { IFarm } from '../interfaces/farm.interface'

export const useFarmStore = defineStore({
  id: 'farm',
  state: () => ({
    list: [] as IFarm[],
    currentFarm: {} as IFarm,
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async getFarmsList() {
      try {
        this.loading = true
        this.list = await getFarmsList()
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
    async getFarm(id: string) {
      try {
        this.loading = true
        this.currentFarm = await getFarmDetails(id)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
