import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function pool(route: string) {
  try {
    const { data } = await api.get(route)
    return data
  } catch (err: any) {
    throw err
  }
}
