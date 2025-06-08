import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Button } from "./ui/button"
import { Separator } from "@radix-ui/react-separator"
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"
import getFetch from "@/utils/getFetch"
import AccountState from "@/type_interface/AccountState"
import ENUMS from "@/utils/enums"

export default function AllAccountsOfUser({
  setAccountState,
}: {
  setAccountState: (value: AccountState) => void
}) {
  const [allAccounts, setAllAccounts] = useState<AccountState[]>([])

  const { toast } = useToast()
  const navigate = useNavigate()
  const authorization =
    "Bearer " + localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

  useEffect(() => {
    const fetchAllAccountsRequest = async () => {
      const allAccountsResponse = await getFetch(toast, {
        url: "http://localhost:3000/v1/account/all",
        headers: {
          Authorization: authorization,
        },
        allowStatus: [200, 401],
      })

      if (allAccountsResponse?.status === 200) {
        const tempAllAccounts: AccountState[] =
          allAccountsResponse.data.data.map((account) => ({
            account_name: account.account_name,
            public_key: account.public_key,
          }))
        setAllAccounts(tempAllAccounts)
      } else if (allAccountsResponse?.status === 401) {
        toast({
          title: "Access Token expired",
          description: "Please login again to continue",
          variant: "destructive",
        })
        navigate("/preface")
      }
    }

    fetchAllAccountsRequest()
  }, [])

  return (
    <ScrollArea className="h-5/6 space-y-4">
      {allAccounts.map((account, index) => (
        <HoverCard key={index} openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <Button
              className="w-full rounded-3xl h-16"
              onClick={() => {
                //store data of last visited account in localStorage to later redirect user to this account upon login
                setAccountState({
                  account_name: account.account_name,
                  public_key: account.public_key,
                })
                navigate("/dashboard")
              }}
            >
              {account.account_name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side="left">
            <div className="bg-white">Public Key: {account.public_key}</div>
          </HoverCardContent>
          <Separator className="my-2 bg-transparent" />
        </HoverCard>
      ))}
    </ScrollArea>
  )
}
