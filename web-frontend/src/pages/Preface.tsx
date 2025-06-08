import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import postFetch from "@/utils/postFetch"
import ENUMS from "@/utils/enums"
import AccountState from "@/type_interface/AccountState"

export default function Preface({
  setAccountState,
}: {
  setAccountState: (value: AccountState) => void
}) {
  const emailRefLogin = useRef(null)
  const passwordRefLogin = useRef(null)
  const emailRefSignup = useRef(null)
  const passwordRefSignup = useRef(null)
  const { toast } = useToast()

  const navigate = useNavigate()

  const login = async () => {
    const email_id = emailRefLogin.current?.value
    const password = passwordRefLogin.current?.value

    const loginResponse = await postFetch(toast, {
      url: "http://localhost:3000/v1/auth/login",
      data: {
        email_id,
        password,
      },
      headers: {},
      allowStatus: [200, 422, 400, 401],
    })

    if (loginResponse) {
      if (loginResponse.status === 200) {
        const accessToken = loginResponse.data.data.accessToken
        localStorage.setItem(
          ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN,
          accessToken
        )
        localStorage.setItem(
          ENUMS.LOCAL_STORAGE_VARIABLES.LOGGED_USER,
          email_id
        )
        toast({
          title: "Login Successful",
          description: "You have successfully logged in.",
        })

        //check if user has created any account ever
        const authorization = "Bearer " + accessToken
        const isAccountExistResponse = await postFetch(toast, {
          url: "http://localhost:3000/v1/account/is_exist",
          data: {},
          headers: {
            Authorization: authorization,
          },
          allowStatus: [200],
        })

        if (isAccountExistResponse) {
          //redirect to create first account page if no account exists for user
          if (!isAccountExistResponse.data.data.is_account_exist) {
            navigate("/create_first_account")
          } else {
            //redirect to last visited account if that data exists in the localStorage
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
              navigate("/dashboard")
            } else {
              navigate("/all_accounts")
            }
          }
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Incorrect email id or password",
          variant: "destructive",
        })
      }
    }
  }

  const signup = async () => {
    const email_id = emailRefSignup.current?.value
    const password = passwordRefSignup.current?.value

    const response = await postFetch(toast, {
      url: "http://localhost:3000/v1/auth/signup",
      data: {
        email_id,
        password,
      },
      headers: {},
      allowStatus: [200, 422, 400, 401],
    })

    if (response) {
      if (response.status === 200) {
        const accessToken = response.data.data.accessToken
        localStorage.setItem("accessToken", accessToken)
        toast({
          title: "Signup Successful",
          description:
            "You have successfully signed up. Please login to continue.",
        })
        navigate("/preface")
      } else {
        toast({
          title: "Signup Failed",
          description: "User already exists for the given email id",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Log in</TabsTrigger>
        <TabsTrigger value="signup">Sign up </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email ID</Label>
              <Input
                ref={emailRefLogin}
                id="name"
                type="email"
                placeholder="Type your Email ID"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input
                ref={passwordRefLogin}
                id="username"
                type="password"
                placeholder="Type your Password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="flex justify-between w-full">
              <Button className="w-[100px]" onClick={login}>
                Log in
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/forgot_password")
                }}
              >
                Forgot Password
              </Button>
            </div>
            <Button className="w-full">Log in via Google</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email ID</Label>
              <Input
                ref={emailRefSignup}
                id="name"
                type="email"
                placeholder="Type your Email ID"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input
                ref={passwordRefSignup}
                id="username"
                type="password"
                placeholder="Type your Password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full" onClick={signup}>
              Sign up
            </Button>
            <Button className="w-full">Sign up via Google</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
