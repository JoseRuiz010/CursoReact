import React, { useCallback, useState } from 'react'

import './efect.css'
import { ShowIncrement } from './ShowIncrement'
  const Callback = () => {


    const [counter, setcounter] = useState(10)
 /* const Increment=()=>{
      setcounter(counter+1);
  }*/

 const Increment= useCallback(
      (num) => {
        setcounter(c=>c+num);
      },
      [setcounter]
  )

 

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
           <ShowIncrement increment={Increment}></ShowIncrement>
        </div>
    )
}
export default Callback;