const express = require("express")
const middlewares = require("../../middlewares")
const accountController = require("../../controllers/v1/account.controller")

const router = express.Router()

router.get(
  "/all/count",
  middlewares.authToken,
  accountController.countAllAccountsOfUser
)

router.post("/new", middlewares.authToken, accountController.createNewAccount)

router.post(
  "/import/private_key",
  middlewares.authToken,
  accountController.importPrivateKeyAccount
)

router.post(
  "/import/seed_phrase",
  middlewares.authToken,
  accountController.importSeedPhraseAccounts
)

router.get("/all", middlewares.authToken, accountController.getAllAccounts)

router.post("/one", middlewares.authToken, accountController.getOneAccount)

router.post(
  "/one/balance",
  middlewares.authToken,
  accountController.getOneAccountBalance
)

router.post(
  "/is_exist",
  middlewares.authToken,
  accountController.isAccountExist
)

module.exports = router
