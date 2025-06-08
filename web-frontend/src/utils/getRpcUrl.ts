import RpcType from "@/type_interface/RpcState"
import ENUMS from "./enums"
import { config } from "dotenv"

config({ path: "./.env" })

export default function getRpcUrl(
  rpcType: RpcType
): [string | null, Error | null] {
  try {
    if (rpcType === ENUMS.RPC_TYPE.MAINNET) {
      return [process.env.SOLANA_MAINNET_RPC || null, null]
    } else if (rpcType === ENUMS.RPC_TYPE.DEVNET) {
      return [process.env.SOLANA_DEVNET_RPC || null, null]
    } else {
      throw Error("Invalid argument to getRpcUrl")
    }
  } catch (error) {
    console.error(`Error detected while calling getRpcUrl function: ${error}`)
    return [null, error as Error]
  }
}
