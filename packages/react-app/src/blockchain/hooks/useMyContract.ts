import { useEffect, useState } from 'react';
import { useAccount, useConnect, useReadContract, useWriteContract } from 'wagmi';
import abi from '../abis/SampleContract.json';

const CONTRACT_ADDRESS = '0xd584D4BA3Dd0200b3e27d67Dd39647ea43B239c5'; // 0xSampleContractAddress

export const useMyContract = () => {
    const setGetData =()=>{
        return {
            address: CONTRACT_ADDRESS,
            abi: abi,
            functionName: 'getData',
            args:[],
        }
    }
    
    const { data: readData, isError: readError, error: readContractError, isLoading: isReadLoading } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'getData',
    });
    
    const { writeContractAsync:writeContract,isSuccess } = useWriteContract()  

    const setContractData = async(_data:number)=>{
        const tx = await writeContract({
            address: CONTRACT_ADDRESS,
            abi: abi,
            functionName: 'setData',
            args:[_data]
        })
        return isSuccess
         
    }
    
    
    return { readData, setGetData, writeContract, readError, readContractError, isReadLoading,setContractData };
};

