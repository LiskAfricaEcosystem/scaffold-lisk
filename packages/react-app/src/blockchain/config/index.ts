import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { cookieStorage, createStorage, http } from 'wagmi';
import { mainnet, bscTestnet, sepolia, liskSepolia } from 'wagmi/chains';

export const projectId = 'a8a94eaa29bf7b1d3a0d94172c58e6ac';

if (!projectId) throw new Error('Project ID is not defined');

// meta data for the dapp
const metadata = {
  name: 'Lisk-Scaffold',
  description: 'Lisk Scaffold Example Dapp',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};


export const wagmiLiskconfig = getDefaultConfig({
  appName: 'Lisk-Scaffold',
  projectId: projectId, // 'c79c1d1861e6f7871186ea3294158ab1',
  chains: [liskSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR) set this to true
  transports: {
    [liskSepolia.id]: http(),
  },
});

export const wagmiConfig = defaultWagmiConfig({
    chains: [mainnet, sepolia, liskSepolia ], // required
    projectId, // required
    metadata, // required
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [liskSepolia.id]: http(),
      // [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545'),
    },
    storage: createStorage({
      storage: cookieStorage,
    }),
    enableWalletConnect: true, // Optional - true by default
    enableInjected: true, // Optional - true by default
    enableEIP6963: true, // Optional - true by default
    enableCoinbase: true, // Optional - true by default
  });
  