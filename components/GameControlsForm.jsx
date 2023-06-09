import React, { useState } from "react";
import GameControlsLogic from "./GameControlsLogic";

// game controls
// logic gate (AND/OR/blahblah)
//logic gate will have drop down selection
// slider to select speed (pause-length)

function GameControlsForm() {
  // define state for delay and logic operation
  const [selectedOperation, setSelectedOperation] = useState('')
  const [delay, setDelay] = useState(0)

//create function to set logic gate
const handleLogicGate = (e) => {
  setSelectedOperation(e.target.value)
}
  //create function to set slider
  const handleSliderChange = (e) => {
    setDelay(parseInt(e.target.value, 5))
  }

  return (
    <div className="px-6 pb-10 mt-[3rem] bg-[#08001A] text-white rounded-md shadow-lg">
      <div>
        <h1 className="py-2 text-center text-2xl font-semibold">Game Controls</h1>
        <form action="#" className="flex flex-col">
          {/* speed slider set default? */}
          <label htmlFor="delay">Select Speed(in seconds)</label>
          <input
            className="accent-[#4De1e7] mt-1"
            required
            type="range"
            name="delay"
            id="delay"
            min={0}
            max={5}
            step={1}
            value={delay}
            onChange={handleSliderChange}
          />
          {/* logic gate */}
          <label htmlFor="logic-gate" className="mt-2">Select Logic</label>
          <select
            required
            value ={selectedOperation}
            onChange={handleLogicGate}
            name="logic-gate"
            id="logic-gate"
            className="mt-1 rounded-md text-black border-2 focus:border-[#4De1e7] p-1"
          >
            <option value="">-- Select --</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="XOR">XOR</option>
            <option value="NOT">NOT</option>
          </select>
        {selectedOperation && <GameControlsLogic delay={delay} operation = {selectedOperation}/>}
        </form>
      </div>
    </div>
  );
}

export default GameControlsForm;
