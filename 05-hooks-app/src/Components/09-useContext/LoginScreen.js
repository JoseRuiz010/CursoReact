import React, { useContext } from 'react'
import { UserContext } from './Usercontext'

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    const iniciasSesion=()=>{
        console.log('iniciar');
        setUser({id:123,name:'Jose'})
    }
    return (
        <div>
            <h1>Login</h1>
            <hr></hr>

            <button 
            className='btn btn-primary'
            onClick={()=>iniciasSesion()}
            >Iniciar Sesion</button>

        </div>
    )
}
