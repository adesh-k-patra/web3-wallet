require("dotenv").config({ path: `./.env` })
const { OAuth2Client } = require("google-auth-library")

const oauthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

module.exports = {
  oauthClient,
}
