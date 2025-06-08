/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[account_id]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account_id` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Account_public_key_key";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
ADD COLUMN     "account_id" TEXT NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_account_id_key" ON "Account"("account_id");
