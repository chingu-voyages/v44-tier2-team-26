import React, { useState, useEffect } from 'react'

import Arena from "@/components/Arena";
import Footer from "@/components/Footer";
import GameControlsForm from "@/components/GameControlsForm";
import Scoreboard from "@/components/Scoreboard";
import UserControls from "@/components/UserControls";
import ChinguOde from '@/components/ChinguOde';

function game() {
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
      <h1 className="text-3xl text-center my-10">Welcome to our PacMan Game</h1>
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

        <button className="py-2 px-1 bg-blue-950 text-white rounded-full mt-4" onClick={ handleBotDisplay }> Add Bots </button>
      </main>
      <Footer />
      </div>
      )
}

export default game
