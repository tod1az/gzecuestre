import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Horse } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAdLocation = (horses: Horse[]) => {
  if (horses.length <= 8) return [4, 3]
  return [8, 6]
}

export const getAge = (birthdate: Date) => {
  const milisecondsInAyear = 365.25 * 24 * 60 * 60 * 1000
  return Math.round((Date.now() - birthdate.getTime()) / milisecondsInAyear)
}
