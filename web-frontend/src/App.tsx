import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Preface from "./pages/Preface"
import ForgotPassword from "./pages/ForgotPassword"
import VerifyEmail from "./pages/VerifyEmail"
import ChangePassword from "./pages/ChangePassword"
import Dashboard from "./pages/Dashboard"
import { Toaster } from "./components/ui/toaster.tsx"
import AddOrConnectWallet from "./pages/AddOrConnectWallet.tsx"
import GenerateSeed from "./pages/GenerateSeed.tsx"
import AddAccount from "./pages/AddAccount.tsx"
import ImportPrivateKeyAccount from "./pages/ImportPrivateKeyAccount.tsx"
import CreateFirstAccount from "./pages/CreateFirstAccount.tsx"
import Navbar from "./layout/Navbar.tsx"
import { useEffect, useState } from "react"
import AccountState from "./type_interface/AccountState.ts"
import ENUMS from "./utils/enums.ts"
import ShowLoader from "./components/ShowLoader.tsx"
import EnterSeed from "./pages/EnterSeed.tsx"
import ShowAllAccountsOfUser from "./pages/ShowAllAccountsOfUser.tsx"
import ShowAllAccountsOfSeed from "./pages/ShowAllAccountsOfSeed.tsx"
import RpcType from "./type_interface/RpcState.ts"
import SendSOL from "./pages/SendSOL.tsx"
import LaunchToken from "./pages/LaunchToken.tsx"

function App() {
  const [accountState, setAccountState] = useState<AccountState>({
    account_name: null,
    public_key: null,
  })
  const [rpcState, setRpcState] = useState<RpcType>(ENUMS.RPC_TYPE.DEVNET)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const logged_user = localStorage.getItem(
        ENUMS.LOCAL_STORAGE_VARIABLES.LOGGED_USER
      )
      if (logged_user) {
        const stringedAccountStateOfUser = localStorage.getItem(
          ENUMS.LOCAL_STORAGE_VARIABLES.ACCOUNT_STATE
        )
        const accountStateOfUser = stringedAccountStateOfUser
          ? JSON.parse(stringedAccountStateOfUser)
          : null

        if (
          accountStateOfUser &&
          accountStateOfUser.account_name &&
          accountStateOfUser.public_key
        ) {
          setAccountState(accountStateOfUser)
        }
      }
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  if (isLoading) {
    return <ShowLoader />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Startup routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/preface"
            element={<Preface setAccountState={setAccountState} />}
          />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/verify/email" element={<VerifyEmail />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route
            path="/create_first_account"
            element={<CreateFirstAccount />}
          />
          <Route
            path="/all_accounts"
            element={
              <ShowAllAccountsOfUser setAccountState={setAccountState} />
            }
          />

          <Route
            element={
              <Navbar
                accountState={accountState}
                setAccountState={setAccountState}
                rpcState={rpcState}
                setRpcState={setRpcState}
              />
            }
          >
            <Route
              path="/dashboard"
              element={
                <Dashboard accountState={accountState} rpcState={rpcState} />
              }
            />
            {/* Create/Import Account routes */}
            <Route path="/add_or_connect" element={<AddOrConnectWallet />} />
            <Route path="/generate_seed" element={<GenerateSeed />} />
            <Route
              path="/add_account"
              element={<AddAccount setAccountState={setAccountState} />}
            />
            <Route
              path="/import_private_key_account"
              element={
                <ImportPrivateKeyAccount setAccountState={setAccountState} />
              }
            />
            <Route path="/enter_seed" element={<EnterSeed />} />
            <Route
              path="/seed/all_accounts"
              element={<ShowAllAccountsOfSeed rpcState={rpcState} />}
            />
            <Route
              path="/send_sol"
              element={
                <SendSOL accountState={accountState} rpcState={rpcState} />
              }
            />
            <Route
              path="/launch_token"
              element={
                <LaunchToken accountState={accountState} rpcState={rpcState} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
