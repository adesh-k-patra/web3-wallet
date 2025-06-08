import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Verify your Email ID</CardTitle>
        <CardDescription>
          Enter the OTP sent to you on your Email ID.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => {
            console.log(searchParams)
            if (searchParams.get("q") === "forgot_password") {
              navigate("/change_password")
            }
          }}
        >
          Submit
        </Button>
        <Button variant="outline">Resend OTP</Button>
      </CardFooter>
    </Card>
  )
}
