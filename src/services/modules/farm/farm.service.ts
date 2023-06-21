import { useApi } from '/@src/composable/useApi'
import { IFarm, ICreateFarm } from '/@src/interfaces/farm.interface'

const api = useApi()

export async function getFarmsList(): Promise<IFarm[]> {
  const { data } = await api.get('/farm')
  console.log(data)
  return data.data
}

export async function getFarmDetails(id: string): Promise<IFarm> {
  const { data } = await api.get(`/farm/${id}`)
  return data
}

export async function createFarm(farm: ICreateFarm): Promise<number> {
  const { status } = await api.post('/farm', farm)
  return status
}
