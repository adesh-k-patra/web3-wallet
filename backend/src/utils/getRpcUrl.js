const { RPC_TYPE } = require("./enums")
require("dotenv").config({ path: `./.env` })

function getRpcUrl(rpcType) {
  try {
    if (rpcType === RPC_TYPE.MAINNET) {
      return [process.env.SOLANA_MAINNET_RPC, null]
    } else if (rpcType === RPC_TYPE.DEVNET) {
      return [process.env.SOLANA_DEVNET_RPC, null]
    } else {
      throw Error("Invalid argument to getRpcUrl")
    }
  } catch (error) {
    console.error(`Error detected while calling getRpcUrl function: ${error}`)
    return [null, error]
  }
}

module.exports = getRpcUrl
