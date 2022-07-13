import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import axios,{AxiosResponse} from "axios"
import TodoItem from './TodoItem'
export interface ITodoItems {
    id:number,
    title:string,
    status:boolean
}
function Todos() {
    const [todos,setTodos] = useState<ITodoItems[]>([]);
   const handleAddChange =(title:string)=>{
      const payload = {
        title,
        status:false
      }
      axios.post("http://localhost:3030/todos",payload)
      .then(getTodos)
   }
   const getTodos =()=>{
      axios.get("http://localhost:3030/todos")
    //   .then(({data}:{data:ITodoItems[]})=>{
    //     setTodos(data)
    //   })
    // this is another way writing for response
    .then((r : AxiosResponse<ITodoItems[]>)=>{
        const {data}=r;
        setTodos(data)
    })
      
      
   }
   useEffect(()=>{
    //   if(todos.length===""){
    //      return 
    //   }
     getTodos()
   },[])
  return (
    <div>
        <Header label="Todo App"/>
        <TodoInput onClick={handleAddChange}/>
        {todos.length >0 && todos.map((items)=>(
            <TodoItem key={items.id} {...items}/>
        ))}
    </div>
  )
}

export default Todos