import RpcSelect from "@/components/RpcSelect"
import SideDashboard from "@/components/SideDashboard"
import { useToast } from "@/hooks/use-toast"
import AccountState from "@/type_interface/AccountState"
import RpcType from "@/type_interface/RpcState"
import ENUMS from "@/utils/enums"
import postFetch from "@/utils/postFetch"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function Navbar({
  accountState,
  setAccountState,
  rpcState,
  setRpcState,
}: {
  accountState: AccountState
  setAccountState: (value: AccountState) => void
  rpcState: RpcType
  setRpcState: (value: RpcType) => void
}) {
  const { toast } = useToast()
  const navigate = useNavigate()

  if (!accountState || !accountState.account_name || !accountState.public_key) {
    navigate("/all_accounts")
  }

  //checks if the user is logged in and accountState is valid for the user whenever route/location changes
  useEffect(() => {
    const checkAccountExistence = async () => {
      const authorization =
        "Bearer " +
        localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

      const isAccountExistResponse = await postFetch(toast, {
        url: "http://localhost:3000/v1/account/is_exist",
        data: { public_key: accountState.public_key },
        headers: {
          Authorization: authorization,
        },
        allowStatus: [200],
      })

      if (
        isAccountExistResponse &&
        isAccountExistResponse.data.data.is_account_exist
      ) {
        const logged_user = localStorage.getItem(
          ENUMS.LOCAL_STORAGE_VARIABLES.LOGGED_USER
        )

        if (logged_user) {
          localStorage.setItem(
            ENUMS.LOCAL_STORAGE_VARIABLES.ACCOUNT_STATE,
            JSON.stringify(accountState)
          )
        }
      } else {
        toast({
          title: "Account does not exist",
          description: "Please choose your account again.",
          variant: "destructive",
        })
        navigate("/all_accounts")
      }
    }

    checkAccountExistence()
  }, [accountState])

  return (
    <>
      <div className="bg-slate-500 p-4 flex justify-between">
        <SideDashboard
          accountState={accountState}
          setAccountState={setAccountState}
        />
        <RpcSelect rpcState={rpcState} setRpcState={setRpcState} />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
