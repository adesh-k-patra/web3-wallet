import RpcType from "@/type_interface/RpcState"
import ENUMS from "./enums"
import getRpcUrl from "./getRpcUrl"
import { Connection } from "@solana/web3.js"

export default function getConnectionInstance(
  rpcType: RpcType
): [Connection | null, Error | null] {
  try {
    if (
      rpcType === ENUMS.RPC_TYPE.MAINNET ||
      rpcType === ENUMS.RPC_TYPE.DEVNET
    ) {
      const [rpcUrl, error] = getRpcUrl(rpcType)
      if (error) {
        throw Error("Error in getRpcUrl")
      }
      return [new Connection(rpcUrl || ""), null]
    } else {
      throw Error("Invalid argument to getConnectionInstance")
    }
  } catch (error) {
    console.error(
      `Error detected while calling getConnectionInstance function: ${error}`
    )
    return [null, error as Error]
  }
}
