import { useApi } from '/@src/composable/useApi'

const api = useApi()

export async function getPondList() {
  try {
    const { data } = await api.get('/pond')
    return data
  } catch (err: any) {
    throw err
  }
}
