import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import AccountState from "@/type_interface/AccountState"
import RpcType from "@/type_interface/RpcState"
import ENUMS from "@/utils/enums"
import postFetch from "@/utils/postFetch"
import { useEffect, useRef, useState } from "react"

export default function SendSOL({
  accountState,
  rpcState,
}: {
  accountState: AccountState
  rpcState: RpcType
}) {
  const [balance, setBalance] = useState<number>(100000000)
  const [estimatedNetworkFees, setEstimatedNetworkFees] = useState<number>(0)
  const [isBalanceLoading, setIsBalanceLoading] = useState<boolean>(true)
  const [showSend, setShowSend] = useState<boolean>(false)
  const [serializedTransaction, setSerializedTransaction] = useState<string>("")
  const [recipientPubKey, setRecipientPubKey] = useState<string>("")
  const [amount, setAmount] = useState<number>(0)

  const { toast } = useToast()
  const toPublicKeyRef = useRef<HTMLInputElement | null>(null)
  const amountRef = useRef<HTMLInputElement | null>(null)

  const authorization =
    "Bearer " + localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

  useEffect(() => {
    const getBalance = async () => {
      setIsBalanceLoading(true)
      const response = await postFetch(toast, {
        url: "http://localhost:3000/v1/account/one/balance",
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
          setBalance(response.data.data.balance)
        } else {
          setBalance(0)
        }
      }
      setIsBalanceLoading(false)
    }
    const fetchBalance = async () => {
      await getBalance()
    }

    fetchBalance()
    amountRef.current!.value = ""
    setEstimatedNetworkFees(0)
    setShowSend(false) //first calculate estimated network fees to generate transaction object after balance in fetched
  }, [accountState, rpcState])

  const calculateEstimatedNetworkFees = async () => {
    const response = await postFetch(toast, {
      url: "http://localhost:3000/v1/transaction/send/fees",
      data: {
        from_public_key: accountState.public_key,
        to_public_key: toPublicKeyRef.current?.value,
        amount: Number(amountRef.current?.value),
        rpc_type: rpcState,
      },
      headers: {},
      allowStatus: [200],
    })
    if (response) {
      setEstimatedNetworkFees(response.data.data.estimated_network_fees)
      setSerializedTransaction(response.data.data.serialized_transaction_base64)
      setShowSend(true)
      if (
        Number(amountRef.current?.value) >
        balance - response.data.data.estimated_network_fees
      ) {
        toast({
          title: "Warning!",
          description: "Send might fail because of insufficient balance",
          variant: "destructive",
        })
      }
    }
  }

  const handleInputChange = () => {
    if (toPublicKeyRef.current?.value) {
      setRecipientPubKey(toPublicKeyRef.current?.value)
    } else {
      setRecipientPubKey("")
    }
  }

  const handleAmountChange = () => {
    setShowSend(false)
    if (amountRef.current?.value) {
      setAmount(Number(amountRef.current?.value))
      if (Number(amountRef.current?.value) > balance) {
        toast({
          title: "Insufficient Balance",
          description: "Please enter permissible amount.",
          variant: "destructive",
        })
      }
    } else {
      setAmount(0)
    }
  }

  const isButtonsDisabled = !(
    recipientPubKey != "" &&
    amount != 0 &&
    amount <= balance
  )

  const sendSOL = async () => {
    const response = await postFetch(toast, {
      url: "http://localhost:3000/v1/transaction/send",
      data: {
        serialized_transaction_base64: serializedTransaction,
        public_key: accountState.public_key,
        rpc_type: rpcState,
      },
      headers: {
        Authorization: authorization,
      },
      allowStatus: [200],
    })
    if (response) {
      toast({
        title: "Successfully sent SOL",
        description: `Tx Signature: ${response.data.data.transaction_signature}`,
      })
    }
  }

  return (
    <div>
      <div>Send SOL</div>
      <Input
        ref={toPublicKeyRef}
        onInput={(e) => {
          const target = e.target as HTMLInputElement
          target.value = target.value.replace(
            /[^123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]/g,
            ""
          ) //allow only Base58 characters
        }}
        onChange={handleInputChange}
        placeholder="Recipient's Solana Address"
      ></Input>
      <Input
        ref={amountRef}
        onInput={(e) => {
          const target = e.target as HTMLInputElement
          target.value = target.value
            .replace(
              /[^0-9.]|(?<=\..*)\./g, //remove non-numeric characters and extra dots
              ""
            )
            .replace(
              /^(\d*\.\d{9}).*/, //limit to 9 digits after the dot
              "$1"
            )
        }}
        onChange={(e) => {
          console.log(e)
        }}
        placeholder="Amount"
      ></Input>
      {!isBalanceLoading ? <div>Available Balance: {balance} SOL</div> : ""}
      <div>Network Fees: {estimatedNetworkFees} SOL</div>
      <Button variant="outline">Cancel</Button>
      {!showSend ? (
        <Button
          disabled={isButtonsDisabled}
          onClick={calculateEstimatedNetworkFees}
        >
          Calculate Network Fees
        </Button>
      ) : (
        <Button disabled={isButtonsDisabled} onClick={sendSOL}>
          Send
        </Button>
      )}
    </div>
  )
}
