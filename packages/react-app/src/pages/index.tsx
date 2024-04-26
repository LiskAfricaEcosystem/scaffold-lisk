import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import CreateProposal from "../components/ui/CreateProposal";
import ViewProposals from "../components/ui/ViewProposals";

const inter = Inter({ subsets: ["latin"] });

type TabName = 'create' | 'view';

type Proposal = {
  proposalId: string;
  nftTokenId: string;
  deadline: Date;
  yayVotes: string;
  nayVotes: string;
  executed: boolean;
};

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [selectedTab, setSelectedTab] = useState("create")
  const { address, isConnected } = useAccount();

  const [proposals, setProposals] = useState<Proposal[]>([{
    proposalId: '1',
    nftTokenId: '101',
    deadline: new Date(new Date().getTime() + 300000), // 5 minutes from now
    yayVotes: '10',
    nayVotes: '5',
    executed: false
}]);

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

  const voteOnProposal = (proposalId: string, vote: 'YAY' | 'NAY') => {
    console.log(`Voting ${vote} on proposal ${proposalId}`);
    // Add actual voting logic here
  };

const executeProposal = (proposalId: string) => {
    console.log(`Executing proposal ${proposalId}`);
    // Add actual execution logic here
  };

  // Tabs
  const handleTabChange = (tabName: TabName) => {
      setSelectedTab(tabName);
  }

  const renderTabContent = () => {
    switch (selectedTab) {
        case "create":
            return <CreateProposal createProposal={() => { }} isLoading={false} nftBalance={1} />;
        case "view":
            return <ViewProposals proposals={proposals} voteOnProposal={voteOnProposal} executeProposal={executeProposal} />;
        default:
            return <div>Select a tab</div>;
    }
};

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="tab-header flex gap-4 mb-4">
      <button
        className={`p-2 ${selectedTab === "create" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => handleTabChange("create")}
      >
        Create Proposal
      </button>
      <button
        className={`p-2 ${selectedTab === "view" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => handleTabChange("view")}
      >
        View Proposals
      </button>
    </div>
    <div className="tab-content">
      {renderTabContent()}
    </div>
  </div>
    // <div className="flex flex-col justify-center items-center">
    //   <div className="h1 flex flex-col">
    //    <span>Lisk DApp content goes here...</span> 
    //    <span>   {isMounted &&(
    //       address
    //     )}</span>
      
    //   </div>
    // </div>
  );
}
