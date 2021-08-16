import React from 'react'

export const LoginScreen = ({history}) => {
    const handleClick=()=>{
        //history.push('/');
        history.replace('/');
    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>

            <button 
            onClick={handleClick}
            className='btn btn-primary'>Iniciar Sesion</button>
        </div>
    )
}
