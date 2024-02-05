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

const senderLength = 500
const messageLength = 5000

export const formValidate = (formData: FormData) => {
  const message = formData.get('message')
  const emailSender = formData.get('emailSender')
  const nameSender = formData.get('nameSender')
  if (!message || typeof message !== 'string' || message.length > messageLength) {
    return { accepted: false, error: 'Invalid message' }
  }

  if (!emailSender || typeof emailSender !== 'string' || emailSender.length > senderLength) {
    return { accepted: false, error: 'Invalid sender email' }
  }

  if (!nameSender || typeof nameSender !== 'string' || nameSender.length > senderLength) {
    return { accepted: false, error: 'Invalid sender name' }
  }

  return { accepted: true, emailSender, message, nameSender }
}

export const getErrorMessage = (error: unknown) => {
  let message: string
  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }

  return message
}
