require("dotenv").config({ path: `./.env` })
const { PrismaClient: PrismaClient1 } = require("../../../prisma/db1/client1")
const {
  serverErrorResponse,
  unprocessableEntityResponse,
  successResponse,
  badRequestResponse,
  unauthorizedResponse,
} = require("../../utils/response")
const bcrypt = require("bcrypt")
const { AUTH_PROVIDER } = require("../../utils/enums")
const jwtHelper = require("../../helpers/jwt")

const prisma1 = new PrismaClient1()

const login = async (req, res) => {
  try {
    console.log(req.body)
    const { email_id, password } = req.body

    if (!email_id)
      return unprocessableEntityResponse({ res, devMsg: "email not found" })
    if (!password)
      return unprocessableEntityResponse({ res, devMsg: "password not found" })

    const user = await prisma1.user.findFirst({
      where: {
        email_id,
        auth_provider: AUTH_PROVIDER.DEFAULT,
      },
    })
    if (!user) {
      return badRequestResponse({
        res,
        devMsg: "User doesn't exist",
      })
    }
    if (user.password) {
      if (!bcrypt.compareSync(password, user.password))
        return unauthorizedResponse(
          res,
          "Password does not match. Kindly retry."
        )
    }

    //generate token
    const accessToken = jwtHelper.generate({
      user_id: user.user_id,
      email_id: user.email_id,
    })

    return successResponse(res, "Login successful", {
      accessToken,
    })
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const signup = async (req, res) => {
  try {
    const { email_id, password } = req.body

    if (!email_id)
      return unprocessableEntityResponse({ res, devMsg: "email not found" })
    if (!password)
      return unprocessableEntityResponse({
        res,
        devMsg: "password not found",
      })

    let user = await prisma1.user.findFirst({
      where: {
        email_id,
      },
    })

    if (user) {
      return badRequestResponse({
        res,
        devMsg: "User already exists for the give email_id",
      })
    }

    const encryptedPassword = bcrypt.hashSync(
      password,
      parseInt(process.env.SALT_ROUNDS)
    )

    user = await prisma1.user.create({
      data: {
        email_id,
        password: encryptedPassword,
        auth_provider: AUTH_PROVIDER.DEFAULT,
      },
    })

    //generate token
    const accessToken = jwtHelper.generate({
      user_id: user.user_id,
      email_id: user.email_id,
    })

    return successResponse(res, "Signup successful", {
      accessToken,
    })
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const authController = { login, signup }

module.exports = authController
