const { PublicKey, LAMPORTS_PER_SOL } = require("@solana/web3.js")
const { RPC_TYPE } = require("../utils/enums")
const getConnectionInstance = require("../utils/getConnectionInstance")

async function getAllConfirmedTransactionsForAccount({
  rpcType, //string
  public_key, //base58
}) {
  try {
    const [connection, error] = getConnectionInstance(rpcType)
    if (error) {
      throw Error("Error in getConnectionInstance")
    }

    const allTxSignatures = await connection.getSignaturesForAddress(
      new PublicKey(public_key)
    )
    const allTxSignaturesParsed = allTxSignatures.map((txSignatures) => {
      return txSignatures.signature
    })
    const allTransactionsParsed = await connection.getParsedTransactions(
      allTxSignaturesParsed
    )
    const finalTransactionArray = []

    for (let i = 0; i < allTransactionsParsed.length; i++) {
      const transactionObject = {}
      transactionObject.signature = allTxSignaturesParsed[i]
      const blockTime = allTransactionsParsed[i].blockTime
      transactionObject.timestamp = new Date(blockTime * 1000).toLocaleString(
        "en-IN",
        { timeZone: "Asia/Kolkata" }
      )

      const ageInSeconds = Math.floor((Date.now() - blockTime * 1000) / 1000)
      if (ageInSeconds < 60) {
        transactionObject.age = `${ageInSeconds} secs ago`
      } else if (ageInSeconds < 60 * 60) {
        const ageInMinutes = Math.floor(ageInSeconds / 60)
        transactionObject.age = `${ageInMinutes} mins ago`
      } else if (ageInSeconds < 60 * 60 * 24) {
        const ageInHours = Math.floor(ageInSeconds / (60 * 60))
        transactionObject.age = `${ageInHours} hrs ago`
      } else {
        const ageInDays = Math.floor(ageInSeconds / (60 * 60 * 24))
        transactionObject.age = `${ageInDays} days ago`
      }

      const indexOfPublicKey = allTransactionsParsed[
        i
      ].transaction.message.accountKeys.findIndex((key) => {
        return key.pubkey.toBase58() === new PublicKey(public_key).toBase58()
      })

      transactionObject.delta_balance =
        (allTransactionsParsed[i].meta.postBalances[indexOfPublicKey] -
          allTransactionsParsed[i].meta.preBalances[indexOfPublicKey]) /
        LAMPORTS_PER_SOL

      finalTransactionArray.push(transactionObject)
    }
    return [finalTransactionArray, null]
  } catch (error) {
    console.error(
      `Error detected while calling getAllTransacationsForAccount  function: ${error}`
    )
    return [null, error]
  }
}

module.exports = getAllConfirmedTransactionsForAccount
