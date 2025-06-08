import ENUMS from "@/utils/enums"

type RpcType = (typeof ENUMS.RPC_TYPE)[keyof typeof ENUMS.RPC_TYPE]

export default RpcType
