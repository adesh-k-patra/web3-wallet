/*
  Warnings:

  - You are about to drop the column `user_id` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `SecretSeed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `is_primary` to the `SecretSeed` table without a default value. This is not possible if the table is not empty.
  - The required column `seed_id` was added to the `SecretSeed` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_user_id_fkey";

-- DropIndex
DROP INDEX "SecretSeed_seed_phrase_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "user_id",
ADD COLUMN     "seed_id" TEXT;

-- AlterTable
ALTER TABLE "SecretSeed" DROP CONSTRAINT "SecretSeed_pkey",
ADD COLUMN     "is_primary" BOOLEAN NOT NULL,
ADD COLUMN     "seed_id" TEXT NOT NULL,
ADD CONSTRAINT "SecretSeed_pkey" PRIMARY KEY ("seed_id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_seed_id_fkey" FOREIGN KEY ("seed_id") REFERENCES "SecretSeed"("seed_id") ON DELETE SET NULL ON UPDATE CASCADE;
