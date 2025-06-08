import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import getFetch from "@/utils/getFetch"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"
import ENUMS from "@/utils/enums"

export default function AddOrConnectWallet() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const isSeedGenerated = async () => {
    const authorization =
      "Bearer " +
      localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)
    const response = await getFetch(toast, {
      url: "http://localhost:3000/v1/seed/is_generated",
      headers: {
        Authorization: authorization,
      },
      allowStatus: [200],
    })
    if (response) {
      if (response.data.data.is_seed_generated) {
        navigate("/add_account")
      } else {
        navigate("/generate_seed")
      }
    }
  }

  return (
    <div className="space-y-10">
      <Button
        variant="outline"
        onClick={() => {
          navigate("/dashboard")
        }}
      >
        Go Back
      </Button>
      <Card className="w-[350px] cursor-pointer" onClick={isSeedGenerated}>
        <CardHeader>
          <CardTitle>Create New Account</CardTitle>
          <CardDescription>Add a new Solana account.</CardDescription>
        </CardHeader>
      </Card>
      <Card
        className="w-[350px] cursor-pointer"
        onClick={() => {
          navigate("/enter_seed")
        }}
      >
        <CardHeader>
          <CardTitle>Import Secret Recovery Phrase</CardTitle>
          <CardDescription>Import accounts from another wallet</CardDescription>
        </CardHeader>
      </Card>
      <Card
        className="w-[350px] cursor-pointer"
        onClick={() => {
          navigate("/import_private_key_account")
        }}
      >
        <CardHeader>
          <CardTitle>Import Private Key</CardTitle>
          <CardDescription>Import a Solana account</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
