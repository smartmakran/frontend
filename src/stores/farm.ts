import { defineStore } from 'pinia'
import {
  createFarm,
  getFarmDetails,
  getFarmsList,
} from '../services/modules/farm/farm.service'
import { IFarm, ICreateFarm } from '../interfaces/farm.interface'

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
        console.log(this.list)
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
        console.log(this.currentFarm.ponds)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
    async createFarm(farm: ICreateFarm) {
      try {
        this.loading = true
        return await createFarm(farm)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  },
})
