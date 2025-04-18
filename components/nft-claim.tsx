"use client"

import { useState, useEffect } from "react"
import {
  useAddress,
  useContract,
  useContractRead,
  useClaimNFT,
  useDisconnect,
  useConnectionStatus,
  ConnectWallet,
} from "@thirdweb-dev/react"
import { Loader2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import NFTImage from "@/components/nft-image"

interface NFTClaimProps {
  contractAddress: string
}

export default function NFTClaim({ contractAddress }: NFTClaimProps) {
  const address = useAddress()
  const connectionStatus = useConnectionStatus()
  const disconnect = useDisconnect()
  const isConnected = connectionStatus === "connected"

  const [claimSuccess, setClaimSuccess] = useState<boolean | null>(null)
  const [claimError, setClaimError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [nftMetadata, setNftMetadata] = useState<any>(null)

  // Connect to the contract
  const { contract } = useContract(contractAddress)

  // Get NFT metadata
  const { data: contractMetadata } = useContractRead(contract, "contractURI")

  // Setup claim functionality
  const { mutateAsync: claimNft } = useClaimNFT(contract)

  useEffect(() => {
    if (contractMetadata) {
      try {
        // Try to parse the metadata if it's a JSON string
        if (typeof contractMetadata === "string" && contractMetadata.startsWith("data:application/json")) {
          const jsonStr = atob(contractMetadata.substring(29))
          setNftMetadata(JSON.parse(jsonStr))
        } else if (typeof contractMetadata === "string") {
          // If it's a URL or IPFS URI, you might need to fetch it
          // This is a simplified approach
          setNftMetadata({ name: "Prove Your Self NFT" })
        }
      } catch (error) {
        console.error("Error parsing NFT metadata:", error)
        setNftMetadata({ name: "Prove Your Self NFT" })
      }
    }
  }, [contractMetadata])

  const handleClaim = async () => {
    if (!address || !contract) return

    setIsLoading(true)
    setClaimSuccess(null)
    setClaimError(null)

    try {
      await claimNft({
        to: address,
        quantity: 1,
        price: 0,
        currencyAddress: "0x0000000000000000000000000000000000000000", // Zero address for native CELO
        proofs: [],
        proofMaxQuantityPerTransaction: 0, // unlimited
      })

      setClaimSuccess(true)
    } catch (error: any) {
      console.error("Error claiming NFT:", error)
      setClaimError(error.message || "Failed to claim NFT. Please try again.")
      setClaimSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Prove Your Self.</h1>
        <p className="text-lg text-gray-600">Prove you're human to claim this NFT.</p>
      </div>

      <Card className="w-full p-6 border border-[#CBD5E1] rounded-xl shadow-sm">
        <div className="flex flex-col items-center gap-6">
          {/* NFT Image */}
          <NFTImage contractMetadata={nftMetadata} isLoading={isLoading} />

          {/* Wallet Connection */}
          {!isConnected ? (
            <ConnectWallet
              theme="light"
              btnTitle="Connect Wallet"
              className="!bg-black !text-white !rounded-full !px-6 !py-2 !font-medium !text-sm"
            />
          ) : (
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button onClick={disconnect} className="text-sm text-[#03FFB6] hover:underline">
                  Disconnect
                </button>
              </div>

              {/* Claim Button */}
              <Button
                onClick={handleClaim}
                disabled={isLoading}
                className="w-full bg-[#03FFB6] hover:bg-[#03FFB6]/90 text-black rounded-full py-6"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Claim NFT
              </Button>

              {/* Success/Error Messages */}
              {claimSuccess === true && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  Success! Your NFT has been claimed and will appear in your wallet shortly.
                </div>
              )}

              {claimSuccess === true && (
                <div className="flex items-center justify-center mt-2">
                  <button
                    onClick={() => {
                      const shareText =
                        "I just claimed my 'Prove Your Self' NFT on Celo blockchain! #NFT #Celo #ProveYourSelf"
                      const shareUrl = window.location.href

                      if (navigator.share) {
                        navigator.share({
                          title: "My NFT Claim",
                          text: shareText,
                          url: shareUrl,
                        })
                      } else {
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
                          "_blank",
                        )
                      }
                    }}
                    className="flex items-center gap-2 text-sm text-[#03FFB6] hover:underline"
                  >
                    <Share2 className="h-4 w-4" />
                    Share your claim
                  </button>
                </div>
              )}

              {claimSuccess === false && claimError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{claimError}</div>
              )}
            </div>
          )}
        </div>
      </Card>

      <p className="text-xs text-gray-400 text-center">
        This NFT is on the Celo blockchain. Make sure your wallet is connected to the Celo network.
      </p>
    </div>
  )
}
