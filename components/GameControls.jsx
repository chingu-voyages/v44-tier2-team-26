import React, { useState } from "react";

// game controls
// logic gate (AND/OR/blahblah)
//logic gate will have drop down selection
// slider to select speed (pause-length)

function GameControls() {
  // define state for delay and logic operation
  const [selectedOperation, setSelectedOperation] = useState('AND')
  const [delay, setDelay] = useState(1)

  // define boolean logic functions
  // need to define bots in list or something
  // finding that I'm actually not totally sure what the point of this is???
  
  const performLogic = (bot) => {
    if (selectedOperation === 'AND') { 
      return bot.positionX && bot.positionY
    } else if (selectedOperation === "OR"){
      return bot.positionX || bot.positionY
    } else if (selectedOperation === 'XOR'){
      return bot.positionX !== bot.positionY
    } else if (selectedOperation === "NOT"){
      return !bot.positionX
    } else {return false}
  }

  //create function to set slider
  const handleSliderChange = (e) => {
    setDelay(Number(e.target.value))
  }
  return (
    <div className="px-6 pb-10 mt-[3rem] bg-white text-black rounded-md">
      <div>
        <h1 className="py-2 text-center text-xl">Game Controls</h1>
        <form action="#" className="flex flex-col">
          {/* speed slider set default? */}
          <label htmlFor="speed">Select Speed(in seconds)</label>
          <input
            className="accent-blue-950"
            required
            type="range"
            name="speed"
            id="speed"
            min={1}
            max={5}
            step={1}
            value={delay}
            onChange={handleSliderChange}
          />
          {/* logic gate */}
          <label htmlFor="logic-gate">Select Logic</label>
          <select
            required
            value ={selectedOperation}
            onChange={(e) => setSelectedOperation(e.target.value)}
            name="logic-gate"
            id="logic-gate"
            className="shadow-md rounded-md border-2 border-blue-950 focus:border-blue-500 p-1"
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="XOR">XOR</option>
            <option value="NOT">NOT</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default GameControls;
