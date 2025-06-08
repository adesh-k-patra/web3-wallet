import { useEffect, useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox" // Import Checkbox component from your UI library
import ENUMS from "@/utils/enums"
import postFetch from "@/utils/postFetch"
import { useLocation, useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import ShowLoader from "@/components/ShowLoader"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import RpcType from "@/type_interface/RpcState"

interface SelectedAccount {
  seed_index: number
  account_name: string
}

interface IncomingAccount {
  seed_index: number
  public_key: string
  balance: number
}

export default function ShowAllAccountsOfSeed({
  rpcState,
}: {
  rpcState: RpcType
}) {
  const [allAccounts, setAllAccounts] = useState<IncomingAccount[]>([])
  const [selectedAccounts, setSelectedAccounts] = useState<SelectedAccount[]>(
    []
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const navigate = useNavigate()
  const { toast } = useToast()
  const location = useLocation()
  const { seed_mnemonic } = location.state || {}

  if (!seed_mnemonic) {
    toast({
      title: "Error !!!",
      description: "Seed Phrase not detected. Kindly enter again",
      variant: "destructive",
    })
    navigate("/enter_seed")
  }

  const authorization =
    "Bearer " + localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

  useEffect(() => {
    setIsLoading(true)
    const getAllAccounts = async () => {
      const response = await postFetch(toast, {
        url: "http://localhost:3000/v1/seed/all_accounts",
        data: {
          seed_mnemonic,
          rpc_type: rpcState,
        },
        headers: {
          Authorization: authorization,
        },
        allowStatus: [200],
      })

      if (response) {
        if (response.data.data.length === 0) {
          toast({
            title: "No Account found",
            description:
              "Please import your account using private key if there is an error.",
            variant: "destructive",
          })
        }
        setAllAccounts(response.data.data)
      }
      setIsLoading(false)
    }

    const fetchAllAccounts = async () => {
      await getAllAccounts()
    }

    fetchAllAccounts()
  }, [rpcState])

  const handleCheckboxChange = (seed_index: number, checked: boolean) => {
    setSelectedAccounts((prev) =>
      checked
        ? [
            ...prev,
            {
              seed_index,
              account_name: "",
            },
          ]
        : prev.filter((account) => account.seed_index != seed_index)
    )
  }

  const handleInputChange = (seed_index: number, value: string) => {
    setSelectedAccounts((prev) =>
      prev.map((account) => {
        if (account.seed_index != seed_index) {
          return account
        } else {
          return {
            seed_index: account.seed_index,
            account_name: value,
          }
        }
      })
    )
  }

  const isCardSelected = (seed_index: number) => {
    return selectedAccounts.some((account) => account.seed_index === seed_index)
  }

  const importAccounts = async () => {
    if (selectedAccounts.length === 0) {
      toast({
        title: "Error !!!",
        description: "Please select the accounts you want to import",
        variant: "destructive",
      })
    } else if (
      !selectedAccounts.every((account) => account.account_name.length > 0)
    ) {
      toast({
        title: "Error !!!",
        description:
          "Please enter the account name for all the selected accounts",
        variant: "destructive",
      })
    } else {
      const response = await postFetch(toast, {
        url: "http://localhost:3000/v1/account/import/seed_phrase",
        data: {
          seed_mnemonic,
          accounts: selectedAccounts,
        },
        headers: {
          Authorization: authorization,
        },
        allowStatus: [200],
      })

      if (response) {
        toast({
          title: "Success !!!",
          description:
            "All the accounts have been added. Please toggle between accounts and enjoy :)",
        })
      }
    }
  }

  if (isLoading) {
    return <ShowLoader />
  }

  return (
    <div>
      <div>All Accounts Of User</div>
      <ScrollArea className="bg-slate-600 h-[500px]">
        <div className="space-y-4 p-4">
          {allAccounts.map((account) => (
            <Card
              key={account.seed_index}
              className={`${
                isCardSelected(account.seed_index) ? "bg-gray-300" : "bg-white"
              }`}
            >
              <CardHeader className="grid grid-cols-12">
                <div className="col-span-10">
                  <CardTitle>{account.public_key}</CardTitle>
                  <CardDescription>
                    <div>
                      <span>{account.balance} SOL</span>
                    </div>
                  </CardDescription>
                </div>
                <div className="col-span-2 flex justify-center">
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(
                        account.seed_index,
                        checked as boolean
                      )
                    }
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </CardHeader>
              {isCardSelected(account.seed_index) && (
                <CardContent>
                  <Input
                    placeholder="Enter account name"
                    onChange={(e) =>
                      handleInputChange(account.seed_index, e.target.value)
                    }
                    className="mt-2"
                  />
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </ScrollArea>
      <Button onClick={importAccounts}>Import Account</Button>
    </div>
  )
}
