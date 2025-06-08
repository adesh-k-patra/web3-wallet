import { Button } from "@/components/ui/button"
import { useState } from "react"
import { generateMnemonic } from "bip39"
import postFetch from "@/utils/postFetch"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"
import ENUMS from "@/utils/enums"

export default function GenerateSeed() {
  const [seed, setSeed] = useState<string>("")
  const { toast } = useToast()
  const navigate = useNavigate()

  const generateSeed = () => {
    const newSeed = generateMnemonic()
    setSeed(newSeed)
  }

  const saveGeneratedSeed = async () => {
    const authorization =
      "Bearer " +
      localStorage.getItem(ENUMS.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN)

    const response = await postFetch(toast, {
      url: "http://localhost:3000/v1/seed",
      data: {
        seed_mnemonic: seed,
      },
      headers: {
        Authorization: authorization,
      },
      allowStatus: [200],
    })
    if (response) {
      toast({
        title: "Success!",
        description:
          "All your new accounts will be created using this seed phrase.",
      })
      navigate("/add_account")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Button onClick={generateSeed} variant="outline">
          Re-generate Seed
        </Button>
        <Button disabled={seed.length === 0} onClick={saveGeneratedSeed}>
          Use this Seed
        </Button>
      </div>

      <div className="w-96 h-96 bg-slate-600 p-4 text-white rounded-md">
        {seed.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <Button onClick={generateSeed}>Generate Seed</Button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {seed.split(" ").map((seed_bit, index) => (
              <div
                key={index}
                className="bg-slate-800 p-2 rounded-md text-center"
              >
                {seed_bit}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
