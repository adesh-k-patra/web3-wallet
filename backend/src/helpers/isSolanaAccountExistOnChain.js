const { PublicKey, Keypair } = require("@solana/web3.js")
const getConnectionInstance = require("../utils/getConnectionInstance")
const { RPC_TYPE } = require("../utils/enums")

async function isSolanaAccountExistOnChain({
  public_key, //base 58
  private_key, //uint8 //will be considered over public_key
  rpcType, //string
}) {
  try {
    const [connection, error] = getConnectionInstance(rpcType)
    if (error) {
      throw Error("Error in getConnectionInstance")
    }

    let publicKey = public_key
    if (private_key) {
      publicKey = Keypair.fromSecretKey(private_key).publicKey.toBase58()
    }

    const accountInfo = await connection.getAccountInfo(
      new PublicKey(publicKey)
    )
    console.log(accountInfo)
    if (accountInfo) {
      return [accountInfo, null]
    } else {
      return [false, null]
    }
  } catch (error) {
    console.error(
      `Error detected while calling isSolanaAccountExistOnChain  function: ${error}`
    )
    return [null, error]
  }
}

module.exports = isSolanaAccountExistOnChain
