import React from "react";

const Arena = () => {

  const numRows = 8; 
  const numColumns = 8;

  // Generate the grid layout for the Arena 
  const renderGrid = () => {
    const cells = []; 

    for (let col = 0; col < numColumns; col++) {
      for( let row = 0; row< numRows; row++) {
        cells.push(
          <li
            key = {`${row}-${col}}`}
            className="border-[1px] border-white"
          ></li>
        );
      }
    }
    return cells; 
  }

  return (
    <div className="flex justify-center items-center">
      <ul className="h-[30rem] w-[30rem] grid grid-cols-8 bg-[#08001A] rounded-md shadow-lg text-black">
        {/* Rendering the grid cells for the game that is 8 x 8*/}
        {renderGrid()}
      </ul>
    </div>
  );
}

export default Arena;