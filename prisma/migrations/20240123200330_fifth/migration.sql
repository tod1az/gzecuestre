-- AlterTable
ALTER TABLE "Horse" ADD COLUMN     "provinceId" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
