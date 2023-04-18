import Image from "next/image";
import { Inter } from "next/font/google";
import Introduction from "./Introduction";
import HeaderBar from "./Headerbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <Introduction />
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="bg-gray-100 p-4 mb-4 w-70vw">Content Container 1</div>
        <div className="bg-gray-200 p-4 mb-4 w-70vw">Content Container 2</div>
        <div className="bg-gray-300 p-4 mb-4 w-70vw">Content Container 3</div>
        <div className="bg-gray-400 p-4 mb-4 w-70vw">Content Container 4</div>
        <div className="bg-gray-500 p-4 mb-4 w-70vw">Content Container 5</div>
      </div>
    </div>
  );
}
