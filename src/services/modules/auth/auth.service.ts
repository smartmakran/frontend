import { LoginBody } from './types/login-body.type'
import { IUser } from '/@src/interfaces/user.interface'
import axios from 'axios'

export async function login(body: LoginBody): Promise<{ user: IUser; token: string }> {
  const request = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL,
    baseURL: 'https://api.smartmakran.ir/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  const { data } = await request.post('/auth/login', body)

  return data
}
