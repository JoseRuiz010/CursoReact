import React, { useEffect, useReducer } from 'react'
 import { todoReducer} from'./TodoreReducer'
 import './styles.css'
import { useForm } from '../../Hooks/useForm'
 

const init=()=>{
   return JSON.parse(localStorage.getItem('todos')) 
}
 const TodoApp = () => {
   const [todos,dispatch] = useReducer(todoReducer, [],init)
   console.log(todos);

  useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))       
  }, [todos])

   const [{descripcion},handleInpitchange,reset]=useForm({
    descripcion:'',
});
   const handleSubmit=(e)=>{
        e.preventDefault();
        if(descripcion.trim().length<=1) return


        const newTodo={
            id: new Date().getTime(),
            desc: descripcion,
            done:false
        };
        const action={
            type:'add',
            payload:newTodo
        }
        dispatch(action)
        reset()
   }

    return (
        <div className='container m-3'>
            <h1>TodoApp {todos.length}</h1>
        <hr/>
     
        <div className='row'>
        <div className='col-7'>   <ul className='list-group list-group-flush'> 
        {
            todos.map((t,i)=>(
                 <li
                 className='list-group-item'
                 key={t.id}>
                     <p className='text-center'>{i+1 }. {t.desc}</p>
                     <button className='btn btn-danger'> Delete</button>
                      </li>
            ))
        }     
        </ul> </div>
        <div className='col-5'>  
        
        <h4>Agregar TODO</h4>
        <hr/>
        <form onSubmit={handleSubmit}>
            <input value={descripcion} onChange={handleInpitchange} className='form-control' type='text' name='descripcion'placeholder='Aprender...' ></input>
            <button type='submit' className='btn btn-outline-primary mt-1 d-block'>Agregar</button>
        </form>
        </div>
      </div>
        </div>
    )
}
export default TodoApp;