import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function CreateFirstAccount() {
  const navigate = useNavigate()
  return (
    <div>
      <div>Welcome to this wallet!!</div>
      <Button
        onClick={() => {
          navigate("/add_or_connect")
        }}
      >
        Create Your First Account
      </Button>
    </div>
  )
}
