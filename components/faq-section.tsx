"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is this NFT?",
    answer:
      "This is a special 'Prove Your Self' NFT on the Celo blockchain. It's a digital collectible that proves you're human and part of our community.",
  },
  {
    question: "How do I claim the NFT?",
    answer:
      "Connect your wallet (MetaMask, Coinbase Wallet, or any other compatible wallet), then click the 'Claim NFT' button. The NFT will be sent to your wallet address.",
  },
  {
    question: "Is there a cost to claim?",
    answer:
      "The NFT itself is free to claim, but you'll need to pay a small gas fee on the Celo network to process the transaction.",
  },
  {
    question: "Where will I see my NFT?",
    answer:
      "After claiming, your NFT will appear in your connected wallet. You can also view it on NFT marketplaces that support Celo NFTs.",
  },
  {
    question: "Can I sell or transfer this NFT?",
    answer: "Yes, once claimed, the NFT is yours to keep, sell, or transfer as you wish.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-md mt-12">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#CBD5E1] rounded-lg overflow-hidden">
            <button
              className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && <div className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
