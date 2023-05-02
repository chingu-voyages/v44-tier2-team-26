import React from "react";

//create Battle! and Stop! Button functionality

export default function Scoreboard() {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-md text-black p-4">
      <h1 className="py-2 text-center text-2xl">Scoreboard</h1>

      <div className="flex gap-6">
        <div className="flex flex-col p-2 items-center">
          <div>
            <h2 className="p-2">BotName</h2>
            <p className="p-2 bg-white border-2 border-blue-950 text-black rounded-lg shadow-lg text-2xl font-bold text-center">
              0
            </p>
          </div>
          <div>
            <h2 className="p-2">BotName</h2>
            <p className="p-2 bg-white border-2 border-blue-950 text-black rounded-lg shadow-lg text-2xl font-bold text-center">
              {" "}
              0{" "}
            </p>
          </div>
        </div>
        <div className="justify-center items-center flex">
          <h2 className="text-[2rem]">VS</h2>
        </div>
        <div className="flex flex-col p-2 items-center">
          <div>
            <h2 className="p-2">BotName</h2>
            <p className="p-2 bg-white border-2 border-blue-950 text-black rounded-lg shadow-lg text-2xl font-bold text-center">
              0
            </p>
          </div>
          <div>
            <h2 className="p-2">BotName</h2>
            <p className="p-2 bg-white border-2 border-blue-950 text-black rounded-lg shadow-lg text-2xl font-bold text-center">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
