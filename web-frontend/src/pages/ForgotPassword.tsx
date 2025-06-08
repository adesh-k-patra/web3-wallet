import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

export default function ForgotPassword() {
  const navigate = useNavigate()
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>
          A 6-digit OTP will be sent to this Email ID.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email ID</Label>
              <Input id="name" placeholder="Type your Email ID" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            navigate("/preface")
          }}
        >
          Go Back
        </Button>
        <Button
          onClick={() => {
            navigate("/verify/email?q=forgot_password")
          }}
        >
          Get OTP
        </Button>
      </CardFooter>
    </Card>
  )
}
