const { split } = require("shamir-secret-sharing")
const { PrismaClient: PrismaClient2 } = require("../../prisma/db2/client2")
const { PrismaClient: PrismaClient3 } = require("../../prisma/db3/client3")
const { PrismaClient: PrismaClient4 } = require("../../prisma/db4/client4")
require("dotenv").config({ path: `./.env` })

const prisma2 = new PrismaClient2()
const prisma3 = new PrismaClient3()
const prisma4 = new PrismaClient4()

const savePrivateKey = async ({
  account_id, //uuid
  private_key, //uint8
  is_primary, //boolean
  user_id, //uuid
  seed_id_array, //uuid[]
}) => {
  try {
    //because there are 3 cases
    // i) Create primary Account => fetch seed of the user from secretSeedPhrase and then save the private key
    // ii) Import Account from private key => no seed is saved hence null
    // iii) Import Account from seed => first we will save the seed via saveSecretSeedPhrase, get back the seed_ids and the call this function
    if (!is_primary && !(!seed_id_array || seed_id_array.length == 3)) {
      throw Error("Invalid seed_id_array argument")
    }
    const [share1, share2, share3] = await split(
      private_key,
      parseInt(process.env.SHAMIR_SHARES),
      parseInt(process.env.SHAMIR_THRESHOLD)
    )

    let seed_id_2, seed_id_3, seed_id_4

    if (is_primary) {
      seed_id_2 = (
        await prisma2.secretSeedPhrase.findFirst({
          where: {
            user_id,
            is_primary: true,
          },
          select: {
            seed_id: true,
          },
        })
      ).seed_id
      seed_id_3 = (
        await prisma3.secretSeedPhrase.findFirst({
          where: {
            user_id,
            is_primary: true,
          },
          select: {
            seed_id: true,
          },
        })
      ).seed_id
      seed_id_4 = (
        await prisma4.secretSeedPhrase.findFirst({
          where: {
            user_id,
            is_primary: true,
          },
          select: {
            seed_id: true,
          },
        })
      ).seed_id
    } else {
      seed_id_2 = seed_id_array ? seed_id_array[0] : null
      seed_id_3 = seed_id_array ? seed_id_array[1] : null
      seed_id_4 = seed_id_array ? seed_id_array[2] : null
    }

    await prisma2.account.create({
      data: {
        account_id,
        private_key: share1,
        seed_id: seed_id_2,
      },
    })
    await prisma3.account.create({
      data: {
        account_id,
        private_key: share2,
        seed_id: seed_id_3,
      },
    })
    await prisma4.account.create({
      data: {
        account_id,
        private_key: share3,
        seed_id: seed_id_4,
      },
    })

    return [true, null]
  } catch (error) {
    console.log("Error while calling savePrivateKey function: ", error)
    return [null, error]
  }
}

module.exports = savePrivateKey
