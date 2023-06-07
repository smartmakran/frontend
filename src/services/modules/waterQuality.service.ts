import { useApi } from '/@src/composable/useApi'
import { IWaterQuality } from '/@src/interfaces/waterQuality.interface'

const api = useApi()
export async function waterQualityHandler(body: IWaterQuality): Promise<number> {
  const { status } = await api.post('/sensor', body)
  return status
}
