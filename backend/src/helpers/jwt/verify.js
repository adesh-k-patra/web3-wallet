require("dotenv").config({ path: `./.env` })
const jwt = require("jsonwebtoken")

const verify = (accessToken) => {
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET)
    return {
      valid: true,
      ...decoded,
    }
  } catch (e) {
    return {
      valid: false,
    }
  }
}

module.exports = verify
