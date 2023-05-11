"use client";

import React, { useState, useEffect } from "react";

//user controls
//drop down to select 0 or 1
//select start direction (N/S/E/W)
//Nane yer bot unique

function UserControls() {

  const [inputName, setInputName] = useState("");
  const [botName, setBotName] = useState("");

  useEffect(() => {
    console.log(botName);
  }, [botName])

  return (
    <div className="px-6 pb-10 mt-[3rem] bg-white text-black rounded-md">
      <form action="" className="flex flex-col">
        {/* User controls */}
        <h1 className="py-2 text-center text-xl">Bot Designer</h1>
        <label htmlFor="botName">Name Yer Bot</label>
        <input
          className="shadow-md rounded-md border-2 border-blue-950 focus:border-blue-500 p-1"
          type="text"
          placeholder="yer bot name"
          onChange={(e)=> {setInputName(e.target.value)}}
          required
        />

        <label class="relative flex justify-between items-center group p-2 ">
          Boolean 1?
          <input
            type="checkbox"
            class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
          />
          <span class="w-16 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-blue-950 rounded-full duration-300 ease-in-out peer-checked:bg-blue-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        </label>

        <label htmlFor="direction">Starting Direction</label>
        <select
          required
          name="direction"
          id="direction"
          className="text-black border-2 border-blue-950 shadow-md rounded-md p-1"
        >
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
        <button className="py-2 px-1 bg-blue-950 text-white rounded-full mt-4" onClick={(e) => {e.preventDefault(); setBotName(inputName)}} >
          Create Bot
        </button>
      </form>
    </div>
  );
}

export default UserControls;
