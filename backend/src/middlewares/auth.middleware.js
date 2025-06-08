const { PrismaClient: PrismaClient1 } = require("../../prisma/db1/client1")
const { unauthorizedResponse } = require("../utils/response")
const jwtHelper = require("../helpers/jwt")

const prisma1 = new PrismaClient1()

const authToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) {
      return unauthorizedResponse(res, "Unauthorized access")
    }
    token = token.split(" ")[1]
    const decodedToken = await jwtHelper.verify(token)
    const { valid, user_id, email_id } = decodedToken

    if (!valid) {
      return unauthorizedResponse(res, "Invalid access token")
    }

    //find user in db
    const result = await prisma1.user.findFirst({
      where: {
        user_id,
        email_id,
      },
    })
    if (!result) {
      return unauthorizedResponse(res, "Unauthorized access. User not found")
    }

    req.user = { ...result }
    next()
  } catch (err) {
    console.log(`Unable to verify token: ${err}`)
    return unauthorizedResponse(res, "Unauthorized access")
  }
}

module.exports = authToken
