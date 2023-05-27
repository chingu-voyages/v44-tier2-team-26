import React from 'react'
import Arena from "@/components/Arena";
import Footer from "@/components/Footer";
import GameControlsForm from "@/components/GameControlsForm";
import Scoreboard from "@/components/Scoreboard";
import UserControls from "@/components/UserControls";
import ChinguOde from '@/components/ChinguOde';
function game() {
  return (
       <div className='py-4'>
      <main className="flex flex-col mb-[5rem]">
        <ChinguOde/>
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
    
  )
}

export default game
