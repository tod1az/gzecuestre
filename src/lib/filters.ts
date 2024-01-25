import { type HomeSearchParams } from './types'
export const setFilters = (searchParams: HomeSearchParams) => {
  const { maxalzada, minalzada, maxedad, minedad, maxprecio, minprecio, provincias, razas, disciplinas, sexo, query, maxsalto, minsalto } =
    searchParams
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
    console.log(minedad, maxedad)
    console.log(getDate(Number(minedad)))
    console.log(getDate(Number(maxedad)))
    config = {
      ...config,
      fecha_de_nacimiento: {
        gte: getDate(Number(maxedad)),
        lte: getDate(Number(minedad))
      }
    }
  }
  if (minprecio && maxprecio) {
    maxprecio === '100000'
      ? (config = {
          ...config,
          precio: {
            gte: Number(minprecio)
          }
        })
      : (config = {
          ...config,
          precio: {
            gte: Number(minprecio),
            lte: Number(maxprecio)
          }
        })
  }
  if (provincias) {
    config = {
      ...config,
      provinceId: {
        search: format(provincias)
      }
    }
  }
  if (razas) {
    config = {
      ...config,
      razaId: {
        search: format(razas)
      }
    }
  }

  if (disciplinas) {
    config = {
      ...config,
      disciplinaId: {
        search: format(disciplinas)
      }
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
  const searchedDate = new Date(currentDate.getFullYear() - age, currentDate.getMonth(), currentDate.getDay())
  return searchedDate
}

function format(provincias: string) {
  if (!provincias.includes('&')) {
    return provincias
  }
  return provincias.split('&').join('|')
}
