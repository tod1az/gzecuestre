import { type HomeSearchParams } from './types'
export const setFilters = (searchParams: HomeSearchParams) => {
  if (!searchParams) return false
  const { maxalzada, minalzada, maxedad, minedad, maxprecio, minprecio, provincias, razas, disciplinas, sexo, query, maxsalto, minsalto } =
    searchParams
  const filters = []
  if (maxalzada && minalzada) {
    filters.push({
      alzada: {
        gte: Number(minalzada),
        lte: Number(maxalzada)
      }
    })
  }
  if (minsalto && maxsalto) {
    filters.push({
      salto: {
        gte: Number(minsalto),
        lte: Number(maxsalto)
      }
    })
  }
  if (minedad && maxedad) {
    filters.push({
      fecha_de_nacimiento: {
        gte: getDate(Number(maxedad)),
        lte: getDate(Number(minedad))
      }
    })
  }
  if (minprecio && maxprecio) {
    const priceFilter =
      maxprecio === '100000'
        ? {
            precio: {
              gte: Number(minprecio)
            }
          }
        : {
            precio: {
              gte: Number(minprecio),
              lte: Number(maxprecio)
            }
          }

    filters.push({
      OR: [
        priceFilter,
        {
          precio_visible: false
        }
      ]
    })
  }
  if (provincias) {
    filters.push({
      provinciaId: {
        search: format(provincias)
      }
    })
  }
  if (razas) {
    filters.push({
      razaId: {
        search: format(razas)
      }
    })
  }

  if (disciplinas) {
    filters.push({
      disciplinaId: {
        search: format(disciplinas)
      }
    })
  }

  if (sexo) {
    filters.push({
      sex: {
        contains: sexo,
        mode: 'insensitive'
      }
    })
  }
  if (query) {
    filters.push({
      nombre: {
        contains: query,
        mode: 'insensitive'
      }
    })
  }
  return {
    AND: filters
  }
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
