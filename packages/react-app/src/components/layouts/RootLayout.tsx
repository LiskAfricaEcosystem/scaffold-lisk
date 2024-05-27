import React from "react";
import { ReactNode } from "react";
import { Toaster } from 'react-hot-toast';
import { Web3Modal } from '@/context/Web3Modal';

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar"

interface LayoutProps {
    children: ReactNode;
}

export const metadata = ({
   title: "Lisk Scaffold",
   description: "Built with 🏗 Lisk Blockchain Scaffold",
});

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
       
        <div className="bg-gypsum flex flex-col min-h-screen">
            <Header />
            <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                {children}
                <Toaster position="bottom-right" reverseOrder={false} />
            </div>
            <Footer />
        </div>
        
    );
}

export default RootLayout;