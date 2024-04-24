import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h1">
        Lisk DApp content goes here...
      </div>
    </div>
  );
}
