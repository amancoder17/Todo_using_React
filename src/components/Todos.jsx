import React from 'react'
import { IoTrashSharp } from "react-icons/io5";

const Todos = (props) => {

  
    return (
    <li>
         {props.item.task}  <span onClick={()=>props.deleteTodo(props.item.id)}><IoTrashSharp /> </span>    
    </li>
  )
}

export default Todos