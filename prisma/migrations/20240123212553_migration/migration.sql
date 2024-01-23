-- DropForeignKey
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_provinceId_fkey";

-- DropForeignKey
ALTER TABLE "Caballo" DROP CONSTRAINT "Caballo_razaId_fkey";

-- AlterTable
ALTER TABLE "Caballo" ALTER COLUMN "razaId" DROP NOT NULL,
ALTER COLUMN "disciplinaId" DROP NOT NULL,
ALTER COLUMN "provinceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_razaId_fkey" FOREIGN KEY ("razaId") REFERENCES "Raza"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caballo" ADD CONSTRAINT "Caballo_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Provincia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
