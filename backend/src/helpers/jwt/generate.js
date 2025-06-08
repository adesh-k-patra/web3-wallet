require("dotenv").config({ path: `./.env` })
const jwt = require("jsonwebtoken")

const generate = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET)
}

module.exports = generate
