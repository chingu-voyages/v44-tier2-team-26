import Arena from "@/components/Arena";
import Footer from "@/components/Footer";
import GameControlsForm from "@/components/GameControlsForm";
import Scoreboard from "@/components/Scoreboard";
import UserControls from "@/components/UserControls";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="">
      <h1 className="text-3xl text-center my-10">Welcome to our PacMan Game</h1>
      <main className="flex flex-col mb-[5rem]">
        <div className="flex justify-center items-center gap-[5rem]">
          {/* aside section */}
          <div className="flex flex-col">
            <Scoreboard />
            <GameControlsForm />
          </div>
          {/* game view */}
          <div className="flex items-center justify-center">
            <Arena />
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <UserControls />
          <UserControls />
          <UserControls />
          <UserControls />
        </div>
      </main>
      <Footer />
    </div>
  );
}
