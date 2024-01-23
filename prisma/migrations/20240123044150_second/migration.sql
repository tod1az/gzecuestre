/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Horse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "images" TEXT[];
