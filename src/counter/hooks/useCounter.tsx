import { useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState(5);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubtract = () => {
        setCounter((prevSubtract) => prevSubtract - 1);
    }
    const handleReset = () => {
        setCounter(5);
    }

  return {
    // props
    counter,
    // methods
    handleAdd,
    handleSubtract,
    handleReset,
  }
}

// TODO: INVESTIGAR BIEN ESTE CODIGO