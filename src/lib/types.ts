import { Links } from './data'
import { horses } from './data'
export type Horse = (typeof horses)[number]

export type SectionName = (typeof Links)[number]['name']

export type HomeSearchParams = {
  page?: string
  provinces?: string
  raza?: string
  minedad?: string
  maxedad?: string
  minprecio?: string
  maxprecio?: string
  minalzada?: string
  maxalzada?: string
  minsalto?: string
  maxsalto?: string
  sexo?: string
  orden?: string
  query?: string
}

export type Measurement = 'cm' | 'años' | '$'
