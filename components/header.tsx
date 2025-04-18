import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b border-[#CBD5E1]/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#03FFB6] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <span className="font-bold text-lg">Prove Your Self</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">
            FAQ
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
