-- AlterTable
ALTER TABLE "Horse" ALTER COLUMN "featured" DROP NOT NULL,
ALTER COLUMN "featured" SET DEFAULT false;
