const { split } = require("shamir-secret-sharing")
const { PrismaClient: PrismaClient2 } = require("../../prisma/db2/client2")
const { PrismaClient: PrismaClient3 } = require("../../prisma/db3/client3")
const { PrismaClient: PrismaClient4 } = require("../../prisma/db4/client4")
require("dotenv").config({ path: `./.env` })

const prisma2 = new PrismaClient2()
const prisma3 = new PrismaClient3()
const prisma4 = new PrismaClient4()

const saveSecretSeedPhrase = async ({
  seed_mnemonic, //string
  user_id, //uuid
  is_primary, //boolean
}) => {
  try {
    const uint8_seed_mnemonic = new TextEncoder().encode(seed_mnemonic)

    const [share1, share2, share3] = await split(
      uint8_seed_mnemonic,
      parseInt(process.env.SHAMIR_SHARES),
      parseInt(process.env.SHAMIR_THRESHOLD)
    )

    const seed_id_2 = (
      await prisma2.secretSeedPhrase.create({
        data: {
          user_id,
          seed_phrase: share1,
          is_primary,
        },
        select: {
          seed_id: true,
        },
      })
    ).seed_id
    const seed_id_3 = (
      await prisma3.secretSeedPhrase.create({
        data: {
          user_id,
          seed_phrase: share2,
          is_primary,
        },
        select: {
          seed_id: true,
        },
      })
    ).seed_id
    const seed_id_4 = (
      await prisma4.secretSeedPhrase.create({
        data: {
          user_id,
          seed_phrase: share3,
          is_primary,
        },
        select: {
          seed_id: true,
        },
      })
    ).seed_id

    return [[seed_id_2, seed_id_3, seed_id_4], null]
  } catch (error) {
    console.log("Error while calling saveSecretSeedPhrase function: ", error)
    return [null, error]
  }
}

module.exports = saveSecretSeedPhrase
