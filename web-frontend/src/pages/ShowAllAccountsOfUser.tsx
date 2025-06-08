import AllAccountsOfUser from "@/components/AllAccountsOfUser"
import AccountState from "@/type_interface/AccountState"

export default function ShowAllAccountsOfUser({
  setAccountState,
}: {
  setAccountState: (value: AccountState) => void
}) {
  return (
    <div>
      <div>All Accounts</div>
      <AllAccountsOfUser setAccountState={setAccountState} />
    </div>
  )
}
