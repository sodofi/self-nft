"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function NFTCard() {
  const [isHovering, setIsHovering] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  return (
    <Card
      className="w-full p-6 border border-[#CBD5E1] rounded-xl shadow-sm transition-all duration-300"
      style={{
        transform: isHovering ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : "none",
        boxShadow: isHovering ? "0 20px 40px rgba(0, 0, 0, 0.1)" : "",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setRotation({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-white to-[#f8fafc] border border-[#CBD5E1]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#03FFB6]/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#03FFB6]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#03FFB6]/10" />

        {/* NFT Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div
            className={`w-32 h-32 rounded-full bg-[#03FFB6]/10 flex items-center justify-center mb-4 border-4 border-[#03FFB6]/30 ${isHovering ? "pulse-animation" : ""}`}
          >
            <CheckCircle className="h-16 w-16 text-[#03FFB6]" />
          </div>
          <h2 className="text-xl font-bold text-center">Prove Your Self NFT</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            A unique digital collectible that proves you're human
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-[#03FFB6]/30" />
        <div className="absolute bottom-8 left-8 w-6 h-6 rounded-full bg-[#03FFB6]/20" />
        <div className="absolute top-1/4 left-6 w-3 h-3 rounded-full bg-[#03FFB6]/40" />
      </div>
    </Card>
  )
}
