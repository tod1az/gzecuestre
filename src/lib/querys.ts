import { Prisma } from "@prisma/client";
import { setFilters } from "./filters";
import { horseQueryModel } from "./querymodels";
import { HomeSearchParams } from "./types";
import prisma from "@/db/db";

export const getHorse = (id: string) => {
  return prisma.caballo.findFirst({
    where: {
      id,
    },
    select: horseQueryModel,
  });
};

export const getHorses = (searchParams: HomeSearchParams) => {
  const perPage = 20;
  const page = Number(searchParams.page ?? 1);
  const filters = setFilters(searchParams);
  return prisma.caballo.findMany({
    where: filters as Prisma.CaballoWhereInput,
    select: horseQueryModel,
    skip: (page - 1) * perPage,
    take: perPage,
  });
};

export const getFeaturedHorses = () => {
  return prisma.caballo.findMany({
    where: {
      destacado: true,
    },
    select: {
      id: true,
      imagenes: true,
    },
  });
};

export const getLastHorses = () => {
  return prisma.caballo.findMany({
    orderBy: [
      {
        created_at: "desc",
      },
    ],
    select: {
      id: true,
      imagenes: true,
    },
    take: 5,
  });
};

export const getBreeds = () => {
  return prisma.raza.findMany({
    orderBy: [
      {
        nombre: "asc",
      },
    ],
  });
};

export const getDisciplines = () => {
  return prisma.disciplina.findMany({
    orderBy: [
      {
        nombre: "asc",
      },
    ],
  });
};

export const getProvinces = () => {
  return prisma.provincia.findMany({
    orderBy: [
      {
        nombre: "asc",
      },
    ],
  });
};

export const getSponsors = () => {
  return prisma.auspiciante.findMany({
    orderBy: [
      {
        nombre: "asc",
      },
    ],
  });
};

export const getTotalHorses = (searchParams: HomeSearchParams) => {
  const filters = setFilters(searchParams);
  return prisma.caballo.count({
    where: filters as Prisma.CaballoWhereInput,
  });
};
