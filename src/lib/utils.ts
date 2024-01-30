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

export function calcularTiempoTranscurrido(fechaPublicacion: Date) {
  // Obten la fecha actual
  const fechaActual = Date.now()
  // Calcula la diferencia en milisegundos
  const diferenciaMilisegundos = fechaActual - fechaPublicacion.getTime()

  // Calcula los componentes de tiempo
  const segundos = Math.floor(diferenciaMilisegundos / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)
  const meses = Math.floor(dias / 30)
  const años = Math.floor(meses / 12)

  // Determina la cadena de tiempo transcurrido
  if (años > 0) {
    return años + (años === 1 ? ' año' : ' años')
  } else if (meses > 0) {
    return meses + (meses === 1 ? ' mes' : ' meses')
  } else if (dias > 0) {
    return dias + (dias === 1 ? ' día' : ' días')
  } else if (horas > 0) {
    return horas + (horas === 1 ? ' hora' : ' horas')
  } else if (minutos > 0) {
    return minutos + (minutos === 1 ? ' minuto' : ' minutos')
  } else {
    return segundos + (segundos === 1 ? ' segundo' : ' segundos')
  }
}
