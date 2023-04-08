import { defineStore } from 'pinia'
import { IUser } from '../interfaces/user.interface'
import { LoginBody } from '../services/modules/auth/types/login-body.type'
import { login } from '../services/modules/auth/auth.service'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {} as IUser,
    token: '' as string,
    isLoggedIn: false,
    loading: false,
    error: null as null | Error,
  }),
  actions: {
    async login(body: LoginBody) {
      try {
        this.loading = true
        const { user, token } = await login(body)
        this.user = user
        this.token = token
        this.isLoggedIn = true
      } catch (e) {
        this.error = e as Error
      } finally {
        this.loading = false
      }
    },
    async logout() {
      this.user = {} as IUser
      this.token = '' as string
      this.isLoggedIn = false
    },
  },
})
