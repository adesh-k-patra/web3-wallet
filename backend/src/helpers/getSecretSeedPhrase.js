const { PrismaClient: PrismaClient2 } = require("../../prisma/db2/client2")
const { PrismaClient: PrismaClient3 } = require("../../prisma/db3/client3")
const { PrismaClient: PrismaClient4 } = require("../../prisma/db4/client4")
require("dotenv").config({ path: `./.env` })
const { combine } = require("shamir-secret-sharing")

const prisma2 = new PrismaClient2()
const prisma3 = new PrismaClient3()
const prisma4 = new PrismaClient4()

async function getSecretSeedPhrase({
  isAccount,
  account_id,
  isPrimarySeedOfUser,
  userId,
}) {
  try {
    if (isAccount && isPrimarySeedOfUser) {
      throw new Error("Invalid function arguments")
    }

    let requests = []

    if (isAccount) {
      requests = [
        prisma2.account.findFirst({
          where: {
            account_id,
          },
          select: {
            secretSeedPhrase: {
              select: {
                seed_phrase: true,
              },
            },
          },
        }),
        prisma3.account.findFirst({
          where: {
            account_id,
          },
          select: {
            secretSeedPhrase: {
              select: {
                seed_phrase: true,
              },
            },
          },
        }),
        prisma4.account.findFirst({
          where: {
            account_id,
          },
          select: {
            secretSeedPhrase: {
              select: {
                seed_phrase: true,
              },
            },
          },
        }),
      ]
    }

    if (isPrimarySeedOfUser) {
      requests = [
        prisma2.secretSeedPhrase.findFirst({
          where: {
            user_id: userId,
            is_primary: true,
          },
          select: {
            seed_phrase: true,
          },
        }),
        prisma3.secretSeedPhrase.findFirst({
          where: {
            user_id: userId,
            is_primary: true,
          },
          select: {
            seed_phrase: true,
          },
        }),
        prisma4.secretSeedPhrase.findFirst({
          where: {
            user_id: userId,
            is_primary: true,
          },
          select: {
            seed_phrase: true,
          },
        }),
      ]
    }

    const databaseResponses = await new Promise((resolve, reject) => {
      const responses = []
      const threshold = parseInt(process.env.SHAMIR_THRESHOLD)
      let completedRequests = 0

      requests.forEach((request, index) => {
        request
          .then((response) => {
            if (response) {
              responses.push(response)
            }
            completedRequests++

            if (responses.length >= threshold) {
              resolve(responses)
            } else if (completedRequests === requests.length) {
              reject(
                new Error(
                  "Either no seed_phrase for the user exists or Threshold not met with available responses"
                )
              )
            }
          })
          .catch((error) => {
            console.error(`Error from database ${index + 1}:`, error)
            completedRequests++

            if (
              completedRequests === requests.length &&
              responses.length < threshold
            ) {
              reject(
                new Error(
                  "Unable to retrieve seed because less than threshold databases are up right now."
                )
              )
            }
          })
      })
    })

    let seedPhraseUInt8Array = []

    if (isAccount) {
      seedPhraseUInt8Array = databaseResponses.map((response) => {
        return response.secretSeedPhrase.seed_phrase
      })
    }

    if (isPrimarySeedOfUser) {
      seedPhraseUInt8Array = databaseResponses.map((response) => {
        return response.seed_phrase
      })
    }

    const seedPhraseUInt8 = await combine(seedPhraseUInt8Array)
    const seedPhrase = new TextDecoder().decode(seedPhraseUInt8)
    console.log(seedPhrase)
    return [seedPhrase, null]
  } catch (error) {
    console.error(
      `Error detected while calling getSecretSeed function: ${error}`
    )
    return [null, error]
  }
}

module.exports = getSecretSeedPhrase
