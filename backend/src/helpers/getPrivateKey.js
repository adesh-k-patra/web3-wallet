const { PrismaClient: PrismaClient2 } = require("../../prisma/db2/client2")
const { PrismaClient: PrismaClient3 } = require("../../prisma/db3/client3")
const { PrismaClient: PrismaClient4 } = require("../../prisma/db4/client4")
require("dotenv").config({ path: `./.env` })
const { combine } = require("shamir-secret-sharing")

const prisma2 = new PrismaClient2()
const prisma3 = new PrismaClient3()
const prisma4 = new PrismaClient4()

//arg: account_id -> uuid
//response: private_key -> unint8
const getPrivateKey = async (account_id) => {
  try {
    const requests = [
      prisma2.account.findFirst({
        where: {
          account_id,
        },
        select: {
          private_key: true,
        },
      }),
      prisma3.account.findFirst({
        where: {
          account_id,
        },
        select: {
          private_key: true,
        },
      }),
      prisma4.account.findFirst({
        where: {
          account_id,
        },
        select: {
          private_key: true,
        },
      }),
    ]

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
    const privateKeyUInt8Array = databaseResponses.map((response) => {
      return response.private_key
    })
    const privateKeyUInt8 = await combine(privateKeyUInt8Array)
    return [privateKeyUInt8, null]
  } catch (error) {
    console.error(
      `Error detected while calling getPrivateKey function: ${error}`
    )
    return [null, error]
  }
}

module.exports = getPrivateKey
