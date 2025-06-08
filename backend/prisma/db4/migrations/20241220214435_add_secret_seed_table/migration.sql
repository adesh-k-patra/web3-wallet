/*
  Warnings:

  - You are about to drop the column `seed_phrase` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "seed_phrase",
ADD COLUMN     "user_id" TEXT;

-- CreateTable
CREATE TABLE "SecretSeed" (
    "user_id" TEXT NOT NULL,
    "seed_phrase" TEXT NOT NULL,

    CONSTRAINT "SecretSeed_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SecretSeed_seed_phrase_key" ON "SecretSeed"("seed_phrase");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "SecretSeed"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
