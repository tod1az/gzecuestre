import { horses, breeds } from './data'
import { setFilters } from './filters'
import { HomeSearchParams } from './types'

const perPage = 20
export const getHorse = async (id: string) => {
  return await horses.find((horse) => horse.id === id)
}

export const getHorses = async (searchParams: HomeSearchParams) => {
  const page = (Number(searchParams.page) ?? 1) - 1
  const order = searchParams.orden ?? 'asc'
  const filters = setFilters(searchParams)
  //return await prisma.horses.findMany({
  //skip:page*perPage
  //take:perPage
  //where: filters,
  //orderBy:{
  //price:order
  //}
  //})
  return await horses
}

export const getBreeds = async () => {
  return await breeds
}
