import { useState } from "react"

 
export const UseForm = (initialState={}) => {
    
    const [form, setform] = useState(initialState)
    

    const hanndleForm=(target)=>{
       setform({...form,[target.name]:target.value})
    }
    const reset=()=>{
       setform( initialState)
    }

    return (
         [form,hanndleForm,reset]
    )
}
