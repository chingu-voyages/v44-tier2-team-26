import React, { useEffect } from "react";

const GameControlsLogic = ({operation, delay}) => {
    useEffect(() => {
        const performLogic = (input1, input2) => {
          switch (operation) {
            case 'AND':
              return input1 && input2;
            case 'OR':
              return input1 || input2;
            case 'XOR':
              return input1 !== input2;
            case 'NOT':
              return !input1;
            default:
              return false;
          }
        };
    //list of bots for testing
        const bots = [
          {input1: true, input2: false },
          {  input2: false, input2: true },
          // Add more bots as needed
        ];
    

//create bot movement logic for ALL bots
const botMovementTimeouts = bots.map((bot, index) => {
    const { input1, input2 } = bot;
    
    const result = performLogic(input1, input2);

    return setTimeout(() => {
      // Simulate bot movement
      console.log(`Bot ${index + 1} moved after ${delay} seconds with result: ${String(result)}`);
    }, delay * 1000);
  });

    return () => {
        botMovementTimeouts.forEach((timeout) => {
          clearTimeout(timeout);
        });
      };
    }, [operation, delay]);


 //check console log output
 return <div></div>

}


export default GameControlsLogic;