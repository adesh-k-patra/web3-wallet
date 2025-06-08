const { PrismaClient: PrismaClient1 } = require("../../../prisma/db1/client1")
const {
  successResponse,
  unprocessableEntityResponse,
  serverErrorResponse,
  badRequestResponse,
} = require("../../utils/response")
const { derivePath } = require("ed25519-hd-key")
const nacl = require("tweetnacl")
const { Keypair, LAMPORTS_PER_SOL } = require("@solana/web3.js")
const { mnemonicToSeedSync, validateMnemonic } = require("bip39")
const getSecretSeedPhrase = require("../../helpers/getSecretSeedPhrase")
const savePrivateKey = require("../../helpers/savePrivateKey")
const bs58 = require("bs58")
const { RPC_TYPE } = require("../../utils/enums")
const isSolanaAccountExistOnChain = require("../../helpers/isSolanaAccountExistOnChain")
const saveSecretSeedPhrase = require("../../helpers/saveSecretSeedPhrase")
const saveAccount = require("../../helpers/saveAccount")
const getAllConfirmedTransactionsForAccount = require("../../helpers/getAllConfirmedTransactionsForAccount")

const prisma1 = new PrismaClient1()

const countAllAccountsOfUser = async (req, res) => {
  try {
    const { user_id } = req.user
    const numAccounts = await prisma1.account.count({
      where: {
        user_id,
      },
    })
    return successResponse(res, "Successfully fetched no.of accounts of user", {
      num_accounts: numAccounts,
    })
  } catch (error) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const createNewAccount = async (req, res) => {
  try {
    const { user_id } = req.user
    const { account_name } = req.body

    if (!account_name) {
      return unprocessableEntityResponse({
        res,
        devMsg: "account name not specified",
      })
    }

    //secret seed of user
    const [secretSeedPhrase, secretSeedPhraseError] = await getSecretSeedPhrase(
      {
        isAccount: false,
        account_id: null,
        isPrimarySeedOfUser: true,
        userId: user_id,
      }
    )
    if (secretSeedPhraseError) {
      throw Error(secretSeedPhraseError)
    }

    const secretSeed = mnemonicToSeedSync(secretSeedPhrase)

    //no of account already created from the secret seed
    const numPrimaryAccounts = await prisma1.account.count({
      where: {
        user_id,
        is_primary: true,
      },
    })

    //derive keys
    const path = `m/44'/501'/${numPrimaryAccounts + 1}'/0'`
    const deriveSeed = derivePath(path, secretSeed.toString("hex")).key
    const privateKey = nacl.sign.keyPair.fromSeed(deriveSeed).secretKey
    const publicKey = Keypair.fromSecretKey(privateKey).publicKey.toBase58()

    //save account to database 1
    // const account = await prisma1.account.create({
    //   data: {
    //     public_key: publicKey,
    //     account_name,
    //     is_primary: true,
    //     user_id,
    //   },
    // })

    const [account, saveAccountError] = await saveAccount({
      user_id,
      public_key: publicKey,
      account_name,
      is_primary: true,
    })
    if (saveAccountError) {
      throw Error(saveAccountError)
    }

    const account_id = account.account_id

    //save private key to database 2,3,4
    const [_, savePrivateKeyError] = await savePrivateKey({
      account_id,
      private_key: privateKey,
      is_primary: true,
      user_id,
      seed_id_array: null,
    })
    if (savePrivateKeyError) {
      throw Error(savePrivateKeyError)
    }

    return successResponse(res, "Successfully created account", account)
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const getAllAccounts = async (req, res) => {
  try {
    const { user_id } = req.user
    const accounts = await prisma1.account.findMany({
      where: {
        user_id,
      },
    })
    return successResponse(
      res,
      "Successfully fetched all accounts of user",
      accounts
    )
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const isAccountExist = async (req, res) => {
  try {
    const { user_id } = req.user
    const { public_key } = req.body

    const findObject = {
      user_id,
    }

    if (public_key) {
      findObject.public_key = public_key
    }

    const account = await prisma1.account.findFirst({
      where: findObject,
    })

    return successResponse(res, "Successfully fetched if account exists", {
      is_account_exist: account != null,
    })
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const importPrivateKeyAccount = async (req, res) => {
  try {
    const { user_id } = req.user
    const { account_name, private_key } = req.body

    if (!account_name || !private_key) {
      return unprocessableEntityResponse({
        res,
        devMsg: "account name or private key not specified",
      })
    }

    //convert private_key from base 58 to uint8
    const privateKey = new Uint8Array(bs58.decode(private_key))

    const [checkPrivateKey, checkPrivateKeyErr] =
      await isSolanaAccountExistOnChain({
        public_key: null,
        private_key: privateKey,
        rpcType: RPC_TYPE.DEVNET,
      })

    if (checkPrivateKeyErr) {
      throw Error(checkPrivateKeyErr)
    }

    if (checkPrivateKey === false) {
      return badRequestResponse({
        res,
        devMsg: "Invalid private key",
      })
    }

    const public_key = Keypair.fromSecretKey(privateKey).publicKey.toBase58()

    //save account to database 1
    const [account, saveAccountError] = await saveAccount({
      user_id,
      public_key,
      account_name,
      is_primary: false,
    })
    if (saveAccountError) {
      throw Error(saveAccountError)
    }

    const account_id = account.account_id

    //save private key to database 2,3,4
    const [_, savePrivateKeyError] = await savePrivateKey({
      account_id,
      private_key: privateKey,
      is_primary: false,
      user_id,
      seed_id_array: null,
    })
    if (savePrivateKeyError) {
      throw Error(savePrivateKeyError)
    }

    return successResponse(res, "Successfully imported account", account)
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const importSeedPhraseAccounts = async (req, res) => {
  try {
    const { user_id } = req.user
    const { seed_mnemonic, accounts } = req.body

    if (!seed_mnemonic || !accounts || accounts.length === 0) {
      return unprocessableEntityResponse({
        res,
        devMsg: "Accounts are not specified",
      })
    }

    if (!validateMnemonic(seed_mnemonic)) {
      return badRequestResponse({
        res,
        devMsg: "Invalid Seed Mnemonic. Please try again",
      })
    }

    //save seed_mnemonic of user
    const [seed_ids, saveSeedError] = await saveSecretSeedPhrase({
      seed_mnemonic,
      user_id,
      is_primary: false,
    })
    if (saveSeedError) {
      throw Error(saveSeedError)
    }
    const secretSeed = mnemonicToSeedSync(seed_mnemonic)

    for (const account of accounts) {
      const path = `m/44'/501'/${account.seed_index}'/0'`
      const deriveSeed = derivePath(path, secretSeed.toString("hex")).key
      const privateKey = nacl.sign.keyPair.fromSeed(deriveSeed).secretKey
      const publicKey = Keypair.fromSecretKey(privateKey).publicKey.toBase58()

      //save account to database 1
      const [new_account, saveAccountError] = await saveAccount({
        user_id,
        public_key: publicKey,
        account_name: account.account_name,
        is_primary: false,
      })
      if (saveAccountError) {
        throw Error(saveAccountError)
      }

      const account_id = new_account.account_id

      //save private key to database 2,3,4
      const [_, savePrivateKeyError] = await savePrivateKey({
        account_id,
        private_key: privateKey,
        is_primary: false,
        user_id,
        seed_id_array: seed_ids,
      })
      if (savePrivateKeyError) {
        throw Error(savePrivateKeyError)
      }
    }

    return successResponse(res, "Successfully imported all the accounts")
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const getOneAccount = async (req, res) => {
  try {
    const { public_key, rpc_type } = req.body

    const [accountInfo, accountInfoError] = await isSolanaAccountExistOnChain({
      public_key,
      private_key: null,
      rpcType: rpc_type,
    })

    if (accountInfoError) {
      throw Error(accountInfoError)
    }

    const finalAns = {}

    if (accountInfo === false) {
      finalAns.exist_on_chain = false
    } else {
      finalAns.exist_on_chain = true
      finalAns.balance = accountInfo.lamports / LAMPORTS_PER_SOL

      const [allConfirmedTransactions, allConfirmedTransactionsError] =
        await getAllConfirmedTransactionsForAccount({
          public_key,
          rpcType: rpc_type,
        })
      if (allConfirmedTransactionsError) {
        throw Error(allConfirmedTransactionsError)
      }
      finalAns.transactions = allConfirmedTransactions
    }

    return successResponse(res, "Successfully fetched the account", finalAns)
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const getOneAccountBalance = async (req, res) => {
  try {
    const { public_key, rpc_type } = req.body

    const [accountInfo, accountInfoError] = await isSolanaAccountExistOnChain({
      public_key,
      private_key: null,
      rpcType: rpc_type,
    })

    if (accountInfoError) {
      throw Error(accountInfoError)
    }

    const finalAns = {}

    if (accountInfo === false) {
      finalAns.exist_on_chain = false
    } else {
      finalAns.exist_on_chain = true
      finalAns.balance = accountInfo.lamports / LAMPORTS_PER_SOL
    }

    return successResponse(res, "Successfully fetched the account", finalAns)
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const accountController = {
  countAllAccountsOfUser,
  createNewAccount,
  getAllAccounts,
  isAccountExist,
  importPrivateKeyAccount,
  importSeedPhraseAccounts,
  getOneAccount,
  getOneAccountBalance,
}

module.exports = accountController
