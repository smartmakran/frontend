import { IPond } from './pond.interface'

export interface IFarm {
  id: string
  active: boolean
  address: IFarmAddress
  name: string
  owner: string
  phones: number[]
  ponds: IPond[]
  createdAt: Date
  updatedAt: Date
}

export interface IFarmAddress {
  address: string
  city: string
  coordinates: number[]
  country: string
  province: string
}

export interface ICreateFarm {
  name: string
  owner: string
  phones: string[]
  address: IFarmAddress
}
