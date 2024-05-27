import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { type BaseError, useAccount, useConnect, useDisconnect, useReadContract, useWriteContract  } from "wagmi";
import { useMyContract } from "../blockchain/hooks/useMyContract"
import abi from '../blockchain/abis/SampleContract.json';

const CONTRACT_ADDRESS = '0xd584D4BA3Dd0200b3e27d67Dd39647ea43B239c5'; // 0xSampleContractAddress

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { address, isConnected } = useAccount();

  const { setGetData, writeContract, readError, readContractError, isReadLoading, writeError, writeContractError, isWriteLoading } = useMyContract();
  const [data, setData] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<number>(0);

  const allPairsConfig = setGetData();

  const { data: readData, isError: readIsError, error: readErrorData, isLoading: readIsLoading } = useReadContract({
    address: allPairsConfig.address,
    abi: allPairsConfig.abi,
    functionName: allPairsConfig.functionName,
    args: allPairsConfig.args,
  });

  useEffect(() => {
    console.log("readData", readData);
    console.log("readError", readError);
    console.log("readContractError", readContractError);
    console.log("isReadLoading", isReadLoading);
  }, [readData, readError, readContractError, isReadLoading]);
  

  const handleWrite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tx = await writeContract({ args: [inputValue] });
      await tx.wait();
      console.log("Transaction Hash:", tx.hash);
    } catch (error) {
      console.error("Error writing data:", writeContractError);
    }
  };

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
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">Lisk Scaffold</span>
        </h1>
        {isConnected ? (
        <div className="flex justify-center items-center space-x-2">
          <p className="my-2 font-medium">Connected wallet address</p>
          <span>{userAddress}</span>
        </div>
        ) : (
        <div className="flex justify-center items-center space-x-2">
          <p className="my-2 font-medium">No Wallet Connected</p>
        </div>
        )}
        <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/react-app/pages/index.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              sampleContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
      </div>


      <div>
      <form onSubmit={handleWrite}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          required
        />
        <button type="submit">Write to Contract</button>
      </form>
      </div>
      <ReadContract />

      
      {/* {readError ? (
        <div>Error: {(readContractError as BaseError).shortMessage || readContractError.message}</div>
      ) : (
      <button onClick={() => console.log("Read Data:", readData)}>Read from Contract</button>
      {data && <p>Stored Data: {data}</p>}

      )} */}
    </div>
  );
}


  // read contract 
  function ReadContract() {
    const { data: data } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'getData'
    })


  
    return (
      <div>
        <h2>Read</h2>
        <div>Balance: {data}</div>
      </div>
    )
  }