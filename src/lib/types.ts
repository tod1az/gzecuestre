import { Links } from './data'

export type Horse = {
  id: string
  name: string
  breed: string
  age: number
  sex: string
}

export type SectionName = (typeof Links)[number]['name']

export type HomeSearchParams = {
  page?: string
  minedad?: string
  maxedad?: string
  minprecio?: string
  maxprecio?: string
  minalzada?: string
  maxalzada?: string
}
