import { useNotyf } from './useNotyf'
import { useUserStore } from '../stores/user'
import axios, { AxiosInstance } from 'axios'

let api: AxiosInstance

const notyf = useNotyf()

export function createApi() {
  // Here we set the base URL for all requests made to the api
  api = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL,
    baseURL: 'https://api.smartmakran.ir/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use(
    (config) => {
      const userStore = useUserStore()

      if (userStore.isLoggedIn) {
        config.headers = {
          ...config.headers,
          Authorization: `${userStore.token}`,
        }
      }

      return config
    },
    (error) => {
      if (error.message === 'Network Error') {
        notyf.error({
          message: 'خطای شبکه',
          duration: 5000,
        })
        return Promise.reject(error)
      }
    }
  )

  return api
}

export function useApi() {
  if (!api) {
    createApi()
  }
  return api
}
