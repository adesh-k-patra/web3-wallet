/*
  Warnings:

  - You are about to drop the `SecretSeed` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_seed_id_fkey";

-- DropTable
DROP TABLE "SecretSeed";

-- CreateTable
CREATE TABLE "SecretSeedPhrase" (
    "seed_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "seed_phrase" TEXT NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SecretSeedPhrase_pkey" PRIMARY KEY ("seed_id")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_seed_id_fkey" FOREIGN KEY ("seed_id") REFERENCES "SecretSeedPhrase"("seed_id") ON DELETE SET NULL ON UPDATE CASCADE;
