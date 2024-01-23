-- CreateTable
CREATE TABLE "Horse" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "videos" TEXT[],
    "provincia" TEXT NOT NULL,
    "alzada" INTEGER NOT NULL,
    "salto" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Horse_pkey" PRIMARY KEY ("id")
);
