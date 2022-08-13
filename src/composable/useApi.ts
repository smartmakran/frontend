import axios, { AxiosInstance } from 'axios'
import { useNotyf } from './useNotyf'
import { useUserSession } from '/@src/stores/userSession'

let api: AxiosInstance

const notyf = useNotyf()

export function createApi() {
  // Here we set the base URL for all requests made to the api
  api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
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
      const userSession = useUserSession()

      if (userSession.isLoggedIn) {
        config.headers = {
          ...config.headers,
          Authorization: `${userSession.token}`,
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
