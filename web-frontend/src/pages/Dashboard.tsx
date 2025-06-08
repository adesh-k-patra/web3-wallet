import ShowLoader from "@/components/ShowLoader"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import AccountState from "@/type_interface/AccountState"
import RpcType from "@/type_interface/RpcState"
import ENUMS from "@/utils/enums"
import postFetch from "@/utils/postFetch"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface Transaction {
  signature: string
  timestamp: string
  age: string
  delta_balance: number
}
interface AccountInfo {
  balance: number
  transactions: Transaction[]
}

export default function Dashboard({
  accountState,
  rpcState,
}: {
  accountState: AccountState
  rpcState: RpcType
}) {
  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    balance: 0,
    transactions: [],
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    const authorization =
      "Bearer " +
      localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

    const getOneAccount = async () => {
      setIsLoading(true)
      const response = await postFetch(toast, {
        url: "http://localhost:3000/v1/account/one",
        data: {
          public_key: accountState.public_key,
          rpc_type: rpcState,
        },
        headers: {
          Authorization: authorization,
        },
        allowStatus: [200],
      })
      if (response) {
        if (response.data.data.exist_on_chain) {
          setAccountInfo({
            balance: response.data.data.balance,
            transactions: response.data.data.transactions,
          })
        } else {
          setAccountInfo({
            balance: 0,
            transactions: [],
          })
        }
      }
      setIsLoading(false)
    }

    const fetchAccount = async () => {
      await getOneAccount()
    }

    fetchAccount()
  }, [accountState, rpcState])

  if (isLoading) {
    return <ShowLoader />
  }
  return (
    <div>
      <div>Balance: {accountInfo.balance} SOL</div>
      <div className="h-96">
        <Button onClick={() => navigate("/send_sol")}>Send</Button>
        <Button onClick={() => navigate("/launch_token")}>Launch Token</Button>
      </div>
      {accountInfo.transactions.map((transaction, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {transaction.delta_balance > 0 ? "Received" : "Sent"}{" "}
                {Math.abs(transaction.delta_balance)} SOL
              </CardTitle>
              <CardDescription
                onClick={() =>
                  window.open(
                    `https://explorer.solana.com/tx/${
                      transaction.signature
                    }?cluster=${
                      rpcState === ENUMS.RPC_TYPE.MAINNET ? "mainnet" : "devnet"
                    }`,
                    "_blank"
                  )
                }
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                {transaction.signature}
              </CardDescription>
            </CardHeader>
            <CardContent>{transaction.age}</CardContent>
            <CardFooter>{transaction.timestamp}</CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
