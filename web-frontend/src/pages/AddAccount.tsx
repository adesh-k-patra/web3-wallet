import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import getFetch from "@/utils/getFetch"
import postFetch from "@/utils/postFetch"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import ENUMS from "@/utils/enums"
import AccountState from "@/type_interface/AccountState"

export default function AddAccount({
  setAccountState,
}: {
  setAccountState: (value: AccountState) => void
}) {
  const [accountName, setAccountName] = useState<string>("")

  const { toast } = useToast()
  const navigate = useNavigate()
  const authorization =
    "Bearer " + localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const getNumAccounts = async () => {
      const numAccountsResponse = await getFetch(toast, {
        url: "http://localhost:3000/v1/account/all/count",
        headers: {
          Authorization: authorization,
        },
        allowStatus: [200],
      })

      if (numAccountsResponse) {
        const num_accounts = numAccountsResponse.data.data.num_accounts
        setAccountName(`Account ${num_accounts + 1}`)
      }
    }
    const fetchAccounts = async () => {
      await getNumAccounts()
    }

    fetchAccounts()

    if (inputRef.current) {
      inputRef.current.focus()
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }
  }, [])

  const createAccount = async () => {
    const createAccountResponse = await postFetch(toast, {
      url: "http://localhost:3000/v1/account/new",
      data: {
        account_name: accountName,
      },
      headers: {
        Authorization: authorization,
      },
      allowStatus: [200],
    })

    if (createAccountResponse) {
      const account_name = createAccountResponse.data.data.account_name
      const public_key = createAccountResponse.data.data.public_key
      toast({
        title: "Account created successfully",
        description: `Address: ${public_key}`,
      })
      setAccountState({
        account_name,
        public_key,
      })
      navigate("/dashboard")
    }
  }

  return (
    <div>
      <Label htmlFor="account_name">Account Name</Label>
      <Input
        id="account_name"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
        ref={inputRef}
      />
      <Button
        variant="outline"
        onClick={() => {
          navigate("/add_or_connect")
        }}
      >
        Cancel
      </Button>
      <Button onClick={createAccount}>Create</Button>
    </div>
  )
}
