const { Connection, PublicKey } = require("@solana/web3.js")
const { RPC_TYPE } = require("./enums")
const getRpcUrl = require("./getRpcUrl")

function getConnectionInstance(rpcType) {
  try {
    if (rpcType === RPC_TYPE.MAINNET || rpcType === RPC_TYPE.DEVNET) {
      const [rpcUrl, error] = getRpcUrl(rpcType)
      if (error) {
        throw Error("Error in getRpcUrl")
      }
      return [new Connection(rpcUrl), null]
    } else {
      throw Error("Invalid argument to getConnectionInstance")
    }
  } catch (error) {
    console.error(
      `Error detected while calling getConnectionInstance function: ${error}`
    )
    return [null, error]
  }
}

module.exports = getConnectionInstance
