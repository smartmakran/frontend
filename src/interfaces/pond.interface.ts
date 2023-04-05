export interface IPond {
  id: string
  name: string
  dimensions: {
    width: number
    length: number
    depth: number
  }
  createdAt: Date
  updatedAt: Date
}
