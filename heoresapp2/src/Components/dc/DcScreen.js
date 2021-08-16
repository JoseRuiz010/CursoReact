import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcScreen = () => {
     
    return (
        <div>
            <h1>DC Comics</h1>
            <hr></hr>

           <HeroeList publisher={'DC Comics'}></HeroeList>
        </div>
    )
}
