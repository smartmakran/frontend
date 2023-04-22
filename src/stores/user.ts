import { defineStore } from 'pinia'
import { IUser } from '../interfaces/user.interface'
import { LoginBody } from '../services/modules/auth/types/login-body.type'
import { login } from '../services/modules/auth/auth.service'
import { useStorage } from '@vueuse/core'

const test = (store: any) => {
  // Load the state from localStorage when the store is created
  const user = localStorage.getItem('myAppUser')
  const token = localStorage.getItem('myAppToken')
  if (user) {
    store.user = JSON.parse(user)
  }
  if (token) {
    store.token = token
  }

  // Listen for changes to the state and update localStorage
  store.$subscribe((mutation, state) => {
    if (mutation.type === 'UPDATE_USER') {
      localStorage.setItem('myAppUser', JSON.stringify(state.user))
    }
    if (mutation.type === 'UPDATE_TOKEN') {
      localStorage.setItem('myAppToken', state.token)
    }
  })
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: useStorage('user', {} as IUser, localStorage),
    token: useStorage('token', '', localStorage),
    loading: false,
    error: null as null | Error,
  }),
  getters: {
    isLoggedIn: (state) => state.token !== undefined && state.token !== '',
  },
  actions: {
    async login(body: LoginBody) {
      try {
        this.loading = true
        const { user, token } = await login(body)
        this.user = user
        this.token = token
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
    async logout() {
      this.user = {} as IUser
      this.token = '' as string
    },
  },
})
