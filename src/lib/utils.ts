import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Horse } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAdLocation = (horses: Horse[]) => {
  const adLocation = Math.floor(horses.length / 2)
  return adLocation % 2 === 0 ? adLocation : adLocation + 1
}
