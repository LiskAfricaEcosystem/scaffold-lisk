import React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@rainbow-me/rainbowkit/styles.css';
import {
  
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { http, WagmiProvider } from 'wagmi';
import {
  
  liskSepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";



const config = getDefaultConfig({
  appName: 'Lisk',
  projectId: 'c79c1d1861e6f7871186ea3294158ab1',
  chains: [liskSepolia],
  transports: {
    [liskSepolia.id]: http(),
   
},
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
      <RootLayout>
      <Component />
    </RootLayout>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>

    
  );
}

