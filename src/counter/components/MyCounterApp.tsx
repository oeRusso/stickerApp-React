// import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {

   const {handleAdd,handleSubtract,handleReset,counter} = useCounter()

    
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>counter: {counter}</h1>
        <div style={{display:'flex', gap:'10px'}}>
            <button onClick={handleAdd}>Incrementar</button>
            <button onClick={handleSubtract}>Decrementar</button>
            <button onClick={handleReset}>Resetear</button>
        </div>
   
    </div>
  )
}
