/*
  Warnings:

  - You are about to drop the column `provinceId` on the `Horse` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Horse" DROP CONSTRAINT "Horse_provinceId_fkey";

-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "provinceId";
