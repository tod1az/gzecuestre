/*
  Warnings:

  - You are about to drop the `Horse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Province` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Horse" DROP CONSTRAINT "Horse_provinceId_fkey";

-- DropTable
DROP TABLE "Horse";

-- DropTable
DROP TABLE "Province";

-- CreateTable
CREATE TABLE "Caballo" (
    "id" TEXT NOT NULL,
    "nombre_contacto" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "razaId" TEXT NOT NULL,
    "fecha_de_nacimiento" TIMESTAMP(3) NOT NULL,
    "sex" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "precio_visible" BOOLEAN DEFAULT true,
    "videos" TEXT[],
    "imagenes" TEXT[],
    "disciplinaId" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,
    "alzada" INTEGER NOT NULL,
    "salto" INTEGER NOT NULL,
    "destacado" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Caballo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provincia" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Raza" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Raza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_razaId_fkey" FOREIGN KEY ("razaId") REFERENCES "Raza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Provincia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
