import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useLocation, useNavigate } from "react-router-dom"
import AllAccountsOfUser from "./AllAccountsOfUser"
import { useEffect, useState } from "react"
import AccountState from "@/type_interface/AccountState"

export default function SideDashboard({
  accountState,
  setAccountState,
}: {
  accountState: AccountState
  setAccountState: (value: AccountState) => void
}) {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    //close the sheet whenever the route changes
    setIsSheetOpen(false)
  }, [location])

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="">
          {accountState.account_name}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="">
        User Wallets
        <AllAccountsOfUser setAccountState={setAccountState} />
        <div className="flex justify-around mt-6">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <div
                className="h-16 w-16 bg-black rounded-full cursor-pointer"
                onClick={() => navigate("/add_or_connect")}
              ></div>
            </HoverCardTrigger>
            <HoverCardContent side="top">
              <div>Create / Import Wallet</div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <div className="h-16 w-16 bg-black rounded-full cursor-pointer"></div>
            </HoverCardTrigger>
            <HoverCardContent side="top">
              <div>Settings</div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </SheetContent>
    </Sheet>
  )
}
