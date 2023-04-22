export interface IPond {
  id: string
  name: string
  dimensions: {
    width: number
    length: number
    depth: number
    waterHeight: number
  }
  startFarming: Date
  larvaCount: number
  density: number
  createdAt: Date
  updatedAt: Date
}

export interface ICreatePond {
  farm: string
  name: string
  dimensions: {
    width: number
    length: number
    depth: number
    waterHeight: number
  }
  startFarming: Date
  larvaCount: number
}
