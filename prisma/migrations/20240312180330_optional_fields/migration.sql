/*
  Warnings:

  - The primary key for the `Caballo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `provinceId` on the `Caballo` table. All the data in the column will be lost.
  - The `id` column on the `Caballo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `razaId` column on the `Caballo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `disciplinaId` column on the `Caballo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Disciplina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Disciplina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Provincia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Provincia` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Raza` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Raza` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_provinceId_fkey";

-- DropForeignKey
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_razaId_fkey";

-- AlterTable
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_pkey",
DROP COLUMN "provinceId",
ADD COLUMN     "pedigree" TEXT,
ADD COLUMN     "provinciaId" UUID,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "razaId",
ADD COLUMN     "razaId" UUID,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "precio" DROP NOT NULL,
DROP COLUMN "disciplinaId",
ADD COLUMN     "disciplinaId" UUID,
ALTER COLUMN "alzada" DROP NOT NULL,
ALTER COLUMN "salto" DROP NOT NULL,
ADD CONSTRAINT "Caballo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Provincia" DROP CONSTRAINT "Provincia_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Raza" DROP CONSTRAINT "Raza_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Raza_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Auspiciante" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Auspiciante_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_razaId_fkey" FOREIGN KEY ("razaId") REFERENCES "Raza"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "Provincia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
