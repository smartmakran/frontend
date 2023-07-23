import { defineStore } from 'pinia'
import {
  createFarm,
  getFarmDetails,
  getFarmsList,
} from '../services/modules/farm/farm.service'
import { IFarm, ICreateFarm } from '../interfaces/farm.interface'
import { useNotyf } from '../composable/useNotyf'
import { useRouter } from 'vue-router'

const notif = useNotyf()
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
      const router = useRouter()

      try {
        this.loading = true
        this.list = await getFarmsList()
        console.log(this.list)
      } catch (e) {
        this.error = e as Error
        localStorage.removeItem('token')
        router.push({ name: 'auth' })
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
        console.log(farm)
        return await createFarm(farm)
      } catch ({ e, response }) {
        notif.error(response.data.message)

        // console.log((this.error = e as Error))
      } finally {
        this.loading = false
      }
    },
  },
})
