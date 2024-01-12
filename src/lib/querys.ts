import { horses } from './data'
import { Horse } from './types'

export const getHorse = (id: string): Horse | undefined => {
  return horses.find((horse) => horse.id === id)
}
