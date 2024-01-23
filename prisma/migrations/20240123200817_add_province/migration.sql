/*
  Warnings:

  - You are about to drop the column `provincia` on the `Horse` table. All the data in the column will be lost.
  - Added the required column `provinceId` to the `Horse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "provincia",
ADD COLUMN     "provinceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
