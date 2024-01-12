import { horses } from './data'
import { HomeSearchParams } from './types'

export const getHorse = async (id: string) => {
  return horses.find((horse) => horse.id === id)
}

export const getHorses = async (searchParams: HomeSearchParams) => {
  return horses
}
