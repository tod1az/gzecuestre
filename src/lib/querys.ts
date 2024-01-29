import { Prisma } from '@prisma/client'
import { setFilters } from './filters'
import { horseQueryModel } from './querymodels'
import { HomeSearchParams } from './types'
import prisma from '@/db/db'

const perPage = 20
export const getHorse = async (id: string) => {
  return await prisma.caballo.findFirst({
    where: {
      id
    },
    select: horseQueryModel
  })
}

export const getHorses = async (searchParams: HomeSearchParams) => {
  const page = (Number(searchParams.page) ?? 1) - 1
  const order = searchParams.orden ?? 'desc'
  const filters = setFilters(searchParams)
  return await prisma.caballo.findMany({
    orderBy: [
      {
        precio: order
      }
    ],
    where: filters ? (filters as Prisma.CaballoWhereInput) : undefined,
    select: horseQueryModel
  })
}

export const getFeaturedHorses = async () => {
  return await prisma.caballo.findMany({
    where: {
      destacado: true
    },
    select: {
      id: true,
      imagenes: true
    }
  })
}

export const getLastHorses = async () => {
  return await prisma.caballo.findMany({
    orderBy: [
      {
        created_at: 'desc'
      }
    ],
    select: {
      id: true,
      imagenes: true
    },
    take: 5
  })
}

export const getBreeds = async () => {
  return await prisma.raza.findMany({
    orderBy: [
      {
        nombre: 'asc'
      }
    ]
  })
}

export const getDisciplines = async () => {
  return await prisma.disciplina.findMany({
    orderBy: [
      {
        nombre: 'asc'
      }
    ]
  })
}

export const getProvinces = async () => {
  return prisma.provincia.findMany({
    orderBy: [
      {
        nombre: 'asc'
      }
    ]
  })
}

export const getSponsors = async () => {
  return prisma.auspiciante.findMany({
    orderBy: [
      {
        nombre: 'asc'
      }
    ]
  })
}
