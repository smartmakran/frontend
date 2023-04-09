import { useApi } from "/@src/composable/useApi";
import { ITask } from "/@src/interfaces/task.interface";

const api = useApi()

export async function getTasksList(userId: string): Promise<ITask[]> {
  const { data } = await api.get(`/task/user/${userId}`)
  return data.data
}

