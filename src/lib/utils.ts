import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Horse } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getEvenHalf(horses: Horse[]) {
  const half = Math.floor(horses.length / 2)
  if (half % 2 === 0) return half
  return half + 1
}
