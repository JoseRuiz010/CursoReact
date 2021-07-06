import React, { useEffect, useState } from 'react'
import './efect.css'
import { Messaje } from './Messaje';
export default function SimpleForm() {
   const [formState, setformState] = useState({
        name:'',
        email:''
    })

    const {name,email}=formState;
    useEffect(() => {
     //   console.log('Hey');
     


    },[])
    useEffect(() => {
        //   console.log('Hey');
       },[name])
       useEffect(() => {
        //   console.log('Hey');
       },[email])
       useEffect(() => {
        //   console.log('Hey');
       },[formState])
 

   const handleInputChange=(e)=>{
       const {target}=e;
       e.preventDefault();
       
       setformState({...formState, [target.name]:target.value})
       console.log(formState);
   }
    return (
        <>
            <h1>Use Effect</h1>
            <hr></hr>

            <div className='form-group'>
                <input 
                type='text' 
                name='name'
                className='form-control'
                placeholder='Ingrese su nombre'
                autoComplete='off'
                value={name}   
                onChange={handleInputChange}
                ></input>
            </div>
            <br></br>
            <div className='form-group'>
                <input 
                type='text' 
                name='email'
                className='form-control'
                placeholder='Ingrese su email'
                autoComplete='off'
                value={email}   
                onChange={handleInputChange}
                ></input>
    
            </div>
            <br></br>
    
     {name==='1234'&&<Messaje></Messaje>}
        </>
    )

}
