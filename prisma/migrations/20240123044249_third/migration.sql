/*
  Warnings:

  - You are about to drop the column `sexo` on the `Horse` table. All the data in the column will be lost.
  - Added the required column `sex` to the `Horse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "sexo",
ADD COLUMN     "sex" TEXT NOT NULL;
