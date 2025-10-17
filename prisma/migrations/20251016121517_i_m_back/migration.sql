-- CreateEnum
CREATE TYPE "UserBadge" AS ENUM ('BRONZE', 'SILVER', 'GOLD');

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_userId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'General';

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "buyerEmail" TEXT,
ADD COLUMN     "buyerName" TEXT,
ADD COLUMN     "buyerPhone" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "badge" "UserBadge" NOT NULL DEFAULT 'BRONZE',
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "tiktok" TEXT,
ADD COLUMN     "walletBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "whatsapp" TEXT;

-- CreateTable
CREATE TABLE "Actuality" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Actuality_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actuality" ADD CONSTRAINT "Actuality_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
