import { useApi } from '/@src/composable/useApi'
import { User } from '/@src/models/user.model'
import { useUserSession } from '/@src/stores/userSession'

const api = useApi()
const userSession = useUserSession()

type LoginBody = {
  phone: string
  password: string
}

type LoginResponse = {
  data: {
    user: User
    token: string
  }
}

export async function login(route: string, body: LoginBody) {
  try {
    const {
      data: { user, token },
    } = (await api.post(route, {
      phone: body.phone,
      password: body.password,
    })) as LoginResponse

    userSession.setToken(token)
    userSession.setUser(user)
  } catch (err: any) {
    throw err
  }
}

export async function register() {
  try {
    const {
      data: { user, token },
    } = (await api.post('/api/users', {
      phone: '09121234567',
      password: '123456',
    })) as LoginResponse

    userSession.setToken(token)
    userSession.setUser(user)
  } catch (err: any) {
    throw err
  }
}
