"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface NFTImageProps {
  contractMetadata: any
  isLoading?: boolean
}

export default function NFTImage({ contractMetadata, isLoading = false }: NFTImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    if (contractMetadata && contractMetadata.image) {
      // Handle IPFS URLs
      let url = contractMetadata.image
      if (url.startsWith("ipfs://")) {
        url = `https://ipfs.io/ipfs/${url.slice(7)}`
      }
      setImageUrl(url)
    } else {
      setImageUrl(null)
    }
  }, [contractMetadata])

  return (
    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#f8fafc] border border-[#CBD5E1]">
      {(isLoading || imageLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f8fafc]/80 z-10">
          <Loader2 className="h-10 w-10 text-[#03FFB6] animate-spin" />
        </div>
      )}

      {imageUrl ? (
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="NFT"
          fill
          className="object-contain"
          onLoad={() => setImageLoading(false)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="w-24 h-24 rounded-full bg-[#03FFB6]/10 flex items-center justify-center mb-4">
            <span className="text-4xl">🎨</span>
          </div>
          <span className="text-lg font-medium text-gray-500 text-center">Prove Your Self NFT</span>
          <span className="text-sm text-gray-400 text-center mt-2">Connect your wallet to view this exclusive NFT</span>
        </div>
      )}
    </div>
  )
}
