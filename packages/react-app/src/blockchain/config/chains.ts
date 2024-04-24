// Custom chain definition
export const liskSepolia = {
    id: 4202,
    name: 'lisk-sepolia',
    network: 'lisk-sepolia',
    rpcUrls: {
      default: 'https://rpc.sepolia-api.lisk.com',
    },
    nativeCurrency: {
      name: 'Lisk Token', // Example, replace with actual token name if different
      symbol: 'LSK', // Example, replace with actual symbol
      decimals: 18, // Adjust as per the actual token decimals
    },
    blockExplorers: {
      default: { name: 'Lisk Explorer', url: 'https://sepolia-blockscout.lisk.com' },
    },
  };
  