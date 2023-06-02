import React from 'react'
import Arena from "@/components/Arena";
import Footer from "@/components/Footer";
import GameControlsForm from "@/components/GameControlsForm";
import Scoreboard from "@/components/Scoreboard";
import UserControls from "@/components/UserControls";
import ChinguOde from '@/components/ChinguOde';
function game() {
  return (
       <div className=''>
      <main className="flex flex-col my-5">
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
        <button className="bg-[#46CDD2] text-white my-5 py-2 m-auto flex justify-center items-center px-4 text-xl rounded-full hover:bg-[#4De1e7] hover:ease-in-out hover:duration-500 ease-out duration-500" onClick={(e) => {e.preventDefault(); console.log("Battle start!")}}>Battle!</button>
      </main>
      <Footer />
    </div>
    
  )
}

export default game
