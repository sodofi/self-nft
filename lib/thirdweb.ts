import { ThirdwebSDK } from "@thirdweb-dev/sdk"

// This is the chainId for Celo
export const CHAIN_ID = 42220

// Initialize the SDK with the Celo chain
export const sdk = new ThirdwebSDK("celo")

// Export the contract address for easy access
export const CONTRACT_ADDRESS = "0x4387891bE5dba7159829a1d3758d26c70CcaE6bf"
