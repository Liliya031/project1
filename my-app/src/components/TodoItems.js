import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"


export default function TodoItems(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
  return (
    <div className='todo-row'>
        {props.todo.text}
        <div className="iconsContainet">
        <button onClick={() => importantTodo(todo.id)} className="important-btn"></button>
                <RiCloseCircleLine  onClick={() => removeTodo(todo.id)}/>
                <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
        </div>
    </div>
  )
}
