import { Links } from './data'

export type SectionName = (typeof Links)[number]['name']

export type Horse = {
  alzada: number
  created_at: Date
  descripcion: string
  destacado: boolean | null
  disciplina: {
    nombre: string
    id: string
  } | null
  fecha_de_nacimiento: Date
  nombre: string
  nombre_contacto: string
  email: string
  imagenes: string[]
  id: string
  numero: string
  precio: number
  precio_visible: boolean | null
  provincia: {
    nombre: string
    id: string
  } | null
  raza: {
    nombre: string
    id: string
  } | null
  salto: number
  sex: string
  videos: string[] | null
}

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
