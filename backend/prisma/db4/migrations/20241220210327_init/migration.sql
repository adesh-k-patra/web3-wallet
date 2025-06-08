-- CreateTable
CREATE TABLE "Account" (
    "public_key" TEXT NOT NULL,
    "private_key" TEXT NOT NULL,
    "seed_phrase" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("public_key")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_public_key_key" ON "Account"("public_key");

-- CreateIndex
CREATE UNIQUE INDEX "Account_private_key_key" ON "Account"("private_key");
