/*
  Warnings:

  - Added the required column `picture` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "picture" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isGoogleAuthenticated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "picture" TEXT;
