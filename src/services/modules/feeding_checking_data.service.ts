import { IFeedingCheckingData } from '/@src/interfaces/feeding_checking_data.interface'
import { useApi } from '/@src/composable/useApi'
const api = useApi()

export async function feedingCheckingDataHandler(
  body: IFeedingCheckingData
): Promise<number> {
  const { status } = await api.post('/manualMonitoring/feedingCheck', body)
  return status
}
