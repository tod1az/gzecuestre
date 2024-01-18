import { horses, breeds } from './data'
import { HomeSearchParams } from './types'

export const getHorse = async (id: string) => {
  return await horses.find((horse) => horse.id === id)
}

export const getHorses = async (searchParams: HomeSearchParams) => {
  return await horses
}

export const getBreeds = async () => {
  return await breeds
}
