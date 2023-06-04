import React, { useState } from "react";

//create Battle! and Stop! Button functionality
//pass in bots list from game page
export default function Scoreboard({ bots }) {
  // set the state for the score
  const [scores, setScores] = useState({})


  //to increment the scores, we can log collision results to bot list
  // the we pull bot list to leaderboard comp and use to add/subtract from score
//this will work when we integrate the collisions from arena
  // const handleCollision = (botId, isWin) => {
  //   setScores(prevScores => ({
  //     ...prevScores,
  //     [botId]: prevScores[botId] + (isWin ? 1 : -1) || (isWin ? 1 : -1),
  //   }))
  // }
  //pass in bot and map over each bot to create leaderboard 
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-md text-black p-4">
      <h2 className="py-2 text-center text-2xl font-bold">Leaderboard</h2>
      {/* <div className="flex gap-6 border-t-2 border-t-black w-full">
        bots.map(bot = (
          <div key={bot.id}>
          <div className="w-1/2 border-r-2 border-r-black">
            <h3>
            {bot.name}
            </h3>
            </div>
        <div>
          <p>
          {scores[bot.id] || 0
          }</p>
          </div>
          </div>
       
       
        ))
        
        
      </div> */}
    </div>
  );
}
