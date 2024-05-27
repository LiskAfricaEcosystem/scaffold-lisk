import React, {useEffect, useState} from "react";
import type { AppProps } from "next/app";
import { RainbowKitProvider, darkTheme, lightTheme  } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Web3Modal } from '@/context/Web3Modal';
import RootLayout from "@/components/layouts/RootLayout";
import { ThemeProvider } from "@/components/layouts/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider enableSystem>
    <Web3Modal>
      <RainbowKitProvider theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}>
        <RootLayout>
          <Component />
        </RootLayout>
      </RainbowKitProvider>
    </Web3Modal>
    </ThemeProvider>
  );
}

