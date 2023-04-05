import { useApi } from '/@src/composable/useApi'
import { IFarm } from '/@src/interfaces/farm.interface'

const api = useApi()

export async function getFarmsList(): Promise<IFarm[]> {
  const { data } = await api.get('/farm')
  return data.data
}

export async function getFarmDetails(id: string): Promise<IFarm> {
  const { data } = await api.get(`/farm/${id}`)
  return data
}
