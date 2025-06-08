import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ENUMS from "@/utils/enums"

export default function RpcSelect({
  rpcState,
  setRpcState,
}: {
  rpcState: string
  setRpcState: (value: string) => void
}) {
  return (
    <Select value={rpcState} onValueChange={setRpcState}>
      <SelectTrigger className="w-[100px]">
        {/* Show the current selected value */}
        <SelectValue>{rpcState}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(ENUMS.RPC_TYPE).map((allowedRpcState) =>
            allowedRpcState !== rpcState ? (
              <SelectItem value={allowedRpcState} key={allowedRpcState}>
                {allowedRpcState}
              </SelectItem>
            ) : null
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
