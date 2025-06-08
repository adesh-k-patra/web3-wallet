import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import AccountState from "@/type_interface/AccountState"
import RpcType from "@/type_interface/RpcState"
import { useState } from "react"

interface Token {
  name: string
  symbol: string
  decimals: number | null
  supply: number | null
  image: File | null
  description: string
  isSocialLinks: boolean
  website: string
  twitter: string
  telegram: string
  discord: string
  isModifyCreator: boolean
  creatorName: string
  creatorWebsite: string
  revokeFreeze: boolean
  revokeMint: boolean
  revokeUpdate: boolean
}

export default function LaunchToken({
  accountState,
  rpcState,
}: {
  accountState: AccountState
  rpcState: RpcType
}) {
  const [token, setToken] = useState<Token>({
    name: "",
    symbol: "",
    decimals: null,
    supply: null,
    image: null,
    description: "",
    isSocialLinks: false,
    website: "",
    twitter: "",
    telegram: "",
    discord: "",
    isModifyCreator: false,
    creatorName: "",
    creatorWebsite: "",
    revokeFreeze: false,
    revokeMint: false,
    revokeUpdate: false,
  })
  const [showCreate, setShowCreate] = useState<boolean>(false)

  const isButtonDisabled = !(
    token.name &&
    token.symbol &&
    token.decimals &&
    token.supply &&
    token.image &&
    token.description
  )

  return (
    <div className="px-4">
      Launch Solana Token
      <div className="grid grid-cols-2">
        <div className="px-2 py-2">
          <Label htmlFor="name">Name of token</Label>
          <Input
            id="name"
            placeholder="Name of token"
            onChange={(e) => {
              setShowCreate(false)
              setToken((prevToken) => ({
                ...prevToken,
                name: e.target.value,
              }))
            }}
          ></Input>
        </div>

        <div className="px-2 py-2">
          <Label htmlFor="symbol">Symbol of token</Label>
          <Input
            id="symbol"
            placeholder="Symbol of token"
            onChange={(e) => {
              setShowCreate(false)
              setToken((prevToken) => ({
                ...prevToken,
                symbol: e.target.value,
              }))
            }}
          ></Input>
        </div>

        <div className="px-2 py-2">
          <Label htmlFor="decimals">Decimals</Label>
          <Input
            id="decimals"
            placeholder="Decimals"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              target.value = target.value.replace(/[^0-9]/g, "") //allow only digits (0-9)
            }}
            onChange={(e) => {
              setShowCreate(false)
              setToken((prevToken) => ({
                ...prevToken,
                decimals: e.target.value ? Number(e.target.value) : null,
              }))
            }}
          ></Input>
        </div>

        <div className="px-2 py-2">
          <Label htmlFor="supply">Supply</Label>
          <Input
            id="supply"
            placeholder="Supply"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              target.value = target.value.replace(/[^0-9]/g, "") //allow only digits (0-9)
            }}
            onChange={(e) => {
              setShowCreate(false)
              setToken((prevToken) => ({
                ...prevToken,
                supply: e.target.value ? Number(e.target.value) : null,
              }))
            }}
          ></Input>
        </div>

        <div className="px-2 py-2">
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setShowCreate(false)
              setToken((prevToken) => ({
                ...prevToken,
                image:
                  e.target.files && e.target.files[0]
                    ? e.target.files[0]
                    : null,
              }))
            }}
          ></Input>
        </div>

        <div className="px-2 py-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Description"
            onChange={(e) => {
              setShowCreate(false)
              setToken((prevToken) => ({
                ...prevToken,
                description: e.target.value,
              }))
            }}
          ></Input>
        </div>

        <div className="col-span-2 px-2 py-2">
          <div className="flex items-center">
            <Label htmlFor="social_links_and_tags">
              Add Social Links & Tags
            </Label>
            <Switch
              id="social_links_and_tags"
              className="ml-4"
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setShowCreate(false)
                setToken((prevToken) => ({
                  ...prevToken,
                  isSocialLinks: checked,
                }))
              }}
            />
          </div>
          {token.isSocialLinks ? (
            <div className="grid grid-cols-2">
              <div className="px-2 py-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  placeholder="Website"
                  onChange={(e) => {
                    setShowCreate(false)
                    setToken((prevToken) => ({
                      ...prevToken,
                      website: e.target.value,
                    }))
                  }}
                ></Input>
              </div>
              <div className="px-2 py-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  placeholder="Twitter"
                  onChange={(e) => {
                    setShowCreate(false)
                    setToken((prevToken) => ({
                      ...prevToken,
                      twitter: e.target.value,
                    }))
                  }}
                ></Input>
              </div>
              <div className="px-2 py-2">
                <Label htmlFor="telegram">Telegram</Label>
                <Input
                  id="telegram"
                  placeholder="Telegram"
                  onChange={(e) => {
                    setShowCreate(false)
                    setToken((prevToken) => ({
                      ...prevToken,
                      telegram: e.target.value,
                    }))
                  }}
                ></Input>
              </div>
              <div className="px-2 py-2">
                <Label htmlFor="discord">Discord</Label>
                <Input
                  id="discord"
                  placeholder="Discord"
                  onChange={(e) => {
                    setShowCreate(false)
                    setToken((prevToken) => ({
                      ...prevToken,
                      discord: e.target.value,
                    }))
                  }}
                ></Input>
              </div>
            </div>
          ) : null}
        </div>

        <div className="col-span-2 px-2 py-2">
          <div className="flex items-center">
            <Label htmlFor="creator_information">
              Modify Creator Information
            </Label>
            <Switch
              id="creator_information"
              className="ml-4"
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setShowCreate(false)
                setToken((prevToken) => ({
                  ...prevToken,
                  isModifyCreator: checked,
                }))
              }}
            />
          </div>
          {token.isModifyCreator ? (
            <div className="grid grid-cols-2">
              <div className="px-2 py-2">
                <Label htmlFor="creator_name">Creator Name</Label>
                <Input
                  id="creator_name"
                  placeholder="Creator Name"
                  onChange={(e) => {
                    setShowCreate(false)
                    setToken((prevToken) => ({
                      ...prevToken,
                      creatorName: e.target.value,
                    }))
                  }}
                ></Input>
              </div>
              <div className="px-2 py-2">
                <Label htmlFor="creator_website">Creator Website</Label>
                <Input
                  id="creator_website"
                  placeholder="Creator Website"
                  onChange={(e) => {
                    setShowCreate(false)
                    setToken((prevToken) => ({
                      ...prevToken,
                      creatorWebsite: e.target.value,
                    }))
                  }}
                ></Input>
              </div>
            </div>
          ) : null}
        </div>

        <div className="px-2 py-2 col-span-2 flex justify-between">
          <div className="flex items-center">
            <Label htmlFor="revoke_freeze">Revoke Freeze</Label>
            <Switch
              id="revoke_freeze"
              className="ml-4"
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setShowCreate(false)
                setToken((prevToken) => ({
                  ...prevToken,
                  revokeFreeze: checked,
                }))
              }}
            />
          </div>
          <div className="flex items-center">
            <Label htmlFor="revoke_mint">Revoke Mint</Label>
            <Switch
              id="revoke_mint"
              className="ml-4"
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setShowCreate(false)
                setToken((prevToken) => ({
                  ...prevToken,
                  revokeMint: checked,
                }))
              }}
            />
          </div>
          <div className="flex items-center">
            <Label htmlFor="revoke_update">Revoke Update</Label>
            <Switch
              id="revoke_update"
              className="ml-4"
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setShowCreate(false)
                setToken((prevToken) => ({
                  ...prevToken,
                  revokeUpdate: checked,
                }))
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {!showCreate ? (
          <Button disabled={isButtonDisabled}>Calculate Network Fees</Button>
        ) : (
          <Button disabled={isButtonDisabled}>Create Token</Button>
        )}
      </div>
      <div className="flex justify-center">Total Fees: 0 SOL</div>
    </div>
  )
}
