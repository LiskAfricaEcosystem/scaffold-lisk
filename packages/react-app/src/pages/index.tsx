import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {
      setIsMounted(true);
  }, []);

  useEffect(() => {
      if (isConnected && address) {
          setUserAddress(address);
      }
  }, [address, isConnected]);

  if (!isMounted) {
      return null;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h1 flex flex-col">
       <span>Lisk DApp content goes here...</span> 
       <span>   {isMounted &&(
          address
        )}</span>
      
      </div>
    </div>
  );
}
