import { defineStore } from "pinia";
import { getTasksList } from "../services/modules/task/task.service";

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    list: [] as any[],
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async getTasksList(userId: string) {
      try {
        this.loading = true
        this.list = await getTasksList(userId)
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
  }
})

