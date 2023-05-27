import React, { useEffect } from "react";

const GameControlsLogic = ({operation, delay}) => {
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
      // Replace the following inputs with update function for bot object
  const input1 = true;
  const input2 = false;

  const result = performLogic(input1, input2);

 

//create bot movement logic
useEffect(() => {
    const botMovementTimeout = setTimeout(() => {
      // Simulate bot movement
      //replace with actual bot movement logic
      console.log('Bot moved!');
    }, delay * 1000);

    return () => {
      clearTimeout(botMovementTimeout)
    };
  }, [delay]);


 //check console log output
 return console.log(`Result: ${String(result)}`)

}


export default GameControlsLogic;