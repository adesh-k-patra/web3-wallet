import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { validateMnemonic } from "bip39"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function EnterSeed() {
  const [seedSize, setSeedSize] = useState<number>(12)
  const [seeds, setSeeds] = useState<string[]>(Array(12).fill(""))
  const navigate = useNavigate()
  const { toast } = useToast()
  const handleInputChange = (index: number, value: string) => {
    const updatedSeeds = [...seeds]
    updatedSeeds[index] = value
    setSeeds(updatedSeeds)
  }

  const allFieldsFilled = seeds.every((seed) => seed.trim() !== "")

  const handleImportWallet = async () => {
    let seed_mnemonic = ""
    seeds.forEach((seed) => {
      seed = seed.trim()
      seed_mnemonic += seed
      seed_mnemonic += " "
    })
    seed_mnemonic = seed_mnemonic.trim()
    if (!validateMnemonic(seed_mnemonic)) {
      toast({
        title: "Error !!!",
        description: "Invalid Seed Mnemonic. Please try again",
        variant: "destructive",
      })
    } else {
      navigate("/seed/all_accounts", {
        state: { seed_mnemonic },
      })
    }
  }

  return (
    <div className="space-y-4">
      <div className="w-96 h-96 bg-slate-600 p-4 text-white rounded-md space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: seedSize }).map((_, index) => (
            <Input
              key={index}
              placeholder={`Seed ${index + 1}`}
              value={seeds[index] || ""}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <Button
          className="w-full"
          disabled={!allFieldsFilled}
          onClick={handleImportWallet}
        >
          Import Wallet
        </Button>
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => {
              setSeedSize(12)
              setSeeds(Array(12).fill(""))
            }}
          >
            12-Word Seed
          </Button>
          <Button
            onClick={() => {
              setSeedSize(24)
              setSeeds(Array(24).fill(""))
            }}
          >
            24-Word Seed
          </Button>
        </div>
      </div>
    </div>
  )
}
