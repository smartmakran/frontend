import { IPond } from "./pond.interface"

export interface IFarm {
  id: string
  active: boolean
  address: IFarmAddress
  name: string
  owner: string
  phones: [Number]
  ponds: [IPond]
  createdAt: Date
  updatedAt: Date
}

export interface IFarmAddress {
  address: string
  city: string
  coordinates: [Number]
  country: string
  province: string
}
