const express = require("express")
const authRoutes = require("./auth.routes")
const seedRoutes = require("./seed.routes")
const accountRoutes = require("./account.routes")
const transactionRoutes = require("./transaction.routes")

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/seed", seedRoutes)
router.use("/account", accountRoutes)
router.use("/transaction", transactionRoutes)

module.exports = router
