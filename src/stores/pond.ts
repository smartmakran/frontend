import { defineStore } from 'pinia'
import {
  createChangingWaterData,
  createFeedingData,
  createPond,
  createSamplingData,
  createTransparencyData,
  getPondDetails,
  getPondList,
  manualMonitoring,
} from '../services/modules/pond/pond.service'
import { ICreatePond, IPond } from '../interfaces/pond.interface'
import { ICreateSamplingData } from '../interfaces/manual-monitoring/sampling.interface'
import { ICreateFeedingData } from '../interfaces/manual-monitoring/feeding.interface'
import { ICreateChangingWaterData } from '../interfaces/manual-monitoring/changingWater.interface'
import { ICreateTransparencyData } from '../interfaces/manual-monitoring/transparency.interface'

export const usePondStore = defineStore({
  id: 'pond',
  state: () => ({
    list: [] as IPond[],
    currentPond: {} as IPond,
    pondObj: {} as IPond,
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
    async getPond(id: string) {
      try {
        this.loading = true
        this.currentPond = await getPondDetails(id)
        this.pondObj = await getPondDetails(id)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
    async createPond(pond: ICreatePond): Promise<number> {
      try {
        this.loading = true
        return await createPond(pond)
        // this.list.push(res)
      } catch (e) {
        this.error = e as Error
        return 0
      } finally {
        this.loading = false
      }
    },
    async manualMonitoring(pondId: string) {
      try {
        this.loading = true
        return await manualMonitoring(pondId)
        // this.list.push(res)
      } catch (e) {
        this.error = e as Error
        return 0
      } finally {
        this.loading = false
      }
    },
    async createSamplingData(body: ICreateSamplingData): Promise<number> {
      try {
        this.loading = true
        return await createSamplingData(body)
      } catch (e) {
        this.error = e as Error
        return 0
      } finally {
        this.loading = false
      }
    },
    async createFeedingData(body: ICreateFeedingData): Promise<number> {
      try {
        this.loading = true
        return await createFeedingData(body)
      } catch (e) {
        this.error = e as Error
        return 0
      } finally {
        this.loading = false
      }
    },
    async createChangingWaterData(body: ICreateChangingWaterData): Promise<number> {
      try {
        this.loading = true
        return await createChangingWaterData(body)
      } catch (e) {
        this.error = e as Error
        return 0
      } finally {
        this.loading = false
      }
    },
    async createTransparencyData(body: ICreateTransparencyData): Promise<number> {
      try {
        this.loading = true
        return await createTransparencyData(body)
      } catch (e) {
        this.error = e as Error
        return 0
      } finally {
        this.loading = false
      }
    },
  },
})
