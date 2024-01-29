import { Prisma } from '@prisma/client'
import { setFilters } from './filters'
import { horseQueryModel } from './querymodels'
import { HomeSearchParams } from './types'
import prisma from '@/db/db'

export const getHorse = async (id: string) => {
  return await prisma.caballo.findFirst({
    where: {
      id
    },
    select: horseQueryModel
  })
}

export const getHorses = async (searchParams: HomeSearchParams) => {
  const perPage = 20
  const page = Number(searchParams.page ?? 1)
  const order = searchParams.orden ?? 'desc'
  const filters = setFilters(searchParams)
  return await prisma.caballo.findMany({
    orderBy: [
      {
        precio_visible: 'asc'
      },
      {
        precio: order
      }
    ],
    where: filters as Prisma.CaballoWhereInput,
    select: horseQueryModel,
    skip: (page - 1) * perPage,
    take: perPage
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

export const getTotalHorses = async (searchParams: HomeSearchParams) => {
  const filters = setFilters(searchParams)
  return prisma.caballo.count({
    where: filters as Prisma.CaballoWhereInput
  })
}
