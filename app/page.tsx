"use client"

import { useState } from "react"
import NFTCard from "@/components/nft-card"
import { Button } from "@/components/ui/button"
import FAQSection from "@/components/faq-section"
import { Loader2 } from "lucide-react"

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [claiming, setClaiming] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConnectWallet = () => {
    setWalletConnected(true)
  }

  const handleClaim = () => {
    setClaiming(true)
    // Simulate claiming process
    setTimeout(() => {
      setClaiming(false)
      setClaimed(true)
    }, 2000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 py-12 sm:p-24 bg-white">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Prove Your Self.</h1>
          <p className="text-lg text-gray-600">Prove you're human to claim this NFT.</p>
        </div>

        <NFTCard />

        <div className="w-full space-y-4">
          {!walletConnected ? (
            <Button
              onClick={handleConnectWallet}
              className="w-full bg-black hover:bg-black/90 text-white rounded-full py-6"
            >
              Connect Wallet
            </Button>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Connected: 0x1234...5678</span>
                <button onClick={() => setWalletConnected(false)} className="text-sm text-[#03FFB6] hover:underline">
                  Disconnect
                </button>
              </div>

              {!claimed ? (
                <Button
                  onClick={handleClaim}
                  disabled={claiming}
                  className="w-full bg-[#03FFB6] hover:bg-[#03FFB6]/90 text-black rounded-full py-6"
                >
                  {claiming ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Claiming...
                    </>
                  ) : (
                    "Claim NFT"
                  )}
                </Button>
              ) : (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm text-center">
                  Success! Your NFT has been claimed and will appear in your wallet shortly.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>
              )}
            </>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center">
          This NFT is on the Celo blockchain. Make sure your wallet is connected to the Celo network.
        </p>
      </div>

      <FAQSection />
    </main>
  )
}
