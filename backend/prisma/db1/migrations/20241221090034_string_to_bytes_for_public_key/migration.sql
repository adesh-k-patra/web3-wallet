/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `public_key` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "public_key",
ADD COLUMN     "public_key" BYTEA NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("public_key");

-- CreateIndex
CREATE UNIQUE INDEX "Account_public_key_key" ON "Account"("public_key");
