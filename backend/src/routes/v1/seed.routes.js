const express = require("express")
const middlewares = require("../../middlewares")
const seedController = require("../../controllers/v1/seed.controller")

const router = express.Router()

router.get(
  "/is_generated",
  middlewares.authToken,
  seedController.isSeedGenerated
)
router.post("/", middlewares.authToken, seedController.saveGeneratedSeed)

router.post(
  "/all_accounts",
  middlewares.authToken,
  seedController.getAllAccountsOfSeed
)

module.exports = router
