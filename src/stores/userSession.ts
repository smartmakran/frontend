import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { User } from '../models/user.model'

export const useUserSession = defineStore({
  id: 'userSession',
  state: () => {
    // token will be synced with local storage
    // @see https://vueuse.org/core/usestorage/
    const token = useStorage('token', '')

    const user = useStorage<string>('user', null, localStorage)
    const loading = ref(true)

    const isLoggedIn = computed(() => token.value !== undefined && token.value !== '')

    function setUser(newUser: User) {
      user.value = JSON.stringify(newUser)
    }

    function getUser(): User {
      return JSON.parse(user.value)
    }

    function setToken(newToken: string) {
      token.value = newToken
    }

    function setLoading(newLoading: boolean) {
      loading.value = newLoading
    }

    function logoutUser() {
      token.value = undefined
      user.value = undefined
    }

    return {
      user,
      token,
      isLoggedIn,
      loading,
      logoutUser,
      setUser,
      getUser,
      setToken,
      setLoading,
    } as const
  },
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot))
}
