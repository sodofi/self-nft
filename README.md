# NFT Claim Platform

A modern web3 application for claiming NFTs, built with Next.js, ThirdWeb, and TailwindCSS.

## Features

- Modern, responsive UI with dark/light mode support
- Web3 integration with ThirdWeb SDK
- NFT claiming functionality
- Secure wallet connection
- Mobile-friendly design

## 🏗️ Architecture

The application is built using a modern tech stack:

- **Frontend Framework**: Next.js 15 with React 19
- **UI Components**: Radix UI + TailwindCSS
- **Web3 Integration**: ThirdWeb SDK
- **State Management**: React Hooks
- **Styling**: TailwindCSS with custom animations
- **Type Safety**: TypeScript

### Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── nft-card.tsx      # NFT display component
│   ├── nft-claim.tsx     # NFT claiming component
│   └── ...
├── lib/                   # Utility functions and configurations
│   ├── thirdweb.ts       # ThirdWeb configuration
│   └── utils.ts          # Helper functions
├── hooks/                 # Custom React hooks
└── public/               # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- A Web3 wallet (MetaMask, WalletConnect, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd nft-claim
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Create a `.env.local` file in the root directory with your environment variables:
   ```env
   NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id
   NEXT_PUBLIC_THIRDWEB_SECRET_KEY=your_secret_key
   ```

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Build the application:
   ```bash
   pnpm build
   # or
   npm run build
   ```

2. Start the production server:
   ```bash
   pnpm start
   # or
   npm run start
   ```

## 🔧 Development

- Run the development server with hot reloading:
  ```bash
  pnpm dev
  ```

- Lint your code:
  ```bash
  pnpm lint
  ```

## 📝 Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_THIRDWEB_CLIENT_ID`: Your ThirdWeb client ID
- `NEXT_PUBLIC_THIRDWEB_SECRET_KEY`: Your ThirdWeb secret key

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
