import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

export default function ChangePassword() {
  const navigate = useNavigate()
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">New Password</Label>
              <Input
                id="name"
                placeholder="Type your new password"
                type="password"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Confirm Password</Label>
              <Input
                id="name"
                placeholder="Re-type your password"
                type="password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => {
            navigate("/verify/email?q=forgot_password")
          }}
          className="w-full"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
