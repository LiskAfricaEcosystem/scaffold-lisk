import React from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Web3Modal } from '@/context/Web3Modal';
import RootLayout from "@/components/layouts/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Modal>
      <RainbowKitProvider>
        <RootLayout>
          <Component />
        </RootLayout>
      </RainbowKitProvider>
    </Web3Modal>
  );
}

