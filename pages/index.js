

import react from "react";

import Link from "next/link";



export default function Home() {

  return (
    <div className="flex items-center justify-center h-screen">
     <div className="flex flex-col items-center justify-center">
    <h1 className="font-header font-bold text-white text-5xl text-center">Welcome to BooleBot</h1>
   <Link href="/game">
   <button className="bg-[#46CDD2] text-white my-5 py-2 px-4 text-xl rounded-lg hover:bg-[#4De1e7] hover:ease-in-out hover:duration-500 ease-out duration-500">Let's Play</button>
   </Link> 
   </div>

    </div>
  
  );
}