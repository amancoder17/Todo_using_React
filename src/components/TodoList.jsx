import React from 'react'
import Todos from './Todos'

const TodoList = (props) => {


    const todos=props.todoData.map((item,index)=>{
        return <Todos key={item.id} item={item} deleteTodo={props.deleteTodo}/>
    })


  return (
    <div>
        {todos}  
    </div>
  )
}

export default TodoList