import React from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';


const TodoApp = () => {

     let dummyData=[
        { id:uuid(),task:'Watch movies'},
        { id:uuid(),task:'Study'},
        { id:uuid(),task:'Drink Water'},
        { id:uuid(),task:'Gym'}
     ]

     let [todos,setTodos]=useState(dummyData)



     function addTodo(todo){
        // console.log(todo);
        setTodos([...todos,todo]);
     }
     function deleteTodo(id){
        const newTodos= todos.filter(item=>item.id!==id);
        setTodos(newTodos);
     }

  return (
    <>
        <InputForm todoData={todos} addTodo={addTodo}/>
        <TodoList todoData={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default TodoApp