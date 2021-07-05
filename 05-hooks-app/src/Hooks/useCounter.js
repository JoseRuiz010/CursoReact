import { useState } from "react";

 

export default function useCounter(initialState=10) {
   const [counter, setCounter] = useState(initialState);

   const increment=(factor=1)=>{
       setCounter(counter + factor);
   }

   const decrement=(factor= 1)=>{
    setCounter(counter-factor);
}
const reset=(factor= 0)=>{
    setCounter(factor);
}
return{
    counter,
    increment,
    decrement,
    reset
}
}
