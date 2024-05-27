export * from './token';
export * from './nftContract';
export * from './daoContract'
import MockNft from './MockNFTMarketplace.json'

const mockNFTAddress = '0x8baBC49Bb4Cf50a7cF2A0825B41A98FCbfC65F6C'

// read contract and write contract - ethers.js || web3.js 
import { useReadContract, useWriteContract } from "wagmi"

export const useContractMethod = () => {
    const availableTokenSetUp = {
        abi: MockNft.abi,
        address: mockNFTAddress,
        functionName: 'available',
        args: []
    }

    

}

