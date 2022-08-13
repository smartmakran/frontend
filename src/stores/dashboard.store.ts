import { acceptHMRUpdate, defineStore } from 'pinia'

export const useDashboardStore = defineStore({
  id: 'userSession',
  state: () => {
    const dashboard = ''

    return {
      dashboard,
    } as const
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDashboardStore, import.meta.hot))
}
