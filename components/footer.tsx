export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-4">
          <a href="#" className="text-gray-500 hover:text-[#03FFB6] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-[#03FFB6] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7.5a3.5 3.5 0 0 0 3.5 3.5H14" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 20.75a3.5 3.5 0 0 0-7 0" />
              <circle cx="18.5" cy="15.5" r="2.5" />
            </svg>
          </a>
        </div>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Prove Your Self. All rights reserved.</p>
      </div>
    </footer>
  )
}
