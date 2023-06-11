import { useApi } from '/@src/composable/useApi'
import { ICreateChangingWaterData } from '/@src/interfaces/manual-monitoring/changingWater.interface'
import { ICreateFeedingData } from '/@src/interfaces/manual-monitoring/feeding.interface'
import { ICreateSamplingData } from '/@src/interfaces/manual-monitoring/sampling.interface'
import { ICreateTransparencyData } from '/@src/interfaces/manual-monitoring/transparency.interface'
import { ICreatePond, IPond } from '/@src/interfaces/pond.interface'

const api = useApi()

export async function getPondList() {
  try {
    const { data } = await api.get('/pond')
    localStorage.setItem('poolList', JSON.stringify(data.data))
    return data
  } catch (err: any) {
    throw err
  }
}
// export async function getAllPond() {
//   try {
//     const { data } = await api.get('/pond')
//     return data
//   } catch (err: any) {
//     throw err
//   }
// }

export async function getPondDetails(id: string): Promise<IPond> {
  const { data } = await api.get(`/pond/${id}`)
  console.log(data)
  return data
}

export async function createPond(pond: ICreatePond): Promise<number> {
  const { status } = await api.post('/pond', pond)
  return status
}

export async function manualMonitoring(pondId: string): Promise<any> {
  const { data } = await api.get(`/manualMonitoring/${pondId}`)
  return data
}

export async function createSamplingData(body: ICreateSamplingData): Promise<number> {
  const { status } = await api.post('/manualMonitoring/sampling', body)
  return status
}

export async function createFeedingData(body: ICreateFeedingData): Promise<number> {
  const { status } = await api.post('/manualMonitoring/feeding', body)
  return status
}

export async function createChangingWaterData(
  body: ICreateChangingWaterData
): Promise<number> {
  const { status } = await api.post('/manualMonitoring/changing-water', body)
  return status
}

export async function createTransparencyData(
  body: ICreateTransparencyData
): Promise<number> {
  const { status } = await api.post('/manualMonitoring/transparency', body)
  return status
}
