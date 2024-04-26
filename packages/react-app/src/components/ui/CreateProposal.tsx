import React, { useState } from 'react';

type CreateProposalProps = {
    createProposal: (tokenId: string) => void;
    isLoading: boolean;
    nftBalance: number;
};


const CreateProposal: React.FC<CreateProposalProps> = ({ createProposal, isLoading, nftBalance }) => {
    const [tokenId, setTokenId] = useState('');
  
    if (isLoading) {
      return <div>Loading... Waiting for transaction...</div>;
    }
  
    if (nftBalance === 0) {
      return <div>You do not own any Devs NFTs. <br/><b>You cannot create or vote on proposals</b></div>;
    }
    
    return (
        <div>
            <h2>Create Proposal</h2>
            <input
                type="text"
                placeholder="Enter NFT Token ID"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
            />
            <button onClick={() => createProposal(tokenId)}>Create Proposal</button>
        </div>
    )
}

export default CreateProposal;