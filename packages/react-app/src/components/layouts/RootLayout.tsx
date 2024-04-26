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

// export const metadata: Metadata = {
//     title: 'Lisk Scaffold' as string,
//     description: 'This a Lisk Blockchain Scaffold',
//   };

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
       
        <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
            <Header />
            <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                {/* <Sidebar /> */}
                {children}
                <Toaster position="bottom-right" reverseOrder={false} />
            </div>
            <Footer />
        </div>
        
    );
}

export default RootLayout;