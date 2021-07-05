import React, { useEffect } from 'react'

export const Messaje = () => {

    useEffect(() => {
        console.log('Componente montado');
        return () => {
            console.log('Componente desmontado');
        }
    }, [])

    return (
        <div>
            <p>Erres Genial</p>
        </div>
    )
}
