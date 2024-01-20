import { type HomeSearchParams } from './types'
type FilterPropertys = {
  name?: {
    contains: string
    mode: string
  }
  sex?: string
  province?: {
    contains: string
    mode: string
  }
  breed?: string
  age?: {
    gte: Date
    lte: Date
  }
  price?: {
    gte: number
    lte: number
  }
  height?: {
    gte: number
    lte: number
  }
  jump?: {
    gte: number
    lte: number
  }
}

export const setFilters = (searchParams: HomeSearchParams) => {
  const { maxalzada, minalzada, maxedad, minedad, maxprecio, minprecio, provinces, raza, sexo, query, maxsalto, minsalto } = searchParams
  let config: FilterPropertys = {}
  if (maxalzada && minalzada) {
    config = {
      ...config,
      height: {
        gte: Number(minalzada),
        lte: Number(maxalzada)
      }
    }
  }
  if (minsalto && maxsalto) {
    config = {
      ...config,
      jump: {
        gte: Number(minsalto),
        lte: Number(maxsalto)
      }
    }
  }
  if (minedad && maxedad) {
    config = {
      ...config,
      age: {
        gte: getDate(Number(minedad)),
        lte: getDate(Number(maxedad))
      }
    }
  }
  if (minprecio && maxprecio) {
    config = {
      ...config,
      price: {
        gte: Number(minprecio),
        lte: Number(maxprecio)
      }
    }
  }
  if (provinces) {
    config = {
      ...config,
      province: {
        contains: getProvinces(provinces),
        mode: 'insensitive'
      }
    }
  }
  if (raza) {
    config = {
      ...config,
      breed: raza
    }
  }
  if (sexo) {
    config = {
      ...config,
      sex: sexo
    }
  }
  if (query) {
    config = {
      ...config,
      name: {
        contains: query,
        mode: 'insensitive'
      }
    }
  }
  return config
}

function getDate(age: number) {
  const currentDate = new Date(Date.now())
  const searchedDate = new Date(currentDate.getFullYear() - age, currentDate.getMonth(), currentDate.getDate())
  return searchedDate
}

function getProvinces(provinces: string) {
  if (!provinces.includes('&')) return provinces
  return provinces.split('&').join('|')
}
