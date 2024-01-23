import { type HomeSearchParams } from './types'
export const setFilters = (searchParams: HomeSearchParams) => {
  const { maxalzada, minalzada, maxedad, minedad, maxprecio, minprecio, , raza, sexo, query, maxsalto, minsalto } = searchParams
  let config = {}
  if (maxalzada && minalzada) {
    config = {
      ...config,
      alzada: {
        gte: Number(minalzada),
        lte: Number(maxalzada)
      }
    }
  }
  if (minsalto && maxsalto) {
    config = {
      ...config,
      salto: {
        gte: Number(minsalto),
        lte: Number(maxsalto)
      }
    }
  }
  if (minedad && maxedad) {
    config = {
      ...config,
      birthdate: {
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
  if () {
    config = {
      ...config,
      provincia: {
        search: format()
      }
    }
  }
  if (raza) {
    config = {
      ...config,
      raza: raza
    }
  }
  if (sexo) {
    config = {
      ...config,
      sex: {
        contains: sexo,
        mode: 'insensitive'
      }
    }
  }
  if (query) {
    config = {
      ...config,
      nombre: {
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

function format(: string) {
  console.log()
  if (!.includes('&')) {
    return 
  }
  return .split('&').join('|')
}
