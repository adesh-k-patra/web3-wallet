const { validateMnemonic, mnemonicToSeedSync } = require("bip39")
const { PrismaClient: PrismaClient1 } = require("../../../prisma/db1/client1")
const { PrismaClient: PrismaClient2 } = require("../../../prisma/db2/client2")
const { PrismaClient: PrismaClient3 } = require("../../../prisma/db3/client3")
const { PrismaClient: PrismaClient4 } = require("../../../prisma/db4/client4")
const {
  successResponse,
  serverErrorResponse,
  badRequestResponse,
} = require("../../utils/response")
const { split } = require("shamir-secret-sharing")
const saveSecretSeedPhrase = require("../../helpers/saveSecretSeedPhrase")
const { RPC_TYPE } = require("../../utils/enums")
const isSolanaAccountExistOnChain = require("../../helpers/isSolanaAccountExistOnChain")
const { LAMPORTS_PER_SOL, Keypair } = require("@solana/web3.js")
const { derivePath } = require("ed25519-hd-key")
const nacl = require("tweetnacl")
require("dotenv").config({ path: `./.env` })

const prisma1 = new PrismaClient1()
const prisma2 = new PrismaClient2()
const prisma3 = new PrismaClient3()
const prisma4 = new PrismaClient4()

const isSeedGenerated = async (req, res) => {
  try {
    const { is_seed_generated } = req.user
    return successResponse(res, "Successfully fetched is_seed_generated data", {
      is_seed_generated,
    })
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const saveGeneratedSeed = async (req, res) => {
  try {
    const { seed_mnemonic } = req.body
    const { user_id, is_seed_generated } = req.user

    if (is_seed_generated) {
      return badRequestResponse({
        res,
        clientMsg:
          "Secret Phrase was already generated in the past. Create Accounts using that secret phase.",
      })
    }

    if (!validateMnemonic(seed_mnemonic)) {
      return badRequestResponse({
        res,
        devMsg: "Invalid Seed Mnemonic. Please try again",
      })
    }

    await saveSecretSeedPhrase({
      seed_mnemonic,
      user_id,
      is_primary: true,
    })

    await prisma1.user.update({
      where: {
        user_id,
      },
      data: {
        is_seed_generated: true,
      },
    })

    return successResponse(res, "Successfully saved the generated seed phrase")
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const getAllAccountsOfSeed = async (req, res) => {
  try {
    const { seed_mnemonic, rpc_type } = req.body

    if (!Object.values(RPC_TYPE).includes(rpc_type)) {
      return badRequestResponse({
        res,
        devMsg: "Invalid RPC State. Please try again",
      })
    }

    if (!validateMnemonic(seed_mnemonic)) {
      return badRequestResponse({
        res,
        devMsg: "Invalid Seed Mnemonic. Please try again",
      })
    }

    const secretSeed = mnemonicToSeedSync(seed_mnemonic)
    let allAccounts = []
    let consecutiveFailures = 0 //if 3 consecutive derived accounts fail, then it is very likely that no accounts exist after that

    for (let numAccount = 1; numAccount < 101; numAccount++) {
      const path = `m/44'/501'/${numAccount}'/0'`
      const deriveSeed = derivePath(path, secretSeed.toString("hex")).key
      const privateKey = nacl.sign.keyPair.fromSeed(deriveSeed).secretKey
      const publicKey = Keypair.fromSecretKey(privateKey).publicKey.toBase58()
      const [accountInfo, accountInfoError] = await isSolanaAccountExistOnChain(
        {
          public_key: publicKey,
          private_key: null,
          rpcType: rpc_type,
        }
      )

      if (accountInfoError) {
        throw Error(accountInfoError)
      }

      if (accountInfo === false && consecutiveFailures < 2) {
        consecutiveFailures++
        continue
      }

      if (accountInfo === false && consecutiveFailures >= 2) {
        break
      }

      consecutiveFailures = 0

      allAccounts.push({
        seed_index: numAccount,
        public_key: publicKey,
        balance: accountInfo.lamports / LAMPORTS_PER_SOL,
      })
    }

    return successResponse(
      res,
      "Successfully fetched all associated accounts of the secret phrase",
      allAccounts
    )
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const seedController = {
  isSeedGenerated,
  saveGeneratedSeed,
  getAllAccountsOfSeed,
}

module.exports = seedController
