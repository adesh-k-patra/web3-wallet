import RpcType from "@/type_interface/RpcState"
import { PublicKey, AccountInfo } from "@solana/web3.js"
import getConnectionInstance from "./getConnectionInstance"

export default async function isSolanaAccountExistOnChain({
  public_key,
  rpcType,
}: {
  public_key: string
  rpcType: RpcType
}): Promise<
  [AccountInfo<Buffer<ArrayBufferLike>> | false | null, Error | null]
> {
  try {
    const [connection, connectionError] = getConnectionInstance(rpcType)
    if (connectionError || !connection) {
      throw Error("Error in getConnectionInstance")
    }

    const accountInfo = await connection.getAccountInfo(
      new PublicKey(public_key)
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
    return [null, error as Error]
  }
}
