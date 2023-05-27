import React, { useState } from "react";
import GameControlsLogic from "./GameControlsLogic";

// game controls
// logic gate (AND/OR/blahblah)
//logic gate will have drop down selection
// slider to select speed (pause-length)

function GameControlsForm() {
  // define state for delay and logic operation
  const [selectedOperation, setSelectedOperation] = useState('')
  const [delay, setDelay] = useState(1)
  console.log(`Logic set to ${selectedOperation}`)
  console.log(`Slider: ${delay} seconds`)
  // define boolean logic functions
  // need to define bots in list or something
  // finding that I'm actually not totally sure what the point of this is???
  // is it to check for bot position to determine wins? like is this logic used to define how collisions happen?
  
  const performLogic = (bot) => {
    if (selectedOperation === 'AND') { 
      return bot.positionX && bot.positionY
      console.log(`&&`)
    } else if (selectedOperation === "OR"){
      return bot.positionX || bot.positionY
      console.log('||')
    } else if (selectedOperation === 'XOR'){
      return bot.positionX !== bot.positionY
      console.log('!==')
    } else if (selectedOperation === "NOT"){
      return !bot.positionX
      console.log('!')
    } else {
      return false 
      console.log(`error`)}
  }
//create function to set logic gate
const handleLogicGate = (e) => {
  setSelectedOperation(e.target.value)
  
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
            onChange={handleLogicGate}
            name="logic-gate"
            id="logic-gate"
            className="shadow-md rounded-md border-2 border-blue-950 focus:border-blue-500 p-1"
          >
            <option value="">-- Select --</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="XOR">XOR</option>
            <option value="NOT">NOT</option>
          </select>
        {selectedOperation && <GameControlsLogic operation = {selectedOperation}/>}
        </form>
      </div>
    </div>
  );
}

export default GameControlsForm;
