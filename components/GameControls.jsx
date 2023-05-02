import React from "react";

// game controls
// logic gate (AND/OR/blahblah)
//logic gate will have drop down selection
// slider to select speed (pause-length)

function GameControls() {
  return (
    <div className="px-6 pb-10 mt-[3rem] bg-white text-black rounded-md">
      <div>
        <h1 className="py-2 text-center text-xl">Game Controls</h1>
        <form action="#" className="flex flex-col">
          {/* speed slider set default? */}
          <label htmlFor="speed">Select Speed</label>
          <input
            className="accent-blue-950"
            required
            type="range"
            name="speed"
            id="speed"
            min={1}
            max={10}
            step={1}
          />
          {/* logic gate */}
          <label htmlFor="logic-gate">Select Logic</label>
          <select
            required
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
