import React from 'react'
 import { HeroeList } from '../heroes/HeroeList'

export const MarvelScreen = () => {
     
    return (
        <div className='m-3 '>
            <h1>Marvel</h1>
            <hr></hr>
            <HeroeList publisher={'Marvel Comics'}></HeroeList>
        </div>
    )
}
