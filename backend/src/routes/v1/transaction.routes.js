const express = require("express")
const middlewares = require("../../middlewares")
const transactionController = require("../../controllers/v1/transaction.controller")

const router = express.Router()

router.post("/send/fees", transactionController.sendSOLEstimatedNetworkFees)

router.post("/send", middlewares.authToken, transactionController.sendSOL)

module.exports = router
