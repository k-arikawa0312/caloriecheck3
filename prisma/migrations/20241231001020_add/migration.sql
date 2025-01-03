/*
  Warnings:

  - Added the required column `done` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "done" BOOLEAN NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE TEXT;
