import React, { useState, useEffect } from 'react'

import Arena from "@/components/Arena";
import Footer from "@/components/Footer";
import GameControlsForm from "@/components/GameControlsForm";
import Scoreboard from "@/components/Scoreboard";
import UserControls from "@/components/UserControls";
import ChinguOde from '@/components/ChinguOde';

function game() {

  const [started, setStarted] = useState(false);

 const battleStart = (e) => {
    e.preventDefault(); 
    setStarted(true); 
    console.log("Battle start!")
  }

  const battleStop = (e) => {
    e.preventDefault(); 
    setStarted(false); 
    console.log("Stop battle!")
  }


  const [bots, setBots] = useState([]);

  const handleAddBot = (bot) => {
    const botExists = bots.some((existingBot) => existingBot.name === bot.name);
    if (botExists) {
      return true; // Bot name already exists
    } else {
      setBots((prevBots) => [...prevBots, bot]);
      alert(`${bot.name} has been added to the game`)
      return false; // Bot name is unique
    }
    console.log(bots)
  };

  const handleBotDisplay = (e) => {
    e.preventDefault();
    setBots([])
  }

  useEffect(() => {
    console.log(bots);
  }, [bots]);

  return (
    <div className="">
      <main className="flex flex-col my-5">
        <ChinguOde/>
        <div className="flex justify-center items-center gap-[5rem]">
          {/* aside section */}
          <div className="flex flex-col">
            <Scoreboard bots={bots} />
            <GameControlsForm />
          </div>
          {/* game view */}
          <div className="flex items-center justify-center">
            <Arena />
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <UserControls handleAddBot = { handleAddBot } />
          <UserControls handleAddBot = { handleAddBot } />
          <UserControls handleAddBot = { handleAddBot } />
          <UserControls handleAddBot = { handleAddBot } />
        </div>

        {started ? (<button className="bg-[#46CDD2] text-white my-5 py-2 m-auto flex justify-center items-center px-4 text-xl rounded-full hover:bg-[#4De1e7] hover:ease-in-out hover:duration-500 ease-out duration-500" onClick={battleStop}>Stop!</button>) 
        : (<button className="bg-[#46CDD2] text-white my-5 py-2 m-auto flex justify-center items-center px-4 text-xl rounded-full hover:bg-[#4De1e7] hover:ease-in-out hover:duration-500 ease-out duration-500" onClick={battleStart}>Battle!</button>)}
        

      </main>
      <Footer />
      </div>
      )
}

export default game
