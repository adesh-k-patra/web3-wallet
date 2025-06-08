/*
  Warnings:

  - Changed the type of `seed_phrase` on the `SecretSeedPhrase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SecretSeedPhrase" DROP COLUMN "seed_phrase",
ADD COLUMN     "seed_phrase" BYTEA NOT NULL;
